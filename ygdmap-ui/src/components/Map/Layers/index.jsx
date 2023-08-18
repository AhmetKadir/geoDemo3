import { ImageOverlay, LayersControl } from "react-leaflet";
import TileLayers from "./TileLayers";
import GeotiffLayer from "../GeoTiffLayer";
import { useContext } from "react";
import LayersContext from "context/LayerContext";

function LayerItems({ children }) {
  const { rasterLayer } = useContext(LayersContext);

  return (
    <>
      <LayersControl>
        <TileLayers />

        {children}
      </LayersControl>
    </>
  );
}

export default LayerItems;
