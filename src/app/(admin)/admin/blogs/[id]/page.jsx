"use client";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import { useGetBlogById } from "@/hooks/useBlogs";
import BlogDataCard from "./components/blogDataCard";
import BlogDescription from "./components/blogDescription";

const BlogPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isLoading, data } = useGetBlogById(id);
  const { blog } = data || {};

  if (isLoading) return <Loading />;
  if (blog?._id !== id || !blog) return router.push("/404");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <BlogDataCard blog={blog} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <BlogDescription blog={blog} />
      </Grid>
    </Grid>
  );
};

export default BlogPage;
