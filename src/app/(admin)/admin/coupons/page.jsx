"use client";
import Link from "next/link";

import { Typography, Stack, Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import { useGetCoupons } from "@/hooks/useCoupons";
import Loading from "@/common/loading";
import CouponsTable from "./components/couponsTable";

const CouponPage = () => {
  const { isLoading, data } = useGetCoupons();
  const { coupons } = data || {};

  if (isLoading) return <Loading />;


  return (
    <>
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 2,
        }}
      >
        <Typography variant="h5">کدهای تخفیف</Typography>

        <Button
          component={Link}
          href="/admin/coupons/add"
          color="success"
          variant="contained"
          aria-label="add product"
          endIcon={<PlaylistAdd />}
        >
          اضافه کردن کد تخفیف جدید
        </Button>
      </Stack>
      <CouponsTable coupons={coupons} />
    </>
    
  )
}

export default CouponPage