import {
  getProductBySlug,
  getProducts,
} from "@/services/product/productService";
import Script from "next/script";

import ProductMainContent from "./components/productMainContent";
import { jsonLdProductData } from "@/constants/productJsonLdData";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  try {
    const { slug } = params;
    const { product } = await getProductBySlug(slug);

    const { metaTitle, metaDescription, tags, imageLink, faSlug } = product;

    return {
      alternates: {
        canonical: `/products/${faSlug}`,
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

const Page = async ({ params }) => {
  const { slug } = params;
  const { product } = await getProductBySlug(slug);

  const jsonLd = jsonLdProductData(product);

  return (
    <>
      <ProductMainContent slug={slug} />
      <section>
        <Script
          id="product-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="worker"
        />
      </section>
    </>
  );
};

export default Page;

export const amp = true;

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}
