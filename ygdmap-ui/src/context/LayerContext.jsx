import { createContext, useState } from "react";

const LayersContext = createContext({});

export const LayersProvider = ({ children }) => {
  const [layersData, setLayersData] = useState([]);
  const [activeLayer, setActiveLayer] = useState([]);
  const [activeFId, setActiveFId] = useState();
  const [activeLayerID, setActiveLayerID] = useState();
  const [rasterLayer, setRasterLayer] = useState();

  const [clearStyle, setClearStyle] = useState();

  const addLayer = newLayer => {
    setLayersData(prevLayers => [...prevLayers, newLayer]);
  };
  const data = {
    layersData,
    setLayersData,
    addLayer,
    activeLayer,
    setActiveLayer,
    activeFId,
    setActiveFId,
    clearStyle,
    setClearStyle,
    activeLayerID,
    setActiveLayerID,
    rasterLayer,
    setRasterLayer,
  };

  return (
    <LayersContext.Provider value={data}>
      {children}
    </LayersContext.Provider>
  );
};

export default LayersContext;
