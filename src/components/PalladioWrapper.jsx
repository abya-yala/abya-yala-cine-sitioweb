// src/components/PalladioWrapper.jsx
import React from 'react';
import PalladioVisualization from './PalladioVisualization';

// Pre-configured wrapper with defaults
export function PalladioMap(props) {
  return (
    <PalladioVisualization 
      type="map"
      height="500px"
      palladioScript="https://cdn.jsdelivr.net/npm/palladio-webcomponents/dist/palladio-webcomponents.js"
      {...props}
    />
  );
}

export function PalladioNetwork(props) {
  return (
    <PalladioVisualization 
      type="network"
      height="500px"
      palladioScript="https://cdn.jsdelivr.net/npm/palladio-webcomponents/dist/palladio-webcomponents.js"
      {...props}
    />
  );
}

// No default export needed here, just named exports