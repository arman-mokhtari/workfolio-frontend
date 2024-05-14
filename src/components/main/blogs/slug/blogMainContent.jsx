"use client";

import BlogCard from "./card/blogCard";
import LinksAside from "../../general/slugs/aside/linksAside";
import { useGetBlogBySlug } from "@/hooks/useBlogs";
import { jsonLdBlogData } from "@/constants/blogJsonLdData";
import SlugPageBanner from "@/components/main/general/slugs/card/SlugPageBanner";
import MainDescription from "@/components/main/general/slugs/description/mainDescription";
import BannerCardLayout from "@/components/main/general/slugs/card/bannerCardLayout";

import MainCardLayout from "@/components/main/general/slugs/card/mainCardLayout";
import BlogSkeletonUi from "./skeletonUi";

const BlogMainContent = ({ slug }) => {
  const { data, isLoading } = useGetBlogBySlug(slug);
  const { blog } = data || {};

  if (isLoading) return <BlogSkeletonUi />;
  const { imageLink, title, description, faqs, tags } = blog;
  const pageUrl = `https://workfolio.ir/blogs/${blog.faSlug}`;
  const jsonLd = jsonLdBlogData(blog);
  return (
    <>
      <BannerCardLayout>
        <SlugPageBanner imageLink={imageLink} title={title} />
        <BlogCard pageUrl={pageUrl} blog={blog} />
      </BannerCardLayout>
      <MainCardLayout>
        <MainDescription faqs={faqs} description={description} />
        <LinksAside currentPageSlug={slug} isLoading={isLoading} tags={tags} />
      </MainCardLayout>

      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
    </>
  );
};

export default BlogMainContent;
