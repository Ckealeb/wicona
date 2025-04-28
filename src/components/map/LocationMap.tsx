
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Witts College Namulada coordinates (approximate location along Entebbe Road)
const SCHOOL_COORDINATES: [number, number] = [32.5555, 0.1833]; // Longitude, Latitude

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Set a default public token (Note: normally this would be an environment variable)
    // For demo purposes using a limited token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94c2FtcGxlcyIsImEiOiJjbHo5Y2Q4Y2kwM2VoMnJvMDY5Ym5zc3N6In0.c24KIk-fVvXqkO9ynEjU4w';
    
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
  }, []);

  return (
    <div className="space-y-4">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-green-100">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default LocationMap;
