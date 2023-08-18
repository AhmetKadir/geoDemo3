import LayersContext from "context/LayerContext";
import { useContext } from "react";

function LoadTIFF() {
  const { setRasterLayer } = useContext(LayersContext);

  const handleFile = e => {
    setRasterLayer(e.target.files[0]);
  };
  return (
    <div>
      <input
        type="file"
        className=""
        onChange={e => handleFile(e)}
      />
    </div>
  );
}

export default LoadTIFF;
