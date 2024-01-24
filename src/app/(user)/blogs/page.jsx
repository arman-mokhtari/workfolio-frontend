import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import queryString from "query-string";
import { getBlogs } from "@/services/blog/blogService";
import BlogItems from "./components/blogs";
import CategoryPageLayout from "../components/categories/categoriesContent/categoryPageLayout";

export const dynamic = "force-dynamic";

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

export const amp = true;
