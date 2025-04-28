
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Witts College Namulada coordinates (approximate location along Entebbe Road)
const SCHOOL_COORDINATES: [number, number] = [32.5555, 0.1833]; // Longitude, Latitude

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current) return;
    
    if (mapboxToken) {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: SCHOOL_COORDINATES,
        zoom: 14
      });

      // Add marker for the school
      const marker = new mapboxgl.Marker({
        color: "#10B981", // green color to match the theme
      })
        .setLngLat(SCHOOL_COORDINATES)
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Witts College Namulada</h3><p>Along Entebbe Road</p>"))
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
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-green-100">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default LocationMap;
