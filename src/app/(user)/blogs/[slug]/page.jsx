import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { getBlogBySlug, getBlogs } from "@/services/blog/blogService";

import BlogCard from "./components/blogCard";
import MainDescription from "./components/mainDescription";
import LinksAside from "./components/linksAside";
import ContactSection from "../../components/contactSection";
import { jsonLdBlogData } from "@/constants/blogJsonLdData";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  try {
    const { slug } = params;
    const { blog } = await getBlogBySlug(slug);

    const { metaTitle, metaDescription, tags, imageLink, faSlug } = blog;

    return {
      alternates: {
        canonical: `/blogs/${faSlug}`,
      },
      title: metaTitle,
      description: metaDescription,
      keywords: tags,
      twitter: {
        title: metaTitle,
        description: metaDescription,
        images: [imageLink],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Return a default or fallback metadata in case of an error
    return {
      title: "Fallback Title",
      description: "Fallback Description",
      keywords: [],
      twitter: {},
    };
  }
}

const Page = async ({ params }) => {
  const { slug } = params;
  const { blog } = await getBlogBySlug(slug);

  const { title, imageLink, faSlug } = blog;

  const jsonLd = jsonLdBlogData(blog);

  const pageUrl = `${process.env.ABSOLUTE_URL}/blogs/${faSlug}`;
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
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
              src={imageLink}
              alt={title}
              title={title}
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

export default Page;

export async function generateStaticParams() {
  const { blogs } = await getBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
