import {
  getProductBySlug,
  getProducts,
} from "@/services/product/productService";
import ProductMainContent from "../../../../components/main/products/slug/productMainContent";

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

  return <ProductMainContent slug={slug} />;
};

export default Page;

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}
