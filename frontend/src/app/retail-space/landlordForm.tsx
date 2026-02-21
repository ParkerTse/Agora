'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface LandlordFormProps {
  formData: {
    address: string;
    description: string;
    price: string;
    squareFeet: string;
    latitude: string;
    longitude: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: (e: React.FormEvent) => void;
  status: string;
}

export default function LandlordForm({ formData, setFormData, onSubmit, status }: LandlordFormProps) {
  
  // 1. Create a reference for the input element
  const addressInputRef = useRef<HTMLInputElement>(null);

  // 2. Initialize Google Autocomplete with a Safety Check
  useEffect(() => {
    // Helper function to attach autocomplete once Google is ready
    const initAutocomplete = () => {
      if (!addressInputRef.current || !window.google || !window.google.maps || !window.google.maps.places) {
        return;
      }

      const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        types: ['address'], 
        componentRestrictions: { country: 'us' } 
      });

      // Listen for when the user selects an address
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        if (place.geometry && place.geometry.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          const formattedAddress = place.formatted_address || '';

          // Update the Form Data automatically
          setFormData((prev: any) => ({
            ...prev,
            address: formattedAddress,
            latitude: lat.toString(),
            longitude: lng.toString()
          }));
        }
      });
    };

    // LOGIC: Check if Google is ready. If not, wait for it.
    if (window.google && window.google.maps && window.google.maps.places) {
      // Script is already loaded
      initAutocomplete();
    } else {
      // Script is loading... check every 100ms
      const checkForGoogle = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(checkForGoogle);
          initAutocomplete();
        }
      }, 100);

      // Cleanup interval if user leaves page
      return () => clearInterval(checkForGoogle);
    }
  }, [setFormData]);

  return (
    <div className="w-1/3 p-8 bg-white overflow-y-auto border-r border-gray-200">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Post a Space</h1>
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to Map
        </Link>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Building Name / Address</label>
          <input 
            ref={addressInputRef} // <--- This connects the input to Google
            required
            type="text" 
            placeholder="Start typing an address..."
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea 
            placeholder="e.g. Corner unit, great visibility..."
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            rows={3}
            value={formData.description}
            onChange={e => setFormData({...formData, description: e.target.value})}
          />
        </div>

        {/* Price and Square Feet Row */}
        <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent ($)</label>
              <input 
                required
                type="number" 
                placeholder="5000"
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size (Sq Ft)</label>
              <input 
                required
                type="number" 
                placeholder="1200"
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.squareFeet}
                onChange={e => setFormData({...formData, squareFeet: e.target.value})}
              />
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Latitude</label>
            <input 
              type="text" 
              readOnly 
              className="w-full p-2 border rounded text-sm bg-gray-100 cursor-not-allowed"
              value={formData.latitude}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Longitude</label>
            <input 
              type="text" 
              readOnly 
              className="w-full p-2 border rounded text-sm bg-gray-100 cursor-not-allowed"
              value={formData.longitude}
            />
          </div>
        </div>
        
        <div className="p-3 bg-blue-50 text-blue-700 text-sm rounded-lg">
           📍 Search address above OR click on map.
        </div>

        <button 
          type="submit" 
          className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-all mt-4"
        >
          Post Listing
        </button>

        {status && (
          <p className={`text-center text-sm font-semibold mt-2 ${status.includes('Success') ? 'text-green-600' : 'text-red-500'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}