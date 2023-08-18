import { useContext, useEffect } from "react";
import { useMap } from "react-leaflet";

import GeoRasterLayer from "georaster-layer-for-leaflet";
import parseGeoraster from "georaster";
import LayersContext from "context/LayerContext";
function GeotiffLayer() {
  const { rasterLayer } = useContext(LayersContext);
  const map = useMap();
  useEffect(() => {
    console.log(rasterLayer, "ssf");
    if (rasterLayer !== undefined) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(rasterLayer);

      reader.onloadend = function () {
        var arrayBuffer = reader.result;

        parseGeoraster(arrayBuffer).then(georaster => {
          console.log("georaster:", georaster);

          var layer = new GeoRasterLayer({
            georaster: georaster,
            opacity: 0.7,
            resolution: 256,
          });

          layer.addTo(map);

          map.fitBounds(layer.getBounds());
        });
      };
    }
  }, [rasterLayer]);
  return null;
}

export default GeotiffLayer;
