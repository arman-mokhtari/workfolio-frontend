"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { productsTableColumns } from "@/constants/usersProductsData";
import { useRemoveProduct } from "@/hooks/useProducts";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";


const ProductsTable = ({ products }) => {

  const { mutateAsync } = useRemoveProduct();
  const queryClient = useQueryClient();

  const removeProductHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };


  const isSmallScreen = useIsOnlyXs();

  const modifiedProducts = products.map((product, index) => ({
    ...product,
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
          rows={modifiedProducts}
          columns={productsTableColumns(isSmallScreen,removeProductHandler)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default ProductsTable;
