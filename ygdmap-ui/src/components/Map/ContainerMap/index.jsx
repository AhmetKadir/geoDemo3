import { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

function ContainerMap({ children }) {
  const mapRef = useRef();
  return (
    <>
      <MapContainer
        center={[41.029489, 29.005047]}
        zoom={9}
        scrollWheelZoom={true}
        zoomControl={false}
        className="h-vh z-0"
        ref={mapRef}
      >
        <ZoomControl position="topright" />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </>
  );
}

export default ContainerMap;
