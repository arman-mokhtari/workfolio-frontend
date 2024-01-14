import { Box } from "@mui/material";
import Banner from "./components/banner/banner";
import CountingCard from "./components/countUp/countingCard";
import Content from "./components/content/contentSection";
import DataImageSec from "./components/dataImage/dataImageSection";
import SupportImages from "./components/supportImages/supportImages";
import ProductItems from "./products/components/products";
import { getProducts } from "@/services/product/productService";
import queryString from "query-string";
import ContactSection from "./components/contact/contactSection";
import HomeBlogsSection from "./blogs/components/homeBlogsSection";
import ReviewForm from "./components/review/reviewForm";
import ReviewSlider from "./components/review/reviewSlider";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  title: "طراحی وبسایت | فروشگاه آنلاین | سئو | ورکفولیو",
  description:
    "طراحی وبسایت مدرن با رابط کاربری (UI) زیبا و تجربه کاربری (UX) بی‌نظیر که با استفاده از آخرین تکنولوژی‌ها و روش‌های مدرن توسط تیم ورکفولیو به شما ارائه می‌شود.",
  keywords: [
    "فروشگاه آنلاین",
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
          overflow: "hidden",
        }}
      >
        <Banner />
        <Box
          sx={{
            px: 1.5,
          }}
        >
          <ProductItems products={products} />
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
export default Home;

export const amp = true;
