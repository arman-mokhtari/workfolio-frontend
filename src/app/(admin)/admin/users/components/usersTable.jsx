"use client"
import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card, useMediaQuery } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { usersTableColumns } from "@/constants/usersTableData";

const UsersTable = ({ users }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const modifiedUsers = users.map((user, index) => ({
    ...user,
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
          rows={modifiedUsers}
          columns={usersTableColumns(isSmallScreen)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default UsersTable;
