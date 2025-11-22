
'use client';

import React, { useEffect, useRef } from 'react';

// Replace with your actual API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

export default function GoogleMapWithControls() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Load Google Maps script
  useEffect(() => {
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap&v=weekly`;
    script.async = true;
    script.defer = true;
    
    // Define the callback before loading script
    (window as any).initMap = () => {
      setIsLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
      delete (window as any).initMap;
    };
  }, []);

  // Initialize map with custom controls
  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;

    // Create the map
    const map = new google.maps.Map(mapRef.current, {
      zoom: 4,
      center: { lat: 49.496675, lng: -102.65625 },
    });

    // Add KML Layer (Flickr GeoRSS feed)
    const georssLayer = new google.maps.KmlLayer({
      url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
    });
    georssLayer.setMap(map);

    // Create custom control button
    const centerControlDiv = document.createElement("div");
    const controlButton = createCenterControl(map);

    // Add control to map
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    mapInstanceRef.current = map;
  }, [isLoaded]);

  // Function to create the center control button
  const createCenterControl = (map: google.maps.Map) => {
    const controlButton = document.createElement("button");
    
    // Set CSS for the control
    controlButton.style.backgroundColor = "#fff";
    controlButton.style.border = "2px solid #fff";
    controlButton.style.borderRadius = "3px";
    controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlButton.style.color = "rgb(25,25,25)";
    controlButton.style.cursor = "pointer";
    controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
    controlButton.style.fontSize = "16px";
    controlButton.style.lineHeight = "38px";
    controlButton.style.margin = "8px 0 22px";
    controlButton.style.padding = "0 5px";
    controlButton.style.textAlign = "center";

    controlButton.textContent = "Center Map on Chicago";
    controlButton.title = "Click to recenter the map";
    controlButton.type = "button";

    // Add hover effect
    controlButton.addEventListener("mouseenter", () => {
      controlButton.style.backgroundColor = "#f0f0f0";
    });
    controlButton.addEventListener("mouseleave", () => {
      controlButton.style.backgroundColor = "#fff";
    });
  };

  return (
    <div className="h-screen w-full">
      <div 
        ref={mapRef} 
        className="h-full w-full"
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-600">Loading Google Maps...</p>
        </div>
      )}

    </div>
  );
}