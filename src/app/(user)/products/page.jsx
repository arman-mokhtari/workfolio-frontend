import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import queryString from "query-string";

import { getProducts } from "@/services/product/productService";
import ProductItems from "./components/products";
import CategoryPageLayout from "../components/categories/categoriesContent/categoryPageLayout";
import { getPageByEnglishTitle } from "@/services/pageData/pageDataServices";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  try {
    const { pageData } = await getPageByEnglishTitle("products");

    const { metaTitle, metaDescription, tags, imageLink } = pageData;

    return {
      alternates: {
        canonical: `/products`,
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
