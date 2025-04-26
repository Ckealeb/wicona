
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

// Bungoma coordinates (approximate)
const BUNGOMA_COORDINATES = [34.5606, 0.5640];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map only if we have a token
    if (mapboxToken) {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: BUNGOMA_COORDINATES,
        zoom: 15
      });

      // Add marker
      new mapboxgl.Marker()
        .setLngLat(BUNGOMA_COORDINATES)
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      return () => {
        map.current?.remove();
      };
    }
  }, [mapboxToken]);

  return (
    <div className="space-y-4">
      {!mapboxToken && (
        <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
          <p className="text-sm text-red-700">
            Please enter your Mapbox public token to view the map. You can get one at{' '}
            <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="underline">
              mapbox.com
            </a>
          </p>
          <input
            type="text"
            className="mt-2 w-full p-2 border rounded"
            placeholder="Enter your Mapbox public token"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
        </div>
      )}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-campus-teal">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default LocationMap;
