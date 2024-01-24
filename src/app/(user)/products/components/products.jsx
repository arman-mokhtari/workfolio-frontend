"use client";

import { Grid } from "@mui/material";
import Product from "./product";
import { useGetUser } from "@/hooks/useAuth";
import CategoriesMainSkeleton from "../../components/categories/skeletons/mainSkeleton";

const ProductItems = ({ products }) => {
  const { isLoading } = useGetUser();
  return (
    <Grid spacing={3} container>
      {isLoading ? (
        <CategoriesMainSkeleton />
      ) : (
        products?.map((product, index) => {
          return (
            <Grid xs={12} sm={12} md={6} lg={3} item key={index}>
              <Product product={product} />
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default ProductItems;
