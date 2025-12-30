'use client';
import React from 'react';
import SearchBar from './searchBar'; // <--- Make sure this path matches where you saved SearchBar.tsx

interface SidebarProps {
  isPinMode: boolean;
  onPinClick: () => void;
  radius: number;
  onRadiusChange: (val: number) => void;
  hasActivePin: boolean;
  onDeletePin: () => void;
  isConfirmMode: boolean;
  onConfirmClick: () => void;
  
  // Category Props
  category: string;
  onCategoryChange: (val: string) => void;

  // Demand Data Props
  demandSummary: Record<string, number> | null;
  onUpvote: (categoryName: string) => void;

  // Search Prop
  onSearch: (query: string) => void;
}

export default function Sidebar({ 
  isPinMode, 
  onPinClick, 
  radius, 
  onRadiusChange, 
  hasActivePin, 
  onDeletePin,
  isConfirmMode,
  onConfirmClick,
  category,
  onCategoryChange,
  demandSummary,
  onUpvote,
  onSearch 
}: SidebarProps) {

  return (
    <aside className="w-[350px] h-full bg-white border-r shadow-lg flex flex-col p-6 z-10">
      
      {/* 1. SEARCH BAR (Now a clean, separate component) */}
      <SearchBar onSearch={onSearch} />

      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Make a Wish</h2>
        <p className="text-sm text-gray-500 mt-1">Tell landlords what this area needs.</p>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto space-y-8 pr-2 scrollbar-thin scrollbar-thumb-gray-200">
        
        {/* 2. CATEGORY SELECTION */}
        <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-gray-700">What is missing here?</label>
            
            {/* Free Text Input */}
            <input 
                type="text"
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
                placeholder="Type anything (e.g. Jazz Club)..."
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />

            {/* Quick Select Chips */}
            <div className="flex flex-wrap gap-2 mt-2">
                {['☕ Coffee Shop', '💪 Gym', '🥦 Grocery'].map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => onCategoryChange(item)}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>

        {/* 3. THE RADIUS SLIDER */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-700">How far would you travel?</label>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
              {radius} miles
            </span>
          </div>
          <input 
            type="range" 
            min="0.5" 
            max="5" 
            step="0.5"
            value={radius}
            onChange={(e) => onRadiusChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-gray-400 px-1">
            <span>Walking (0.5mi)</span>
            <span>Driving (5mi)</span>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* 4. ACTION BUTTONS */}
        <div className="flex flex-col gap-3">
          {!isConfirmMode ? (
            <button 
              onClick={onPinClick}
              className={`w-full py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
                isPinMode ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              disabled={isPinMode}
            >
              {isPinMode ? 'Click on Map...' : '📍 Drop Pin'}
            </button>
          ) : (
            <button 
              onClick={onConfirmClick}
              className="w-full py-3 rounded-xl font-bold bg-green-600 text-white shadow-md hover:bg-green-700 transition-all flex items-center justify-center gap-2"
            >
              <span>✅</span> Confirm Wish
            </button>
          )}

          {hasActivePin && (
            <button 
              onClick={onDeletePin} 
              className="w-full py-2 rounded-xl font-semibold text-red-500 border border-red-200 hover:bg-red-50 transition-colors text-sm"
            >
              Cancel
            </button>
          )}
        </div>

        {/* 5. RESULTS / SUGGESTIONS */}
        <div className="border-t pt-4">
          {demandSummary ? (
            <div className="flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Local Demand
                </h3>
                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                  Live Data
                </span>
              </div>
              
              <div className="space-y-3">
                {Object.entries(demandSummary)
                  .sort(([, a], [, b]) => b - a)
                  .map(([cat, count]) => (
                    <div key={cat} className="flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors group">
                      <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-800">{cat}</span>
                          <span className="text-[10px] text-gray-500">
                             {count} {count === 1 ? 'person wants' : 'people want'} this
                          </span>
                      </div>
                      <button 
                          onClick={() => onUpvote(cat)}
                          className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 p-2 rounded-full shadow-sm transition-all active:scale-95 flex items-center justify-center"
                          title="I want this too!"
                      >
                          <span className="text-xs font-bold">👍 +1</span>
                      </button>
                    </div>
                  ))}
                
                {Object.keys(demandSummary).length === 0 && (
                  <p className="text-sm text-gray-400 text-center mt-4">No wishes found here yet.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl px-4 py-8">
              <p className="text-xs">
                {isConfirmMode 
                  ? "Drag pin to exact spot." 
                  : "Click a building to upvote wishes."}
              </p>
            </div>
          )}
        </div>

      </div>
    </aside>
  );
}