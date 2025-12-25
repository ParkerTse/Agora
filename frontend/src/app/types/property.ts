// src/types/property.ts

export interface Property {
  id: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  status: 'For Sale' | 'For Rent' | 'Sold';
  position: { 
    lat: number; 
    lng: number; 
  };
}