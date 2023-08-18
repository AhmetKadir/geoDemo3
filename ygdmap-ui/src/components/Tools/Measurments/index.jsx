import { useMap } from 'react-leaflet';
import "./leaflet-ruler"
import "./leaflet-ruler.css"
import { useEffect } from 'react';
import L from "leaflet";

function Measurment() {
    const map = useMap();
  
    useEffect(() => {
      if (!map) return;
  
      L.control.ruler().addTo(map);
    }, [map]);
  return null
}

export default Measurment