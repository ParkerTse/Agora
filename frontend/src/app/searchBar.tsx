'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePlacesAutocomplete } from '@/hooks/usePlacesAutocomplete';

interface SearchBarProps {
  onSearch: (placeId: string, description: string) => void; 
  // Note: We are now passing the Google "placeId" instead of just text
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  // 1. Get suggestions from our custom hook
  const predictions = usePlacesAutocomplete(query);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 2. Handle clicking outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (placeId: string, description: string) => {
    setQuery(description);
    setIsOpen(false);
    onSearch(placeId, description); // Send the ID back to the map to get coordinates
  };

  return (
    <div ref={wrapperRef} className="relative mb-6 z-50">
      
      {/* INPUT FIELD */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search city, zip, or address..." 
          className="w-full pl-4 pr-10 py-3 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 transition-all text-sm outline-none shadow-sm"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)} 
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
      </div>

      {/* DROPDOWN SUGGESTIONS */}
      {isOpen && predictions.length > 0 && (
        <ul className="absolute w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-60 overflow-y-auto">
          {predictions.map((prediction) => (
            <li 
              key={prediction.place_id}
              onClick={() => handleSelect(prediction.place_id, prediction.description)}
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b last:border-b-0 border-gray-50 flex items-center gap-2"
            >
              <span className="text-gray-400 text-xs">📍</span>
              {/* Highlight the main text (e.g., "Starbucks") vs secondary text (e.g., "Main St, NY") */}
              <div className="flex flex-col">
                 <span className="font-medium text-gray-900">
                   {prediction.structured_formatting.main_text}
                 </span>
                 <span className="text-xs text-gray-500">
                   {prediction.structured_formatting.secondary_text}
                 </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}