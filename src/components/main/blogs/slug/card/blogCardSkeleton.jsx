import HoverCard from "@/common/hoverCard";
import { Stack, Box, Skeleton } from "@mui/material";

const BlogCardSkeleton = () => {
  return (
    <HoverCard sx={{ p: 3 }} defaultElevation={4} hoveredElevation={4}>
      <Stack>
        <Skeleton
          variant="text"
          width={100}
          sx={{
            fontSize: "1.2rem",
            lineHeight: "1.8rem",
          }}
        />
        <Stack sx={{ mt: 1.5 }} spacing={0.5}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton width="80%" variant="text" sx={{ fontSize: "1rem" }} />
        </Stack>
        <Skeleton
          width={60}
          variant="text"
          sx={{ fontSize: "1rem", mt: 1, mb: 1.5 }}
        />
        <Box>
          <Stack
            sx={{ mb: 1.5 }}
            alignItems="center"
            spacing={0.5}
            direction="row"
          >
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
          </Stack>
        </Box>
        <Stack spacing={1.3}>
          <Skeleton width={80} variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton width={110} variant="text" sx={{ fontSize: "1rem" }} />
        </Stack>
        <Box sx={{ width: 1, display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "94%" }}>
            <Skeleton sx={{ mt: 2 }} height={4} />
            <Stack
              sx={{ my: 1 }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Skeleton width={80} variant="text" sx={{ fontSize: "1rem" }} />
              <Stack spacing={1} direction="row">
                {Array.from({ length: 3 }, (_, i) => (
                  <Skeleton key={i} variant="circular" width={30} height={30} />
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </HoverCard>
  );
};

export default BlogCardSkeleton;
