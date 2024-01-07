"use client";
import Link from "next/link";

import Loading from "@/common/loading";
import { useGetAllProducts } from "@/hooks/useProducts";
import ProductsTable from "./components/productsTable";
import { Typography, Stack, Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";

const ProductsPage = () => {
  const { isLoading, data } = useGetAllProducts();
  const { products } = data || {};

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
        <Typography variant="h5">محصولات</Typography>

        <Button
          component={Link}
          href="/admin/products/add"
          color="success"
          variant="contained"
          aria-label="add product"
          endIcon={<PlaylistAdd />}
        >
          اضافه کردن محصول جدید
        </Button>
      </Stack>

      <ProductsTable products={products} />
    </>
  );
};

export default ProductsPage;
