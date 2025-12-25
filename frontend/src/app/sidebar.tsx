'use client';
import React from 'react';

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
  onUpvote
}: SidebarProps) {
  return (
    <aside className="w-[350px] h-full bg-white border-r shadow-lg flex flex-col p-6 space-y-8 z-10">
      
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Make a Wish</h2>
        <p className="text-sm text-gray-500 mt-1">Tell landlords what this area needs.</p>
      </div>

      {/* 1. CATEGORY SELECTION */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-semibold text-gray-700">What is missing here?</label>
        <select 
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        >
            <option value="Coffee Shop">☕ Coffee Shop</option>
            <option value="Gym">💪 Gym / Fitness</option>
            <option value="Bakery">🥐 Bakery</option>
            <option value="Grocery">🥦 Grocery Store</option>
            <option value="Daycare">👶 Daycare</option>
            <option value="Coworking">💻 Coworking Space</option>
        </select>
      </div>

      {/* 2. THE RADIUS SLIDER */}
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

      {/* 3. ACTION BUTTONS */}
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

      {/* 4. RESULTS / SUGGESTIONS (DYNAMIC) */}
      <div className="flex-1 border-t pt-4 overflow-hidden flex flex-col">
        {demandSummary ? (
          <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Local Demand
              </h3>
              <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                Live Data
              </span>
            </div>
            
            <div className="overflow-y-auto pr-2 space-y-3 flex-1 scrollbar-thin scrollbar-thumb-gray-200">
              {Object.entries(demandSummary)
                .sort(([, a], [, b]) => b - a)
                .map(([cat, count]) => (
                  <div key={cat} className="flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors group">
                    
                    {/* Left side: Text */}
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-800">{cat}</span>
                        <span className="text-[10px] text-gray-500">
                           {count} {count === 1 ? 'person wants' : 'people want'} this
                        </span>
                    </div>

                    {/* Right side: Upvote Button */}
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
          <div className="flex flex-col items-center justify-center flex-1 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl px-4">
            <p className="text-xs">
              {isConfirmMode 
                ? "Drag pin to exact spot." 
                : "Click a building to upvote wishes."}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}