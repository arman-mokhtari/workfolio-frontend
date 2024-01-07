"use client";

import { useMemo, useState } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card, useMediaQuery } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { categoriesTableColumns } from "@/constants/categoriesTableData";
import { useRemoveCategory } from "@/hooks/useCategories";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const CategoriesTable = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutateAsync } = useRemoveCategory();
  const queryClient = useQueryClient();

  const removeCategoryHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-categories"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };


  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const modifiedCategories = categories.map((category, index) => ({
    ...category,
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
          rows={modifiedCategories}
          columns={categoriesTableColumns(
            isSmallScreen,
            removeCategoryHandler,
            handleClose,
            handleOpen,
            open
          )}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default CategoriesTable;
