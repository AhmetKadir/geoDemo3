import React, { useContext, useRef } from "react";
import { ContainerMap, MapTools } from "..";
import { ToolBar } from "components/Tools";

function MapObjects() {
  return (
    <>
      <ContainerMap>
        <MapTools />
      </ContainerMap>

      <ToolBar />
    </>
  );
}

export default MapObjects;
