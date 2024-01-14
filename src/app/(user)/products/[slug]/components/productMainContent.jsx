"use client";

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Loading from "@/common/loading";
import { useGetProductBySlug } from "@/hooks/useProducts";
import ProductCard from "./productCard";
import MainDescription from "./mainDescription";
import LinksAside from "@/pages/(user)/blogs/[slug]/components/linksAside";
import ReviewSlider from "./review/reviewSlider";
import ReviewForm from "./review/reviewForm";
import ContactSection from "@/pages/(user)/components/contact/contactSection";

const ProductMainContent = ({ slug }) => {
  const { data, isLoading } = useGetProductBySlug(slug);
  const { product } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
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
              priority={true}
              src={product.imageLink}
              alt={product.title}
              title={product.title}
              placeholder="blur"
              blurDataURL={product.imageLink}
            />
          </Grid>

          <ProductCard product={product} />
        </Grid>
        <Grid container spacing={2}>
          <MainDescription product={product} />
          <LinksAside />
        </Grid>
        <ReviewSlider pId={product._id} />
        <ReviewForm pId={product._id} />
      </Box>

      <ContactSection />
    </>
  );
};

export default ProductMainContent;
