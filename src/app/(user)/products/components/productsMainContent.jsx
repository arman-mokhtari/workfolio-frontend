"use client";

import { Box, Grid } from "@mui/material";

import CategorySidebar from "./categorySidebar";
import { useGetCategories } from "@/hooks/useCategories";
import { useGetAllProductsQs } from "@/hooks/useProducts";
import ProductItems from "./products";

const ProductsMainContent = ({ qs, cookies }) => {
  const { data, isPending } = useGetAllProductsQs(qs, cookies);
  const { products } = data || {};

  const { data: categoryData, isLoading } = useGetCategories();
  const { categories } = categoryData || {};

  return (
    <Box
      sx={{
        p: 1.5,
      }}
    >
      <Grid container spacing={1.5}>
        <Grid
          component="aside"
          item
          xs={12}
          sm={4}
          md={2.5}
          lg={2}
          sx={{
            display: "flex",
          }}
        >
          <CategorySidebar isLoading={isLoading} categories={categories} />
        </Grid>

        <Grid component="main" item xs={12} sm={8} md={9.5} lg={10}>
          <ProductItems isPending={isPending} products={products} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsMainContent;
