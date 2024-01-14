"use client";

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import BlogCard from "./blogCard";
import MainDescription from "./mainDescription";
import LinksAside from "./linksAside";
import ContactSection from "@/pages/(user)/components/contact/contactSection";
import { useGetBlogBySlug } from "@/hooks/useBlogs";
import Loading from "@/common/loading";

const BlogMainContent = ({ slug }) => {
  const { data, isLoading } = useGetBlogBySlug(slug);
  const { blog } = data || {};

  if (isLoading) return <Loading />;

  const pageUrl = `https://workfolio.ir/blogs/${blog.faSlug}`;
  return (
    <>
      <Box
        sx={{
          px: 1.5,
          overflow: "hidden",
          pb: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& img": {
                objectFit: "cover",
                borderRadius: 2,
                width: "100% !important",
                height: "auto !important",
                mb: 1,
              },
            }}
          >
            <Image
              height="350"
              width="500"
              priority={true}
              src={blog.imageLink}
              alt={blog.title}
              title={blog.title}
              placeholder="blur"
              blurDataURL={blog.imageLink}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <BlogCard pageUrl={pageUrl} blog={blog} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <MainDescription blog={blog} />
          <LinksAside currentPageSlug={slug} />
        </Grid>
      </Box>
      <ContactSection />
    </>
  );
};

export default BlogMainContent;
