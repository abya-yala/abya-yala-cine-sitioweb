import React, { useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Create the wrapper component that runs only in browser
function PalladioInner({ type, dataSource, height, mapTiles, ...props }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Use a timeout to ensure the component is loaded
    setTimeout(() => {
      try {
        // Create the Palladio web component
        const palladioElement = document.createElement(`palladio-${type}-component`);
        
        // Set the data source
        palladioElement.setAttribute('data-source', dataSource);
        
        // Set the height
        palladioElement.style.height = height || '500px';
        
        // For map type, set tiles source
        if (mapTiles && type === 'map') {
          palladioElement.setAttribute('map-tiles', mapTiles);
        }
        
        // Add any other props as attributes
        Object.entries(props).forEach(([key, value]) => {
          const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          palladioElement.setAttribute(attrName, value);
        });
        
        // Clear and append the element
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(palladioElement);
      } catch (error) {
        console.error('Error creating Palladio component:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = '<div style="color: red; padding: 20px;">Error loading Palladio component. Check console for details.</div>';
        }
      }
    }, 300);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [type, dataSource, height, mapTiles, props]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        minHeight: height || '500px',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        margin: '20px 0'
      }} 
    />
  );
}

// Export the main component
export default function PalladioVisualization(props) {
  return (
    <BrowserOnly fallback={<div>Loading visualization...</div>}>
      {() => <PalladioInner {...props} />}
    </BrowserOnly>
  );
}