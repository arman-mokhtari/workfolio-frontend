import { Grid, Skeleton } from "@mui/material";
import DescriptionLayout from "../../../components/slugs/description/descriptionLayout";
import HoverCard from "@/common/hoverCard";
import LinkAsideSkeleton from "@/pages/(user)/components/slugs/skeletons/linkAsideSkeleton";
import ReviewSliderSkeleton from "@/pages/(user)/components/review/reviewSliderSkeleton";
import ReviewFormLayout from "../../../components/review/reviewFormLayout";
import ReviewFormSkeleton from "../../../components/slugs/skeletons/reviewFormSkeleton";
import SlugFaqSkeleton from "../../../components/slugs/skeletons/faqSkeleton";
import SlugDescSkeleton from "../../../components/slugs/skeletons/slugDescSkeleton";
import BannerCardLayout from "@/pages/(user)/components/slugs/card/bannerCardLayout";
import MainCardLayout from "@/pages/(user)/components/slugs/card/mainCardLayout";
import ProductCardSkeleton from "./card/productCardSkeleton";

const SkeletonUi = () => {
  return (
    <>
      <BannerCardLayout>
        <Grid item xs={12} sm={10} md={9} lg={5}>
          <HoverCard
            defaultElevation={4}
            hoveredElevation={4}
            sx={{
              width: 1,
              height: 1,
            }}
          >
            <Skeleton
              sx={{ borderRadius: 1, height: 1, pt: "61.5%" }}
              variant="rectangular"
            />
          </HoverCard>
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          md={9}
          lg={5}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ProductCardSkeleton />
        </Grid>
      </BannerCardLayout>

      <MainCardLayout>
        <DescriptionLayout>
          <SlugDescSkeleton />
          <SlugFaqSkeleton />
        </DescriptionLayout>

        <Grid item xs={12} sm={10} md={9} lg={2.5}>
          <HoverCard defaultElevation={4}>
            <LinkAsideSkeleton />
          </HoverCard>
        </Grid>
      </MainCardLayout>

      <ReviewSliderSkeleton />

      <ReviewFormLayout>
        <ReviewFormSkeleton />
      </ReviewFormLayout>
    </>
  );
};

export default SkeletonUi;
