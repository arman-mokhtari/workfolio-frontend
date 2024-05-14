import { Grid, Skeleton } from "@mui/material";
import HoverCard from "@/common/hoverCard";
import LinkAsideSkeleton from "@/components/main/general/slugs/skeletons/linkAsideSkeleton";
import BannerCardLayout from "@/components/main/general/slugs/card/bannerCardLayout";
import MainCardLayout from "@/components/main/general/slugs/card/mainCardLayout";
import DescriptionLayout from "@/components/main/general/slugs/description/descriptionLayout";
import BlogCardSkeleton from "./card/blogCardSkeleton";
import SlugDescSkeleton from "../../general/slugs/skeletons/slugDescSkeleton";
import SlugFaqSkeleton from "../../general/slugs/skeletons/faqSkeleton";

const BlogSkeletonUi = () => {
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
          <BlogCardSkeleton />
        </Grid>
      </BannerCardLayout>

      <MainCardLayout>
        <DescriptionLayout>
          <SlugDescSkeleton />
          <SlugFaqSkeleton />
        </DescriptionLayout>

        <Grid item xs={12} sm={10} md={9} lg={2.5}>
          <HoverCard defaultElevation={4} hoveredElevation={4}>
            <LinkAsideSkeleton />
          </HoverCard>
        </Grid>
      </MainCardLayout>
    </>
  );
};

export default BlogSkeletonUi;
