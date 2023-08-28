import React, { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { nova_thai } from '@/utilities/font';

const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [position, setPosition] = useState({
    coords: {
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    const getPosition = () => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setPosition(position);
      });
    };

    getPosition();

    // Create the map when the component mounts
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [],
      target: mapRef.current,
      view: new View({
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 4,
      }),
    });

    // Save the map instance in the ref
    mapInstance.current = map;

    // Clean up the map when the component unmounts
    return () => {
      map.setTarget(null);
    };
  }, [position]);

  const handleZoomOut = () => {
    const view = mapInstance.current.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
  };

  const handleZoomIn = () => {
    const view = mapInstance.current.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
  };

  return (
    <div className={`${nova_thai.className} flex`}>
      <div className="left-0 top-[7px] text-zinc-300 text-lg font-medium px-4">Locate Us</div>
      <div ref={mapRef} style={{ width: '262px', height: '196px' }} className=''></div>
      <div className="flex-cols w-[29px] h-[66px] top-[3px] opacity-70 bg-neutral-600 ml-1">
        <button onClick={handleZoomIn} className="w-[25px] text-stone-300 text-2xl font-medium">+</button>
        <div className="h-[0px] left-0 top-[30px] border"></div>
        <button onClick={handleZoomOut} className="w-[25px] text-stone-300 text-opacity-80 text-2xl font-medium">-</button>
      </div>
    </div>
  );
};

export default MapComponent;
