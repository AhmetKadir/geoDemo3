import { useContext, useEffect, useState } from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import LayersContext from "context/LayerContext";
import { LoadTIFF, UploadData } from "components/Tools";

function DataEntry() {
  useEffect(() => {
    console.log("render dataentry");
  });

  return (
    <div className="absolute top-6  border-2 z-20 w-86 bg-white m-3 ">
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          <Tab>Load File</Tab>
          <Tab>WMS</Tab>
          <Tab>Raster</Tab>
        </TabList>
        <TabPanel value={0}>
          <UploadData />
        </TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
        <TabPanel value={2}>
          <LoadTIFF />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default DataEntry;
