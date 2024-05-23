import { Box } from "@mui/material";
import Banner from "./banner/banner";
import CountingCard from "./countUp/countingCard";
import Content from "./content/contentSection";
import SupportImages from "./supportImages/supportImages";
import HomeBlogsSection from "../blogs/homeBlogsSection";
import DataImageSec from "./dataImage/dataImageSection";
import ReviewSlider from "./review/reviewSlider";
import ReviewForm from "./review/reviewForm";
import ContactSection from "./contact/contactSection";
import HomeProductsSection from "../products/homeProductsSection";

const PageMainContent = ({ isAccessToken }) => {
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
          <HomeProductsSection isAccessToken={isAccessToken} />
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
