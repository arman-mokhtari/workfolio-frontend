"use client";

import { Grid } from "@mui/material";
import { useGetProductBySlug } from "@/hooks/useProducts";
import MainDescription from "../../../components/slugs/description/mainDescription";
import LinksAside from "@/pages/(user)/components/slugs/aside/linksAside";
import ReviewSlider from "./review/reviewSlider";
import ReviewForm from "./review/reviewForm";
import SkeletonUi from "./skeletonUi";
import { jsonLdProductData } from "@/constants/productJsonLdData";
import SlugPageBanner from "../../../components/slugs/card/SlugPageBanner";
import ProductCard from "./card/productCard";
import BannerCardLayout from "@/pages/(user)/components/slugs/card/bannerCardLayout";

const ProductMainContent = ({ slug }) => {
  const { data, isLoading } = useGetProductBySlug(slug);
  const { product } = data || {};

  if (isLoading) return <SkeletonUi />;
  const jsonLd = jsonLdProductData(product);
  const { imageLink, title, _id, description, faqs } = product;
  return (
    <>
      <BannerCardLayout>
        <SlugPageBanner imageLink={imageLink} title={title} />
        <ProductCard product={product} />
      </BannerCardLayout>

      <Grid container spacing={2}>
        <MainDescription faqs={faqs} description={description} />
        <LinksAside />
      </Grid>
      <ReviewSlider pId={_id} />
      <ReviewForm isLoading={isLoading} product={product} />
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
    </>
  );
};

export default ProductMainContent;
