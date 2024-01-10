import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import queryString from "query-string";
import BlogsMainContent from "./components/blogsMainContent";

export const dynamic = "force-dynamic";

const Blogs = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const querySearchParams = queryString.stringify(searchParams);

  return <BlogsMainContent qs={querySearchParams} cookies={strCookies} />;
};

export default Blogs;