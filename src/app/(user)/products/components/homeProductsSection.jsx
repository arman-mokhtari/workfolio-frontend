"use client";
import { Grid, Button, Typography, Box, Skeleton, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import HoverCard from "@/common/hoverCard";
import { useGetAllProducts } from "@/hooks/useProducts";
import Product from "./product";

const HomeProductsSection = () => {
  const theme = useTheme();
  const { isLoading, data } = useGetAllProducts();
  const { products } = data || {};

  return (
    <Box
      component="section"
      sx={{
        mb: 1,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          px: 3,
          fontSize: "1.6rem",
          fontWeight: "bold",
          [theme.breakpoints.only("xs")]: {
            fontSize: "1.4rem",
          },
        }}
      >
        محصولات پرفروش
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          mb: 2,
          mt: 1,
          justifyContent: "center",
        }}
      >
        {isLoading
          ? Array.from({ length: 4 }, (_, i) => (
              <Grid xs={12} sm={6} lg={3} item key={i}>
                <HoverCard
                  sx={{ p: 2 }}
                  defaultElevation={4}
                  hoveredElevation={4}
                >
                  <Stack>
                    <Skeleton
                      sx={{ borderRadius: 3 }}
                      variant="rectangular"
                      height={140}
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
          : products?.slice(0, 4).map((product, index) => {
              return (
                <Grid xs={12} sm={6} lg={3} item key={index}>
                  <Product product={product} />
                </Grid>
              );
            })}
      </Grid>

      <LoadingButton
        component={Link}
        role="link"
        aria-label="نمایش همه محصولات"
        href="products"
        sx={{
          mx: 3,
          fontWeight: "500",
        }}
        variant="contained"
        color="primary"
        loadingIndicator=" "
        loading={isLoading}
      >
        نمایش همه محصولات
      </LoadingButton>
    </Box>
  );
};

export default HomeProductsSection;
