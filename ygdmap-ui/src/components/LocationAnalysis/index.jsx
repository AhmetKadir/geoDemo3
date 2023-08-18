import LayersContext from "context/LayerContext";
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/base";
import axios from "axios";
function LocationAnalysis() {
  const { layersData } = useContext(LayersContext);
  const [poligon, setPoligon] = useState({});
  const [secondData, setSecondData] = useState({});
  // const [serviceData, setServiceData] = useState();

  const handleChangePoligon = event => {
    setPoligon(event.target.value);
  };

  const handleChangeSecondData = event => {
    setSecondData(event.target.value);
  };

  const serviceEntegration = async () => {
    if (
      Object.keys(poligon).length > 0 &&
      Object.keys(secondData).length > 0
    ) {
      const serviceData = {
        polygon: poligon,
        points: secondData,
      };
      console.log("serviceData", serviceData);
      try {
        const response = await axios.post(
          "http://localhost:8080/api/data",
          serviceData
        );
      } catch (error) {
        console.error(
          "API isteği sırasında bir hata oluştu:",
          error
        );
      }
    }
  };
  return (
    <div className="absolute bottom-1/2 z-20 w-72 h-56 flex-col bg-white m-3 p-2">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label2"
            className="mt-2"
          >
            Poligon Katman giriniz
          </InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select2"
            value={poligon}
            onChange={handleChangePoligon}
          >
            <MenuItem value={poligon}>
              Select Layer...
            </MenuItem>

            {layersData.length != 0 ? (
              layersData.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.data}>
                    {item.name}
                  </MenuItem>
                );
              })
            ) : (
              <div>katman yok</div>
            )}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120 }} className="mt-2">
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            className="mt-2"
          >
            ikinci katmanı seçiniz
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={secondData}
            onChange={handleChangeSecondData}
          >
            <MenuItem value={secondData}>
              Select Layer second...
            </MenuItem>
            {layersData.length != 0 ? (
              layersData.map((item, key) => {
                return (
                  <MenuItem key={key} value={item.data}>
                    {item.name}
                  </MenuItem>
                );
              })
            ) : (
              <div>katman yok</div>
            )}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Button onClick={serviceEntegration} size="large">
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default LocationAnalysis;
