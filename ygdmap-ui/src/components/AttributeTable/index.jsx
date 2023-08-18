import { DataGrid } from "@mui/x-data-grid";
import clsx from "clsx";
import LayersContext from "context/LayerContext";
import { useContext, useEffect, useState } from "react";

function AttributeTable() {
  const { activeLayerID, layersData } =
    useContext(LayersContext);

  const [tableCol, setTableCol] = useState([]);
  const [tableRow, setTableRow] = useState([]);

  const [value, setValue] = useState([1, 2, 3, 4]);
  const [selectedRows, setSelectedRows] = useState([
    1, 2, 3,
  ]);

  let layerPropertyNames = [];

  useEffect(() => {
    if (layersData.length !== 0) {
      const activeLayer = layersData.filter(
        item => item.layerID === activeLayerID
      );

      const rows = activeLayer[0].data.features.map(
        feature => {
          const { properties, layerID } = feature;
          return {
            layerID: layerID,
            id: properties.F_ID,
            ...properties,
          };
        }
      );

      setTableRow(rows);

      Object.keys(
        activeLayer[0].data.features[0].properties
        // eslint-disable-next-line array-callback-return
      ).map(item => {
        layerPropertyNames.push(item);
      });

      const columns = layerPropertyNames.reduce(
        (cols, item) => {
          cols.push({
            field: item,
            headerName: item,
            width: 150,
          });
          return cols;
        },
        []
      );
      setTableCol(columns);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLayerID]);

  // const selectedRow = params => {
  //   if (activeLayerID === params.row.layerID) {
  //     if (value.includes(params.id)) {
  //       return "bg-primaryDefault";
  //     } else {
  //       return "";
  //     }
  //   }
  // };

  return (
    <div className="absolute bottom-0 z-20 w-full bg-white p-2 ">
      {layersData.length !== 0 ? (
        <div>
          <DataGrid
            rows={tableRow}
            columns={tableCol}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }, // kaç row olacak bi sayfada
              },
            }}
            rowSelectionModel={selectedRows}
            // onRowSelectionModelChange={e => console.log(e)}
            // isRowSelected={e => console.log(e)}
            // isRowSelectable={e => console.log("seç", e)}
            // onColumnOrderChange={e =>
            //   console.log("order", e)
            // }
            // onSortModelChange={e => console.log("sort", e)}
            checkboxSelection
            pageSizeOptions={[5, 10]}
            onRowSelectionModelChange={ids => {
              setSelectedRows(...ids);
            }}
            // disableRowSelectionOnClick
            // getCellClassName={params => selectedRow(params)}
          />
        </div>
      ) : (
        <div className="h-80 justify-center justify-items-center">
          veri yok
        </div>
      )}
    </div>
  );
}

export default AttributeTable;
