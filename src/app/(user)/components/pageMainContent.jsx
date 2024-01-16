"use client";
import { Box } from "@mui/material";

import { useGetAllProductsQs } from "@/hooks/useProducts";
import queryString from "query-string";
import Banner from "./banner/banner";
import ProductItems from "../products/components/products";
import CountingCard from "./countUp/countingCard";
import Content from "./content/contentSection";
import SupportImages from "./supportImages/supportImages";
import HomeBlogsSection from "../blogs/components/homeBlogsSection";
import DataImageSec from "./dataImage/dataImageSection";
import ReviewSlider from "./review/reviewSlider";
import ReviewForm from "./review/reviewForm";
import ContactSection from "./contact/contactSection";

const PageMainContent = ({ searchParams }) => {
  const qs = queryString.stringify(searchParams);

  const { data, isPending } = useGetAllProductsQs(qs);
  const { products } = data || {};

  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Banner />
        <Box
          sx={{
            px: 1.5,
          }}
        >
          <ProductItems isPending={isPending} products={products} />
          <CountingCard />
          <Content />
          <DataImageSec />
          <SupportImages />
          <HomeBlogsSection />
          <ReviewSlider />
          <ReviewForm />
        </Box>
      </Box>
      <ContactSection />
    </>
  );
};
export default PageMainContent;
