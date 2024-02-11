import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import queryString from "query-string";
import { getBlogs } from "@/services/blog/blogService";
import BlogItems from "./components/blogs";
import CategoryPageLayout from "../components/categories/categoriesContent/categoryPageLayout";
import { getPageByEnglishTitle } from "@/services/pageData/pageDataServices";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  try {
    const { pageData } = await getPageByEnglishTitle("blogs");

    const { metaTitle, metaDescription, tags, imageLink } = pageData;

    return {
      alternates: {
        canonical: `/blogs`,
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
    console.error("Error generating metadata for product page:", error);
    // Return a default or fallback metadata in case of an error
    return {
      title: "Fallback Title",
      description: "Fallback Description",
      keywords: [],
      twitter: {},
    };
  }
}

const Blogs = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const qs = queryString.stringify(searchParams);
  const blogsPromise = getBlogs(qs, strCookies);
  const [{ blogs }] = await Promise.all([blogsPromise]);

  return (
    <CategoryPageLayout>
      <BlogItems blogs={blogs} />
    </CategoryPageLayout>
  );
};

export default Blogs;
