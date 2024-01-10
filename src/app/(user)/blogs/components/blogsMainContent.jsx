"use client";

import { Box, Grid } from "@mui/material";

import { useGetAllBlogsQs } from "@/hooks/useBlogs";
import CategorySidebar from "./categorySidebar";
import BlogItems from "./blogs";
import { useGetCategories } from "@/hooks/useCategories";

const BlogsMainContent = ({ qs, cookies }) => {
  const { data, isPending } = useGetAllBlogsQs(qs, cookies);
  const { blogs } = data || {};

  const { data: categoryData, isLoading = { isLoading } } = useGetCategories();
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
          <BlogItems isPending={isPending} blogs={blogs} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogsMainContent;
