import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

import { useState } from "react";
import { TypeColumn } from "@inovua/reactdatagrid-community/types/TypeColumn";
import TypeDataSource from "@inovua/reactdatagrid-community/types/TypeDataSource";
import { Box, IconButton, Button, Stack } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";

type Props = {
  columns: TypeColumn[];
  data: TypeDataSource;
  sheetName?: string;
};



function DataTable({ columns, data, sheetName }: Props) {
  const [gridRef, setGridRef] = useState<any>(null);

  const onExport = () => {
    const columnsData = gridRef?.current.visibleColumns;
    const headerKeys = columnsData?.map((c: any) => c.name);
    const headers = columnsData
      ?.map((c: any) => c.header)
      ?.filter((e: any) => e);

    // @ts-ignore
    const rowsAllExcel = data.map((dataUnit: any) =>
      headerKeys?.reduce(
        (prev: any, item: any) => ({ ...prev, [item]: dataUnit[item] }),
        {}
      )
    );

    const worksheet = XLSX.utils.json_to_sheet(rowsAllExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName ?? "PG_Sheet");

    /* fix headers */
    XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: "A1" });
    /* calculate column width */
    const maxWidths = headerKeys.map((headerName: string) => ({
      wch:
        rowsAllExcel.reduce((w: any, r: any) => {
          return Math.max(w, String(r[headerName])?.length);
        }, 6) + 5,
    }));
    // console.log(maxWidths)
    worksheet["!cols"] = maxWidths;
    /* create an XLSX file and try to save to file.xlsx */
    XLSX.writeFile(workbook, `${sheetName ?? "PG_Sheet"}.xlsx`, {
      compression: true,
    });
    toast.info('File is being downloaded')
  };

  // console.log({headerKeys, headers, columnsData})

  return (
    <Box >
      <ReactDataGrid
        // style={gridStyle}
        idProperty="uniqueId"
        columns={columns}
        dataSource={data}
        handle={setGridRef}
        // nativeScroll
        // scrollProps={{scrollThumbWidth:0}}
      />
      <Stack mt={1} alignItems="end">
        <Button
          size="small"
          variant="outlined"
          sx={{ color: "#6f6f6f" }}
          startIcon={<DescriptionIcon />}
          onClick={onExport}
        >
          Export to Excel
        </Button>
      </Stack>
    </Box>
  );
}

export default DataTable;
