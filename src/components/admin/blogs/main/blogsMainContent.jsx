"use client";

import Loading from "@/common/loading";
import { useGetAllBlogs } from "@/hooks/useBlogs";
import BlogsTable from "./blogsTable";
import HeadStack from "../../../../common/admin/headStack";

const BlogsMainContent = () => {
  const { isLoading, data } = useGetAllBlogs();
  const { blogs } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <HeadStack href="/admin/blogs/add" title="مقالات" />
      <BlogsTable blogs={blogs} />
    </>
  );
};

export default BlogsMainContent;
