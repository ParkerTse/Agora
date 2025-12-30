'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MarkerClusterer, SuperClusterAlgorithm } from "@googlemaps/markerclusterer";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

interface Property {
  id: number;
  address: string;
  price: number;
  latitude: number;
  longitude: number;
  description: string;
  squareFeet: number;
}

interface MapProps {
  isPinMode: boolean;
  setPinMode: (value: boolean) => void;
  searchRadius: number;
  hasActivePin: boolean;
  setHasActivePin: (value: boolean) => void;
  isConfirmMode: boolean;
  setIsConfirmMode: (value: boolean) => void;
  onPinPositionChange: (lat: number, lng: number) => void;
  properties: Property[]; 
  onPropertyClick?: (lat: number, lng: number) => void;
  onMapClick?: (lat: number, lng: number) => void;
  // This is the crucial new prop
  onBoundsChange?: (bounds: { minLat: number, maxLat: number, minLng: number, maxLng: number }) => void;
  searchLocation?: string;
}

export default function GoogleMapsComponent({ 
  isPinMode, 
  setPinMode, 
  searchRadius,
  hasActivePin,
  setHasActivePin,
  isConfirmMode,
  setIsConfirmMode,
  onPinPositionChange,
  properties, 
  onPropertyClick, 
  onMapClick,
  onBoundsChange, // <--- We use this to tell the parent "I moved!"
  searchLocation 
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const clustererRef = useRef<MarkerClusterer | null>(null);
  
  // Refs for "Make a Wish" Pin
  const currentMarkerRef = useRef<any>(null); 
  const currentCircleRef = useRef<google.maps.Circle | null>(null);
  
  // Ref for "Landlord" Selection Marker
  const selectionMarkerRef = useRef<google.maps.Marker | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load Script
  useEffect(() => {
    if (window.google?.maps) { setIsLoaded(true); return; }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=weekly&libraries=marker,places,geometry`; 
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);
  }, []);

  // 2. Initialize Map & Setup "Idle" Listener
  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;
    
    const map = new google.maps.Map(mapRef.current, {
      zoom: 13,
      center: { lat: 40.5795, lng: -74.1502 }, // Centered on Staten Island/NYC
      mapId: 'DEMO_MAP_ID', 
      disableDefaultUI: true, 
      zoomControl: true,
    });
    
    mapInstanceRef.current = map;

    // --- THIS IS THE KEY PART ---
    // When the user stops dragging/zooming, we calculate the visible box
    map.addListener('idle', () => {
        if (onBoundsChange) {
            const bounds = map.getBounds();
            if (bounds) {
                const ne = bounds.getNorthEast(); // Top Right
                const sw = bounds.getSouthWest(); // Bottom Left
                
                onBoundsChange({
                    maxLat: ne.lat(),
                    maxLng: ne.lng(),
                    minLat: sw.lat(),
                    minLng: sw.lng()
                });
            }
        }
    });

  }, [isLoaded, onBoundsChange]);

  // 3. Handle Search Teleporting
  useEffect(() => {
    if (!searchLocation || !mapInstanceRef.current || !window.google) return;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: searchLocation }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
            const location = results[0].geometry.location;
            mapInstanceRef.current?.panTo(location);
            mapInstanceRef.current?.setZoom(14);
        }
    });
  }, [searchLocation, isLoaded]);

  // 4. Render Properties (Clustering)
  useEffect(() => {
    if (!mapInstanceRef.current || !window.google) return;
    
    // Clear old clusters
    if (clustererRef.current) {
        clustererRef.current.clearMarkers();
        clustererRef.current = null;
    }

    const loadMarkers = async () => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        const newMarkers: google.maps.marker.AdvancedMarkerElement[] = [];

        // Safety check to handle empty data gracefully
        (properties || []).forEach((prop) => {
            const tag = document.createElement('div');
            // Custom styling for the pins
            tag.className = 'bg-blue-600 text-white px-2 py-1 rounded shadow-md text-xs font-bold border border-white transform hover:scale-110 transition-transform cursor-pointer';
            const size = prop.squareFeet ? prop.squareFeet.toLocaleString() : '?';
            tag.innerText = `${size} sf`;
            
            const marker = new AdvancedMarkerElement({
                position: { lat: prop.latitude, lng: prop.longitude },
                content: tag,
                title: prop.address
            });

            marker.addListener("click", () => {
                if (onPropertyClick) onPropertyClick(prop.latitude, prop.longitude);
                mapInstanceRef.current?.panTo({ lat: prop.latitude, lng: prop.longitude });
            });
            newMarkers.push(marker);
        });

        clustererRef.current = new MarkerClusterer({ 
            map: mapInstanceRef.current, 
            markers: newMarkers,
            algorithm: new SuperClusterAlgorithm({ maxZoom: 15, radius: 50 }) 
        });
    };
    loadMarkers();
  }, [properties, isLoaded, onPropertyClick]); 

  // 5. Update Circle Radius
  useEffect(() => {
    if (currentCircleRef.current) {
      const meters = searchRadius * 1609.34;
      currentCircleRef.current.setRadius(meters);
    }
  }, [searchRadius]);

  // 6. Clear Pin if Cancelled
  useEffect(() => {
    if (!hasActivePin) {
      if (currentMarkerRef.current) { currentMarkerRef.current.map = null; currentMarkerRef.current = null; }
      if (currentCircleRef.current) { currentCircleRef.current.setMap(null); currentCircleRef.current = null; }
    }
  }, [hasActivePin]);

  // 7. Toggle Draggable
  useEffect(() => {
    if (currentMarkerRef.current) {
      currentMarkerRef.current.gmpDraggable = isConfirmMode;
    }
  }, [isConfirmMode]);

  // 8. PIN MODE LOGIC
  useEffect(() => {
    if (!mapInstanceRef.current || !isPinMode) return;
    const map = mapInstanceRef.current;
    map.setOptions({ draggableCursor: 'crosshair' });

    const clickListener = map.addListener('click', async (e: google.maps.MapMouseEvent) => {
      if (!e.latLng) return;
      onPinPositionChange(e.latLng.lat(), e.latLng.lng());

      if (currentMarkerRef.current) currentMarkerRef.current.map = null;
      if (currentCircleRef.current) currentCircleRef.current.setMap(null);

      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      const pinElement = document.createElement('div');
      pinElement.className = 'bg-white text-blue-600 px-3 py-1 rounded-full border-2 border-blue-600 font-bold shadow-lg text-sm cursor-grab';
      pinElement.innerText = 'New Wish';

      const newMarker = new AdvancedMarkerElement({
        map,
        position: e.latLng,
        content: pinElement,
        gmpDraggable: true, 
      });

      const newCircle = new google.maps.Circle({
        map,
        center: e.latLng,
        radius: searchRadius * 1609.34,
        fillColor: "#1a73e8",
        fillOpacity: 0.2,
        strokeColor: "#1a73e8",
        strokeWeight: 1,
        clickable: false,
      });

      newMarker.addListener('drag', () => {
        const newPos = newMarker.position as google.maps.LatLng;
        if (newPos) {
          newCircle.setCenter(newPos);
          if(typeof newPos.lat === 'function') onPinPositionChange(newPos.lat(), newPos.lng());
        }
      });
      newMarker.addListener('dragend', () => {
          const newPos = newMarker.position as google.maps.LatLng;
          if(newPos && typeof newPos.lat === 'function') onPinPositionChange(newPos.lat(), newPos.lng());
      });

      currentMarkerRef.current = newMarker;
      currentCircleRef.current = newCircle;
      setHasActivePin(true);
      setIsConfirmMode(true); 
      setPinMode(false);
      map.setOptions({ draggableCursor: null });
    });
    return () => google.maps.event.removeListener(clickListener);
  }, [isPinMode, searchRadius, setPinMode, setHasActivePin, setIsConfirmMode, onPinPositionChange]);

  // 9. GENERIC CLICK LISTENER (FIXED)
  useEffect(() => {
    if (!mapInstanceRef.current || isPinMode) return; 
    
    const map = mapInstanceRef.current;
    const listener = map.addListener('click', (e: google.maps.MapMouseEvent) => {
      if (onMapClick && e.latLng) {
        onMapClick(e.latLng.lat(), e.latLng.lng());
        
        if (selectionMarkerRef.current) {
            selectionMarkerRef.current.setMap(null);
        }

        selectionMarkerRef.current = new google.maps.Marker({ 
          position: e.latLng, 
          map: map, 
          icon: { 
            path: google.maps.SymbolPath.CIRCLE, 
            scale: 7, 
            fillColor: "black", 
            fillOpacity: 1, 
            strokeWeight: 2, 
            strokeColor: "white", 
          } 
        });
      }
    });
    return () => google.maps.event.removeListener(listener);
  }, [isPinMode, onMapClick, isLoaded]);

  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}