"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRemoveFromCart } from "@/hooks/useCart";
import { cartTableColumns } from "@/constants/cart/cartTableColumns";
import Loading from "../../../app/(user)/(home)/loading";
import { useGetUser } from "@/hooks/useAuth";

const CartItemTable = () => {
  const existingTheme = useTheme();

  const theme = useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: "rtl",
      }),
    [existingTheme]
  );

  const { mutateAsync } = useRemoveFromCart();
  const queryClient = useQueryClient();

  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  if (isLoading) return <Loading />;

  const removeHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  const modifiedCartItems = cart.productDetail.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        disableRowSelectionOnClick
        rows={modifiedCartItems}
        columns={cartTableColumns(removeHandler)}
        autoHeight
      />
    </ThemeProvider>
  );
};

export default CartItemTable;
