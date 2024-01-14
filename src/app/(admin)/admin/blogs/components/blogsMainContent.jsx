"use client";
import Link from "next/link";

import Loading from "@/common/loading";
import { Typography, Stack, Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import { useGetAllBlogs } from "@/hooks/useBlogs";
import BlogsTable from "./blogsTable";

const BlogsMainContent = () => {
  const { isLoading, data } = useGetAllBlogs();
  const { blogs } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 2,
        }}
      >
        <Typography variant="h5">مقالات</Typography>

        <Button
          component={Link}
          role="link"
           
          href="/admin/blogs/add"
          color="success"
          variant="contained"
          aria-label="add product"
          endIcon={<PlaylistAdd />}
        >
          اضافه کردن بلاگ جدید
        </Button>
      </Stack>

      <BlogsTable blogs={blogs} />
    </>
  );
};

export default BlogsMainContent;
