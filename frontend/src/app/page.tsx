'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import GoogleMapsComponent from './map';
import Topbar from './topbar';

// Define Types
interface Property {
  id: number;
  address: string;
  price: number;
  latitude: number;
  longitude: number;
  description: string;
}

export default function Home() {
  // UI State
  const [isPinMode, setIsPinMode] = useState<boolean>(false);
  const [isConfirmMode, setIsConfirmMode] = useState<boolean>(false);
  const [hasActivePin, setHasActivePin] = useState<boolean>(false);
  
  // Data Inputs
  const [radius, setRadius] = useState<number>(1); 
  const [category, setCategory] = useState<string>("Coffee Shop"); 

  // Location State
  const [searchLocation, setSearchLocation] = useState<{lat: number, lng: number} | null>(null);
  const [viewingLocation, setViewingLocation] = useState<{lat: number, lng: number} | null>(null);
  
  // Data State
  const [properties, setProperties] = useState<Property[]>([]); 
  const [demandSummary, setDemandSummary] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    fetch(`http://localhost:8080/search?lat=40.7484&lon=-73.9857&radius=20.0`)
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error("Error fetching properties:", err));
  };

  // --- HANDLER 1: CLICK A PROPERTY (View Demand) ---
  const handlePropertyClick = (lat: number, lng: number) => {
    console.log("Property Clicked:", lat, lng);
    setViewingLocation({ lat, lng });
    setHasActivePin(false);
    setIsConfirmMode(false);
    setIsPinMode(false);

    fetch(`http://localhost:8080/demand-summary?lat=${lat}&lon=${lng}`)
        .then(res => res.json())
        .then(data => setDemandSummary(data))
        .catch(err => console.error("Error fetching demand:", err));
  };

  // --- HANDLER 2: UPVOTE (Add +1 to existing demand) ---
  const handleUpvote = (categoryToUpvote: string) => {
    if (!viewingLocation) return;
    console.log("Upvoting:", categoryToUpvote);

    fetch('http://localhost:8080/wish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            category: categoryToUpvote,
            latitude: viewingLocation.lat,
            longitude: viewingLocation.lng,
            radiusMeters: 400
        })
    })
    .then(res => res.json())
    .then(() => {
        // Refresh the list immediately
        handlePropertyClick(viewingLocation.lat, viewingLocation.lng);
    })
    .catch(err => alert("Error upvoting: " + err));
  };

  // --- HANDLER 3: CONFIRM NEW WISH (The one that was broken) ---
  const handleConfirm = () => {
    console.log("Confirm button clicked!"); // DEBUG LOG

    if (!searchLocation) {
        alert("Error: No location selected. Please drop a pin first.");
        return;
    }

    const radiusMeters = radius * 1609.34; 

    // Save to Backend
    fetch('http://localhost:8080/wish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            category: category,
            latitude: searchLocation.lat,
            longitude: searchLocation.lng,
            radiusMeters: radiusMeters
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Backend failed");
        return res.json();
    })
    .then(() => {
        // Success Logic
        setHasActivePin(false);
        setIsConfirmMode(false); 
        setSearchLocation(null);
        setDemandSummary(null); 
        alert("Wish saved successfully!");
    })
    .catch(err => {
        console.error("Error saving wish:", err);
        alert("Failed to save wish. Check your backend console.");
    });
  };

  return (
    <div className="flex flex-col h-screen w-full">
              <Topbar />
      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar 
          isPinMode={isPinMode}
          isConfirmMode={isConfirmMode}
          onPinClick={() => setIsPinMode(true)}
          onConfirmClick={handleConfirm}
          radius={radius}
          onRadiusChange={setRadius}
          category={category}
          onCategoryChange={setCategory}
          hasActivePin={hasActivePin}
          onDeletePin={() => {
            setHasActivePin(false);
            setIsConfirmMode(false);
            setSearchLocation(null);
            setDemandSummary(null);
            setViewingLocation(null);
          }}
          demandSummary={demandSummary}
          onUpvote={handleUpvote}
        />

        <main className="flex-1 h-full relative">
          <GoogleMapsComponent 
            isPinMode={isPinMode}
            setPinMode={setIsPinMode}
            isConfirmMode={isConfirmMode}
            setIsConfirmMode={setIsConfirmMode}
            searchRadius={radius}
            hasActivePin={hasActivePin}
            setHasActivePin={setHasActivePin}
            properties={properties} 
            onPinPositionChange={(lat, lng) => setSearchLocation({ lat, lng })}
            onPropertyClick={handlePropertyClick}
          />
        </main>
      </div>
    </div>
  );
}