"use client";

import { Grid } from "@mui/material";
import { useGetProductBySlug } from "@/hooks/useProducts";
import MainDescription from "../../general/slugs/description/mainDescription";
import LinksAside from "@/components/main/general/slugs/aside/linksAside";
import ReviewSlider from "./review/reviewSlider";
import ReviewForm from "./review/reviewForm";
import { jsonLdProductData } from "@/constants/productJsonLdData";
import SlugPageBanner from "../../general/slugs/card/SlugPageBanner";
import ProductCard from "./card/productCard";
import BannerCardLayout from "@/components/main/general/slugs/card/bannerCardLayout";
import MainCardLayout from "@/components/main/general/slugs/card/mainCardLayout";
import ChipDivider from "@/common/chipDivider";
import TagsCard from "./card/tagsCard";
import SkeletonUi from "./skeletonUi";

const ProductMainContent = ({ slug }) => {
  const { data, isLoading } = useGetProductBySlug(slug);
  const { product } = data || {};

  if (isLoading) return <SkeletonUi />;
  const jsonLd = jsonLdProductData(product);
  const { imageLink, title, _id, description, faqs, tags } = product;
  return (
    <>
      <BannerCardLayout>
        <SlugPageBanner imageLink={imageLink} title={title} />
        <ProductCard product={product} />
      </BannerCardLayout>

      <MainCardLayout>
        <MainDescription faqs={faqs} description={description} />
        <LinksAside isLoading={isLoading} tags={tags} />
      </MainCardLayout>
      <ChipDivider mb={1} mt={6} title="نظرات شما" />
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
