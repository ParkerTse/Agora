'use client';
import React, { useEffect, useRef, useState } from 'react';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

interface Property {
  id: number;
  address: string;
  price: number;
  latitude: number;
  longitude: number;
  description: string;
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
  
  // NEW PROP: Function to call when a property is clicked
  onPropertyClick?: (lat: number, lng: number) => void;
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
  onPropertyClick // <--- Destructure new prop
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  
  const currentMarkerRef = useRef<any>(null); 
  const currentCircleRef = useRef<google.maps.Circle | null>(null);
  const propertyMarkersRef = useRef<any[]>([]);
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.google?.maps) { setIsLoaded(true); return; }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=weekly&libraries=marker`;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;
    mapInstanceRef.current = new google.maps.Map(mapRef.current, {
      zoom: 13,
      center: { lat: 40.7484, lng: -73.9857 }, 
      mapId: 'DEMO_MAP_ID', 
      disableDefaultUI: true, // Clean look
      zoomControl: true,
    });
  }, [isLoaded]);

  // --- RENDER PROPERTIES (Green Tags) ---
  useEffect(() => {
    if (!mapInstanceRef.current || !window.google) return;
    
    // Clear old markers
    propertyMarkersRef.current.forEach(marker => marker.map = null);
    propertyMarkersRef.current = [];

    properties.forEach(async (prop) => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        
        // Create the Green Tag
        const tag = document.createElement('div');
        tag.className = 'bg-green-600 text-white px-2 py-1 rounded shadow-md text-xs font-bold border border-white transform hover:scale-110 transition-transform cursor-pointer';
        tag.innerText = `$${(prop.price / 1000).toFixed(0)}k`;

        const marker = new AdvancedMarkerElement({
            map: mapInstanceRef.current,
            position: { lat: prop.latitude, lng: prop.longitude },
            content: tag,
            title: prop.address
        });

        // --- NEW CLICK LISTENER ---
        marker.addListener("click", () => {
            // Instead of opening a popup, we tell the Parent Component (Home)
            // that this property was clicked.
            if (onPropertyClick) {
                onPropertyClick(prop.latitude, prop.longitude);
            }
            
            // Optional: Center map on click smoothly
            mapInstanceRef.current?.panTo({ lat: prop.latitude, lng: prop.longitude });
        });

        propertyMarkersRef.current.push(marker);
    });

  }, [properties, isLoaded, onPropertyClick]); // Re-run if properties or handler changes

  // --- PINNING LOGIC (Standard) ---
  useEffect(() => {
    if (currentCircleRef.current) {
      const meters = searchRadius * 1609.34;
      currentCircleRef.current.setRadius(meters);
    }
  }, [searchRadius]);

  useEffect(() => {
    if (!hasActivePin) {
      if (currentMarkerRef.current) { currentMarkerRef.current.map = null; currentMarkerRef.current = null; }
      if (currentCircleRef.current) { currentCircleRef.current.setMap(null); currentCircleRef.current = null; }
    }
  }, [hasActivePin]);

  useEffect(() => {
    if (currentMarkerRef.current) {
      currentMarkerRef.current.gmpDraggable = isConfirmMode;
    }
  }, [isConfirmMode]);

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

  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}