"use client";

import { Grid } from "@mui/material";
import Product from "./product";
import CategoriesMainSkeleton from "../../components/categories/skeletons/mainSkeleton";
import { useGetCategories } from "@/hooks/useCategories";

const ProductItems = ({ products, isAccessToken }) => {
  const { isLoading } = useGetCategories();
  return (
    <Grid spacing={3} container>
      {isLoading ? (
        <CategoriesMainSkeleton />
      ) : (
        products?.map((product, index) => {
          return (
            <Grid xs={12} sm={12} md={6} lg={3} item key={index}>
              <Product isAccessToken={isAccessToken} product={product} />
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default ProductItems;
