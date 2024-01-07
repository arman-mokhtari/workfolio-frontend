"use client"
import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { paymentTableColumns } from "@/constants/profilePaymentTableData";
import { Card, useMediaQuery } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const PaymentTable = ({ payments }) => {
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
    <Card
      sx={{
        width: 1,
        "& .muirtl-yrdy0g-MuiDataGrid-columnHeaderRow": {
          justifyContent: "space-around",
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={modifiedPayments}
          columns={paymentTableColumns(isSmallScreen)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default PaymentTable;
