import { Grid, Skeleton } from "@mui/material";
import DescriptionLayout from "../../../components/slugs/description/descriptionLayout";
import HoverCard from "@/common/hoverCard";
import LinkAsideSkeleton from "@/pages/(user)/components/skeletons/linkAsideSkeleton";
import SlugCardSkeleton from "../../../components/slugs/skeletons/slugCardSkeleton";
import SlugFaqSkeleton from "../../../components/slugs/skeletons/faqSkeleton";
import SlugDescSkeleton from "../../../components/slugs/skeletons/slugDescSkeleton";
import BannerCardLayout from "@/pages/(user)/components/slugs/card/bannerCardLayout";

const BlogSkeletonUi = () => {
  return (
    <>
      <BannerCardLayout>
        <Grid item xs={12} md={6}>
          <Skeleton sx={{ borderRadius: 1, pt: "60%" }} variant="rectangular" />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SlugCardSkeleton />
        </Grid>
      </BannerCardLayout>

      <Grid container spacing={2}>
        <DescriptionLayout>
          <SlugDescSkeleton />
          <SlugFaqSkeleton />
        </DescriptionLayout>

        <Grid item xs={12} md={3}>
          <HoverCard defaultElevation={4} hoveredElevation={4}>
            <LinkAsideSkeleton />
          </HoverCard>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogSkeletonUi;
