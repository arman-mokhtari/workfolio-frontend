import { Skeleton, Stack } from "@mui/material";

const ReviewFormSkeleton = () => {
  return (
    <Stack
      spacing={1.5}
      sx={{
        p: 2,
      }}
    >
      <Skeleton width={220} variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton sx={{ borderRadius: 3 }} variant="rectangular" height={130} />
      <Skeleton width={190} variant="text" sx={{ fontSize: "1.5rem" }} />
      <Skeleton width={160} height={20} />
      <Skeleton
        sx={{ borderRadius: 3 }}
        variant="rectangular"
        height={40}
        width={100}
      />
      <Skeleton
        sx={{ borderRadius: 3 }}
        variant="rectangular"
        height={40}
        width="35%"
      />
      <Skeleton sx={{ borderRadius: 3 }} variant="rectangular" height={45} />
    </Stack>
  );
};

export default ReviewFormSkeleton;
