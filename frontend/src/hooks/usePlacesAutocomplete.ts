import { useState, useEffect } from 'react';

// You need to install this type if you haven't: npm install --save-dev @types/google.maps
// Or just ignore the error if your project is loose with types.

export const usePlacesAutocomplete = (query: string) => {
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);

  useEffect(() => {
    // 1. If query is empty or Google API isn't loaded, do nothing
    if (!query || query.length < 3 || !window.google || !window.google.maps || !window.google.maps.places) {
      setPredictions([]);
      return;
    }

    // 2. Create the service (only need to do this once technically, but this is fine)
    const autocompleteService = new window.google.maps.places.AutocompleteService();

    // 3. Ask for predictions
    autocompleteService.getPlacePredictions(
      {
        input: query,
        componentRestrictions: { country: 'us' }, // Limit to USA
        types: ['geocode', 'establishment'], // Search addresses and businesses
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          setPredictions(results);
        } else {
          setPredictions([]);
        }
      }
    );
  }, [query]);

  return predictions;
};