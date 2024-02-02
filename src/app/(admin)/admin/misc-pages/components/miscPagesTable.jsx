"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRemoveMiscPage } from "@/hooks/useMiscPage";
import { miscPageTableColumns } from "@/constants/miscPage/miscPageColumns";

const MiscPagesTable = ({ miscPages }) => {
  const { mutateAsync } = useRemoveMiscPage();
  const queryClient = useQueryClient();

  const removeMiscPageHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-misc-pages"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const modifiedMiscPages = miscPages.map((miscPage, index) => ({
    ...miscPage,
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
          rows={modifiedMiscPages}
          columns={miscPageTableColumns(removeMiscPageHandler)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default MiscPagesTable;
