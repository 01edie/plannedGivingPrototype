import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { TypeColumn } from "@inovua/reactdatagrid-community/types/TypeColumn";
import TypeDataSource from "@inovua/reactdatagrid-community/types/TypeDataSource";
import { Box } from "@mui/material";

import React from "react";

type Props = {
  columns: TypeColumn[];
  data: TypeDataSource;
};

function DataTable({ columns, data }: Props) {
  return (
    <Box>
      <ReactDataGrid
        // style={gridStyle}
        idProperty="uniqueId"
        columns={columns}
        dataSource={data}
      />
    </Box>
  );
}

export default DataTable;
