import HoverCard from "@/common/hoverCard";
import { Stack, Box, Skeleton } from "@mui/material";

const ProductCardSkeleton = () => {
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
        <Stack sx={{ my: 1.5 }} spacing={0.5}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton width="60%" variant="text" sx={{ fontSize: "1rem" }} />
        </Stack>

        <Box>
          {Array.from({ length: 3 }, (_, i) => (
            <Stack
              key={i}
              sx={{ mb: 1 }}
              alignItems="center"
              spacing={0.5}
              direction="row"
            >
              <Skeleton variant="circular" width={30} height={30} />
              <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
            </Stack>
          ))}
        </Box>
        <Stack spacing={1}>
          <Skeleton width={60} variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton width={60} variant="text" sx={{ fontSize: "1rem" }} />
        </Stack>
        <Skeleton sx={{ mt: 2 }} variant="rounded" height={30} />
      </Stack>
    </HoverCard>
  );
};

export default ProductCardSkeleton;
