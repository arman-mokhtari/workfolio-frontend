"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRemoveCoupon } from "@/hooks/useCoupons";
import { couponsTableColumns } from "@/constants/couponsTableData";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const CouponsTable = ({ coupons }) => {
  const { mutateAsync } = useRemoveCoupon();
  const queryClient = useQueryClient();

  const removeCouponHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-coupons"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const isSmallScreen = useIsOnlyXs();

  const modifiedCoupons = coupons.map((coupon, index) => ({
    ...coupon,
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
          rows={modifiedCoupons}
          columns={couponsTableColumns(isSmallScreen, removeCouponHandler)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default CouponsTable;
