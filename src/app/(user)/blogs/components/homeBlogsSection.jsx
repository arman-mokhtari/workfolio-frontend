"use client";
import { Grid, Button, Typography, Box } from "@mui/material";
import Blog from "./blog";
import { useGetAllBlogs } from "@/hooks/useBlogs";
import Loading from "@/common/loading";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const HomeBlogsSection = () => {
  const theme = useTheme();
  const { isLoading, data } = useGetAllBlogs();
  const { blogs } = data || {};

  if (isLoading) return <Loading />;
  let displayedBlogs = blogs && blogs.length > 4 ? blogs.slice(0, 4) : blogs;
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
        آخرین مقالات
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
        {displayedBlogs &&
          displayedBlogs.map((blog, index) => {
            return (
              <Grid xs={12} md={6} lg={3} item key={index}>
                <Blog blog={blog} />
              </Grid>
            );
          })}
      </Grid>

      <Button
        component={Link}
        href="blogs"
        sx={{
          mx: 3,
          fontWeight: "500",
        }}
        variant="contained"
        color="primary"
      >
        نمایش همه مقالات
      </Button>
    </Box>
  );
};

export default HomeBlogsSection;
