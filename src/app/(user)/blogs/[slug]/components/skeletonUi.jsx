import { Grid, Skeleton } from "@mui/material";
import DescriptionLayout from "../../../components/slugs/description/descriptionLayout";
import HoverCard from "@/common/hoverCard";
import LinkAsideSkeleton from "@/pages/(user)/components/slugs/skeletons/linkAsideSkeleton";
import SlugFaqSkeleton from "../../../components/slugs/skeletons/faqSkeleton";
import SlugDescSkeleton from "../../../components/slugs/skeletons/slugDescSkeleton";
import BannerCardLayout from "@/pages/(user)/components/slugs/card/bannerCardLayout";
import MainCardLayout from "@/pages/(user)/components/slugs/card/mainCardLayout";
import BlogCardSkeleton from "./card/blogCardSkeleton";

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
