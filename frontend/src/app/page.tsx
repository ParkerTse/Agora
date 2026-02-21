'use client';
import React, { useState, useCallback } from 'react';
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
  squareFeet: number;
}

export default function Home() {
  // UI State
  const [isPinMode, setIsPinMode] = useState<boolean>(false);
  const [isConfirmMode, setIsConfirmMode] = useState<boolean>(false);
  const [hasActivePin, setHasActivePin] = useState<boolean>(false);
  
  // Data Inputs
  const [radius, setRadius] = useState<number>(1); 
  const [category, setCategory] = useState<string>("Coffee Shop"); 

  // --- LOCATION STATE ---
  // 1. For the PIN (Making a wish)
  const [pinLocation, setPinLocation] = useState<{lat: number, lng: number} | null>(null);
  
  // 2. For the SEARCH BAR
  const [searchString, setSearchString] = useState<string>(""); 

  // 3. For the SIDEBAR (Viewing demand)
  const [viewingLocation, setViewingLocation] = useState<{lat: number, lng: number} | null>(null);
  
  // 4. SELECTED BUILDING (New!)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Data State
  const [properties, setProperties] = useState<Property[]>([]); 
  const [demandSummary, setDemandSummary] = useState<Record<string, number> | null>(null);

  // --- Fetch based on Viewport ---
  const fetchProperties = useCallback((bounds?: { minLat: number, maxLat: number, minLng: number, maxLng: number }) => {
    let url = 'http://localhost:8080/api/properties';

    if (bounds) {
        const query = new URLSearchParams({
            minLat: bounds.minLat.toString(),
            maxLat: bounds.maxLat.toString(),
            minLng: bounds.minLng.toString(),
            maxLng: bounds.maxLng.toString(),
        });
        url += `?${query.toString()}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error("Error fetching properties:", err));
  }, []); 

  // --- HELPER: Fetch Demand for ANY Location ---
  const fetchDemand = (lat: number, lng: number) => {
    fetch(`http://localhost:8080/demand-summary?lat=${lat}&lon=${lng}`)
        .then(res => res.json())
        .then(data => setDemandSummary(data))
        .catch(err => console.error("Error fetching demand:", err));
  };

  // --- HANDLER 1: CLICK A PROPERTY (Building) ---
  const handlePropertyClick = (lat: number, lng: number) => {
    // 1. Find the actual property object based on these coordinates
    // This allows us to pass the Address/ID to the sidebar
    const clickedProp = properties.find(p => 
        // Use a tiny epsilon for float comparison safety, or strict equality if data is exact
        Math.abs(p.latitude - lat) < 0.00001 && Math.abs(p.longitude - lng) < 0.00001
    ) || null;

    setSelectedProperty(clickedProp); // <--- Update the specific property state
    setViewingLocation({ lat, lng });
    setHasActivePin(false);
    setIsConfirmMode(false);
    setIsPinMode(false);
    fetchDemand(lat, lng);
  };

  // --- HANDLER 2: CLICK MAP (Empty Space) ---
  const handleMapClick = (lat: number, lng: number) => {
    if (isPinMode || isConfirmMode) return;

    // Deselect specific property because we clicked empty space
    setSelectedProperty(null); 
    
    setViewingLocation({ lat, lng });
    setHasActivePin(false);
    fetchDemand(lat, lng);
  };

  // --- HANDLER 3: UPVOTE ---
  const handleUpvote = (categoryToUpvote: string) => {
    if (!viewingLocation) return;

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
        // Refresh demand to see the new vote immediately
        handlePropertyClick(viewingLocation.lat, viewingLocation.lng);
    })
    .catch(err => alert("Error upvoting: " + err));
  };

  // --- HANDLER 4: CONFIRM NEW WISH ---
  const handleConfirm = () => {
    if (!pinLocation) {
        alert("Error: No location selected.");
        return;
    }

    const radiusMeters = radius * 1609.34; 

    fetch('http://localhost:8080/wish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            category: category,
            latitude: pinLocation.lat,
            longitude: pinLocation.lng,
            radiusMeters: radiusMeters
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Backend failed");
        return res.json();
    })
    .then(() => {
        setHasActivePin(false);
        setIsConfirmMode(false); 
        setPinLocation(null);
        setDemandSummary(null); 
        setSelectedProperty(null);
        alert("Wish saved successfully!");
    })
    .catch(err => {
        console.error("Error saving wish:", err);
        alert("Failed to save wish.");
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
            setPinLocation(null);
            setDemandSummary(null);
            setViewingLocation(null);
            setSelectedProperty(null);
          }}
          demandSummary={demandSummary}
          onUpvote={handleUpvote}
          onSearch={(query) => setSearchString(query)}
          
          // 👇 THIS FIXES THE ERROR AND CONNECTS THE SIDEBAR LOGIC
          selectedProperty={selectedProperty} 
        />

        <main className="flex-1 h-full relative">
          <GoogleMapsComponent 
            // 1. Viewport Filtering
            properties={properties} 
            onBoundsChange={fetchProperties}

            // 2. Click Handling
            onPropertyClick={handlePropertyClick}
            onMapClick={handleMapClick}

            // 3. Pin & UI State
            isPinMode={isPinMode}
            setPinMode={setIsPinMode}
            isConfirmMode={isConfirmMode}
            setIsConfirmMode={setIsConfirmMode}
            searchRadius={radius}
            hasActivePin={hasActivePin}
            setHasActivePin={setHasActivePin}
            onPinPositionChange={(lat, lng) => setPinLocation({ lat, lng })}
            searchLocation={searchString}
          />
        </main>
      </div>
    </div>
  );
}