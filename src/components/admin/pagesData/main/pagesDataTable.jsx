"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { pagesTableColumns } from "@/constants/pagesData/pagesDataTabel";

const PagesDataTable = ({ pagesData }) => {
  const modifiedPagesData = pagesData.map((pageData, index) => ({
    ...pageData,
    id: index + 1,
  }));

  const existingTheme = useTheme();

  const theme = useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: "rtl",
      }),
    [existingTheme]
  );

  return (
    <Card>
      <ThemeProvider theme={theme}>
        <DataGrid
          disableRowSelectionOnClick
          rows={modifiedPagesData}
          columns={pagesTableColumns()}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default PagesDataTable;
