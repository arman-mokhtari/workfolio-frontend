import { Box, Grid } from "@mui/material";
import {
  getProductBySlug,
  getProducts,
} from "@/services/product/productService";
import Image from "next/image";
import ProductCard from "./components/productCard";
import MainDescription from "./components/mainDescription";
import LinksAside from "../../blogs/[slug]/components/linksAside";
import ContactSection from "../../components/contactSection";
import { jsonLdProductData } from "@/constants/productJsonLdData";
import ReviewSlider from "./components/review/reviewSlider";
import ReviewForm from "./components/review/reviewForm";

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

  const { title, imageLink, _id } = product;

  const jsonLd = jsonLdProductData(product);

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <Box
        sx={{
          px: 1.5,
          overflow: "hidden",
          pb: 3,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& img": {
                objectFit: "cover",
                borderRadius: 2,
                width: "100% !important",
                height: "auto !important",
                mb: 1,
              },
            }}
          >
            <Image
              height="350"
              width="500"
              src={imageLink}
              alt={title}
              title={title}
            />
          </Grid>

          <ProductCard product={product} />
        </Grid>
        <Grid container spacing={2}>
          <MainDescription product={product} />
          <LinksAside />
        </Grid>
        <ReviewSlider pId={_id} />
        <ReviewForm pId={_id} />
      </Box>

      <ContactSection />
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}
