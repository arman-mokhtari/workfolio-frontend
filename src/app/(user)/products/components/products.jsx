"use client";

import { Grid, Skeleton, Stack } from "@mui/material";
import Product from "./product";
import HoverCard from "@/common/hoverCard";
import { useGetUser } from "@/hooks/useAuth";

const ProductItems = ({ products }) => {
  const { isLoading } = useGetUser();
  return (
    <Grid spacing={3} container>
      {isLoading
        ? Array.from({ length: 4 }, (_, i) => (
            <Grid xs={12} sm={12} md={6} lg={3} item key={i}>
              <HoverCard
                sx={{ p: 2 }}
                defaultElevation={4}
                hoveredElevation={4}
              >
                <Stack>
                  <Skeleton
                    sx={{ borderRadius: 3 }}
                    variant="rectangular"
                    height={130}
                  />
                  <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton
                    width="50%"
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    sx={{ mb: 0.5 }}
                    variant="circular"
                    width={30}
                    height={30}
                  />
                  <Skeleton variant="rounded" height={30} />
                  <Skeleton sx={{ mt: 1 }} variant="rounded" height={35} />
                </Stack>
              </HoverCard>
            </Grid>
          ))
        : products &&
          products.map((product, index) => {
            return (
              <Grid xs={12} sm={12} md={6} lg={3} item key={index}>
                <Product product={product} />
              </Grid>
            );
          })}
    </Grid>
  );
};

export default ProductItems;
