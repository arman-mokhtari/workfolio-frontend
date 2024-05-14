import { Grid, Skeleton } from "@mui/material";
import HoverCard from "@/common/hoverCard";
import LinkAsideSkeleton from "@/components/main/general/slugs/skeletons/linkAsideSkeleton";
import ReviewSliderSkeleton from "@/components/main/general/review/reviewSliderSkeleton";
import BannerCardLayout from "@/components/main/general/slugs/card/bannerCardLayout";
import MainCardLayout from "@/components/main/general/slugs/card/mainCardLayout";
import DescriptionLayout from "@/components/main/general/slugs/description/descriptionLayout";
import ReviewFormLayout from "@/components/main/general/review/reviewFormLayout";
import ReviewFormSkeleton from "@/components/main/general/slugs/skeletons/reviewFormSkeleton";
import SlugFaqSkeleton from "@/components/main/general/slugs/skeletons/faqSkeleton";
import SlugDescSkeleton from "@/components/main/general/slugs/skeletons/slugDescSkeleton";
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
