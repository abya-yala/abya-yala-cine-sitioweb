---
title: Visualización con Palladio
sidebar_position: 3
---


# Palladio Visualization

Below is an interactive data visualization created with Palladio:

# Visualización del Cine de Abya Yala

Esta visualización muestra datos geográficos relacionados con los festivales de cine autóctono en Abya Yala:

import PalladioVisualization from '@site/src/components/PalladioVisualization';
import TestComponent from '@site/src/components/TestComponent';


<PalladioVisualization 
  type="map"
  dataSource="/data/sample-data.json"
  mapTiles="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  height="600px"
/>

## Información adicional

Los festivales de cine indígena representan espacios importantes para la visibilización de las producciones audiovisuales de los pueblos originarios. Esta visualización permite observar su distribución geográfica en Abya Yala.

{/* We can also test if components are loading properly */}
<TestComponent />