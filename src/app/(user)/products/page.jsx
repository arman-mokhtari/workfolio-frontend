import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import queryString from "query-string";

import { getProducts } from "@/services/product/productService";
import ProductItems from "./components/products";
import CategoryPageLayout from "../components/categories/categoriesContent/categoryPageLayout";
export const dynamic = "force-dynamic";

const Products = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const qs = queryString.stringify(searchParams);
  const productsPromise = getProducts(qs, strCookies);
  const [{ products }] = await Promise.all([productsPromise]);

  const accessToken = cookieStore?._parsed?.get("accessToken");
  const isAccessToken = Boolean(accessToken);

  return (
    <CategoryPageLayout>
      <ProductItems products={products} isAccessToken={isAccessToken} />
    </CategoryPageLayout>
  );
};

export default Products;
