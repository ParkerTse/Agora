'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function LandlordPage() {
  const [formData, setFormData] = useState({
    address: '',
    description: '',
    price: '',
    latitude: '40.7484', // Default defaults for MVP
    longitude: '-73.9857'
  });
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');

    try {
      const res = await fetch('http://localhost:8080/property', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: formData.address,
          description: formData.description,
          price: parseFloat(formData.price),
          latitude: parseFloat(formData.latitude),
          longitude: parseFloat(formData.longitude)
        })
      });

      if (res.ok) {
        setStatus('Success! Property listed.');
        setFormData({ address: '', description: '', price: '', latitude: '40.7484', longitude: '-73.9857' });
      } else {
        setStatus('Error saving property.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network error.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Post a Space</h1>
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to Map
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Building Name / Address</label>
            <input 
              required
              type="text" 
              placeholder="e.g. 123 Main St"
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.address}
              onChange={e => setFormData({...formData, address: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              placeholder="e.g. Corner unit, great visibility, former cafe..."
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Latitude</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded text-sm bg-gray-50"
                value={formData.latitude}
                onChange={e => setFormData({...formData, latitude: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Longitude</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded text-sm bg-gray-50"
                value={formData.longitude}
                onChange={e => setFormData({...formData, longitude: e.target.value})}
              />
            </div>
          </div>
          <p className="text-xs text-gray-400">
            *In the full version, dragging a pin on the map will auto-fill coordinates.
          </p>

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
    </div>
  );
}