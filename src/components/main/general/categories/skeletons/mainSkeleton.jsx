import HoverCard from "@/common/hoverCard";
import { Grid, Skeleton, Stack } from "@mui/material";

const CategoriesMainSkeleton = () => {
  return Array.from({ length: 4 }, (_, i) => (
    <Grid xs={12} md={6} lg={3} item key={i}>
      <HoverCard sx={{ p: 2 }} defaultElevation={4} hoveredElevation={4}>
        <Stack>
          <Skeleton
            sx={{ borderRadius: 3 }}
            variant="rectangular"
            height={130}
          />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton
            sx={{ mb: 0.5 }}
            variant="circular"
            width={30}
            height={30}
          />
          <Skeleton variant="rounded" height={30} />
        </Stack>
      </HoverCard>
    </Grid>
  ));
};

export default CategoriesMainSkeleton;
