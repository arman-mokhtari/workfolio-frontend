import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import queryString from "query-string";
import ProductsMainContent from "./components/productsMainContent";
export const dynamic = "force-dynamic";

const Products = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const querySearchParams = queryString.stringify(searchParams);

  return <ProductsMainContent qs={querySearchParams} cookies={strCookies} />;
};

export default Products;
