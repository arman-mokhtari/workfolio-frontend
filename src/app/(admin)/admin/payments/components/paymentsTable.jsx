"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card, useMediaQuery } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { adminPaymentsTableColumns } from "@/constants/adminPaymentsTable";


const AdminPaymentsTable = ({ payments }) => {


  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const modifiedPayments = payments.map((payment, index) => ({
    ...payment,
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
          rows={modifiedPayments}
          columns={adminPaymentsTableColumns(isSmallScreen)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default AdminPaymentsTable;
