import { getBlogBySlug, getBlogs } from "@/services/blog/blogService";
import BlogMainContent from "./components/blogMainContent";

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

  return <BlogMainContent slug={slug} />;
};

export default Page;

export const amp = true;

export async function generateStaticParams() {
  const { blogs } = await getBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
