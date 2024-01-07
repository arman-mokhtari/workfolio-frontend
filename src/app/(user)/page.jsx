import { Box } from "@mui/material";
import TypedInfo from "./components/typedInfo";
import Banner from "./components/banner";
import CountingCard from "./components/countingCard";
import Content from "./components/contentSection";
import DataImageSec from "./components/dataImageSection";
import SupportImages from "./components/supportImages";
import ProductItems from "./products/components/products";
import { getProducts } from "@/services/product/productService";
import queryString from "query-string";
import ContactSection from "./components/contactSection";
import HomeBlogsSection from "./blogs/components/homeBlogsSection";
import ReviewForm from "./components/review/reviewForm";
import ReviewSlider from "./components/review/reviewSlider";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  keywords: [
    "نکست جی اس",
    "ری اکت",
    "جاوا اسکریپت",
    "نود جی اس",
    "طراحی وب سایت",
    "خدمات وب",
  ],
};

const Home = async ({ searchParams }) => {
  const productsPromise = getProducts(queryString.stringify(searchParams));

  const [{ products }] = await Promise.all([productsPromise]);
  return (
    <>
      <Box
        sx={{
          px: 1.5,
          overflow: "hidden",
        }}
      >
        <TypedInfo />
        <Banner />
        <ProductItems products={products} />
        <CountingCard />
        <Content />
        <DataImageSec />
        <SupportImages />
        <HomeBlogsSection />
        <ReviewSlider />
        <ReviewForm />
      </Box>
      <ContactSection />
    </>
  );
};
export default Home;
