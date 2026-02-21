'use client';
import React, { useState } from 'react';
import Topbar from '../topbar';
import GoogleMapsComponent from '../map';
import LandlordForm from './landlordForm'; // <--- Import the new component

export default function LandlordPage() {
  
  const [formData, setFormData] = useState({
    address: '',
    description: '',
    price: '',
    squareFeet: '',
    latitude: '40.7484',
    longitude: '-73.9857'
  });
  const [status, setStatus] = useState<string>('');

  // 1. Handle Map Clicks
  const handleMapClick = (lat: number, lng: number) => {
    setFormData(prev => ({
      ...prev,
      latitude: lat.toString(),
      longitude: lng.toString()
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');

    try {
      const res = await fetch('http://localhost:8080/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: formData.address,
          description: formData.description,
          price: parseFloat(formData.price),
          squareFeet: formData.squareFeet ? parseInt(formData.squareFeet) : 0,
          latitude: parseFloat(formData.latitude),
          longitude: parseFloat(formData.longitude)
        })
      });

      if (res.ok) {
        setStatus('Success! Property listed.');
        setFormData({ 
            address: '', description: '', price: '', squareFeet: '', 
            latitude: '40.7484', longitude: '-73.9857' 
        });
      } else {
        setStatus('Error saving property.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network error.');
    }
  };

  return (
    <>
      <Topbar />
      <div className="flex h-[calc(100vh-64px)]">
        
        {/* REPLACED HUGE BLOCK WITH ONE LINE */}
        <LandlordForm 
            formData={formData} 
            setFormData={setFormData} 
            onSubmit={handleSubmit} 
            status={status} 
        />

        {/* Right Side: Map */}
        <div className="w-2/3 relative">
          <GoogleMapsComponent 
            isPinMode={false}
            setPinMode={() => {}}
            searchRadius={1}
            hasActivePin={false}
            setHasActivePin={() => {}}
            isConfirmMode={false}
            setIsConfirmMode={() => {}}
            onPinPositionChange={() => {}}
            properties={[]} 
            onMapClick={handleMapClick}
          />
        </div>
      </div>
    </>
  );
}