"use client";
import { Grid } from "@mui/material";
import Blog from "./blog";
import { useGetCategories } from "@/hooks/useCategories";
import CategoriesMainSkeleton from "../general/categories/skeletons/mainSkeleton";

const BlogItems = ({ blogs }) => {
  const { isLoading } = useGetCategories();
  return (
    <Grid spacing={3} container>
      {isLoading ? (
        <CategoriesMainSkeleton />
      ) : (
        blogs?.map((blog, index) => {
          return (
            <Grid xs={12} md={6} lg={3} item key={index}>
              <Blog blog={blog} />
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default BlogItems;
