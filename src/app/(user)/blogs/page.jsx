import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import queryString from "query-string";
import { getBlogs } from "@/services/blog/blogService";
import BlogItems from "./components/blogs";
import BlogsLayout from "./components/blogsLayout";

export const dynamic = "force-dynamic";

const Blogs = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const qs = queryString.stringify(searchParams);
  const blogsPromise = getBlogs(qs, strCookies);
  const [{ blogs }] = await Promise.all([blogsPromise]);

  return (
    <BlogsLayout>
      <BlogItems blogs={blogs} />
    </BlogsLayout>
  );
};

export default Blogs;

export const amp = true;
