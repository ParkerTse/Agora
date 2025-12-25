'use client';
import React from 'react';

interface ClearButtonProps {
  onClick: () => void;
  visible: boolean; // Only show if there is actually a pin to delete
}

export default function ClearPinButton({ onClick, visible }: ClearButtonProps) {
  if (!visible) return null;

  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 rounded-lg font-semibold bg-white text-red-600 border border-red-600 hover:bg-red-50 transition-all shadow-sm flex items-center gap-2"
    >
      <span>🗑️</span> Delete Pin
    </button>
  );
}