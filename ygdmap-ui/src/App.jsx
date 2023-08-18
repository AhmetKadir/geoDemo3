import AttributeTable from "components/AttributeTable";
import DataEntry from "components/DataEntry";
import LocationAnalysis from "components/LocationAnalysis";
import { MapObjects } from "components/Map";
import UIControlContext from "context/UIControl";
import { useContext } from "react";

function App() {
  const { dataEntry, locationAnalysis, attributeTable } =
    useContext(UIControlContext);
  return (
    <>
      {dataEntry && <DataEntry />}
      {locationAnalysis && <LocationAnalysis />}
      {attributeTable && <AttributeTable />}
      <MapObjects />
    </>
  );
}

export default App;
