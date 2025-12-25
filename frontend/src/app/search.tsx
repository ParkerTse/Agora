import React, { useRef, useState } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const geocoderRef = useRef<any>(null);

  const handleSearch = () => {
    if (!searchQuery.trim() || !geocoderRef.current) {
      return;
    }

    setIsSearching(true);

    geocoderRef.current.geocode({ address: searchQuery }, (results: any, status: string) => {
      const google = (window as any).google;
      
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        const location = results[0].geometry.location;
        // Pass location to parent or navigate to map
        console.log('Found location:', {
          lat: location.lat(),
          lng: location.lng(),
          address: searchQuery
        });
        setIsSearching(false);
      } else {
        alert('Location not found. Please try another search.');
        setIsSearching(false);
      }
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Initialize geocoder when component mounts
  React.useEffect(() => {
    if ((window as any).google?.maps && !geocoderRef.current) {
      geocoderRef.current = new (window as any).google.maps.Geocoder();
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Real Estate Search</h2>
        <p className="text-gray-600 mb-8">Find properties in your desired neighborhood</p>
        
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a neighborhood, city, or address..."
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg"
          />
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 text-lg transition"
          >
            {isSearching ? 'Searching...' : 'Search Properties'}
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Try searching for "Manhattan", "Brooklyn", "Queens", etc.
        </p>
      </div>
    </div>
  );
}