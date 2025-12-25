'use client';
'use client';
import React from 'react';

interface PinButtonProps {
  isPinning: boolean;
  onClick: () => void;
}

export default function PinButton({ isPinning, onClick }: PinButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition-all shadow-md ${
        isPinning 
          ? 'bg-red-500 text-white' 
          : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
      }`}
    >
      {isPinning ? 'Cancel Pinning' : 'Place Pin'}
    </button>
  );
}
