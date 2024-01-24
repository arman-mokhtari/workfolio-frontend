"use client";
import { Box, Grid, Skeleton, Stack } from "@mui/material";
import CategoriesMainSkeleton from "./mainSkeleton";
import HoverCard from "@/common/hoverCard";
import XsUpCategoryLayout from "../categoriesContent/XsUpCategoryLayout";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

export default function CategorySkeletonUi() {
  const isMobile = useIsOnlyXs();
  return (
    <Box
      sx={{
        p: 1.5,
        minHeight: "calc(100vh - 128px)",
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
          {isMobile ? (
            <HoverCard
              sx={{
                width: 1,
                px: 2,
                py: 1.5,
              }}
              defaultElevation={3}
            >
              <Skeleton width="30%" variant="text" sx={{ fontSize: "1rem" }} />
            </HoverCard>
          ) : (
            <XsUpCategoryLayout>
              <HoverCard sx={{ p: 1.5 }} defaultElevation={3}>
                <Skeleton
                  width="40%"
                  sx={{ fontSize: "1rem", mb: 2 }}
                  variant="text"
                />
                {Array.from({ length: 5 }, (_, i) => (
                  <Stack
                    key={i}
                    sx={{ mb: 2.2 }}
                    alignItems="center"
                    spacing={1}
                    direction="row"
                  >
                    <Skeleton variant="rectangular" width={20} height={20} />
                    <Skeleton
                      variant="text"
                      width={100}
                      sx={{ fontSize: "1rem" }}
                    />
                  </Stack>
                ))}
              </HoverCard>
              <HoverCard sx={{ p: 1.5 }} defaultElevation={3}>
                <Skeleton
                  width="40%"
                  sx={{ fontSize: "1rem", mb: 2 }}
                  variant="text"
                />
                {Array.from({ length: 3 }, (_, i) => (
                  <Stack
                    key={i}
                    sx={{ mb: 2.2 }}
                    alignItems="center"
                    spacing={1}
                    direction="row"
                  >
                    <Skeleton variant="circular" width={20} height={20} />
                    <Skeleton
                      variant="text"
                      width={100}
                      sx={{ fontSize: "1rem" }}
                    />
                  </Stack>
                ))}
              </HoverCard>
            </XsUpCategoryLayout>
          )}
        </Grid>

        <Grid component="main" item xs={12} sm={8} md={9.5} lg={10}>
          <Grid spacing={3} container>
            <CategoriesMainSkeleton />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
