"use client";
import { Grid, Typography, Box, Skeleton, Stack } from "@mui/material";
import Blog from "./blog";
import { useGetAllBlogs } from "@/hooks/useBlogs";

import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import HoverCard from "@/common/hoverCard";
import LoadingBtn from "@/common/loadingBtn";

const HomeBlogsSection = () => {
  const theme = useTheme();
  const { isLoading, data } = useGetAllBlogs();
  const { blogs } = data || {};

  return (
    <Box
      component="section"
      sx={{
        mb: 1,
      }}
    >
      {isLoading ? (
        <Skeleton
          variant="text"
          width={150}
          sx={{
            px: 3,
            [theme.breakpoints.only("xs")]: {
              fontSize: "1.4rem",
            },
            fontSize: "1.6rem",
          }}
        />
      ) : (
        <Typography
          sx={{
            px: 3,
            fontSize: "1.6rem",
            fontWeight: "bold",
            [theme.breakpoints.only("xs")]: {
              fontSize: "1.4rem",
            },
          }}
        >
          آخرین مقالات
        </Typography>
      )}

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
                  <Stack spacing={0.5}>
                    <Skeleton
                      sx={{ borderRadius: 3 }}
                      variant="rectangular"
                      height={140}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "2rem", mt: "0.75rem !important" }}
                    />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton
                      sx={{ mt: "1rem !important" }}
                      variant="rounded"
                      height={35}
                    />
                  </Stack>
                </HoverCard>
              </Grid>
            ))
          : blogs?.slice(0, 4).map((blog, index) => {
              return (
                <Grid xs={12} sm={6} lg={3} item key={index}>
                  <Blog blog={blog} />
                </Grid>
              );
            })}
      </Grid>
      <LoadingBtn
        component={Link}
        text="نمایش همه مقالات"
        aria-label="نمایش همه مقالات"
        href="blogs"
        sx={{
          mx: 3,
          fontWeight: "500",
        }}
        loading={isLoading}
        loadingIndicator=" "
      />
    </Box>
  );
};

export default HomeBlogsSection;
