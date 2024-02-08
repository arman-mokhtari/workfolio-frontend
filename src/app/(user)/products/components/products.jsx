"use client";

import { Grid, Box, Typography } from "@mui/material";
import Product from "./product";
import CategoriesMainSkeleton from "../../components/categories/skeletons/mainSkeleton";
import { useGetCategories } from "@/hooks/useCategories";
import { useEffect, useState } from "react";
import HoverCard from "@/common/hoverCard";

const ProductItems = ({ products, isAccessToken }) => {
  const [productCount, setProductCount] = useState(0);
  const { isLoading } = useGetCategories();
  useEffect(() => {
    // هر بار که مقدار products تغییر می‌کند، طول آرایه را به روز کنید
    setProductCount(products.length);
  }, [products]);

  if (productCount === 0)
    return (
      <HoverCard
        defaultElevation={0}
        hoveredElevation={0}
        sx={{ p: 2, borderWidth: "1px" }}
      >
        <Typography>آیتم مورد نظر شما یافت نشد!</Typography>
      </HoverCard>
    );

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
