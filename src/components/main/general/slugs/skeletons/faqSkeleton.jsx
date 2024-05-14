import { Skeleton, Stack } from "@mui/material";

const SlugFaqSkeleton = () => {
  return (
    <>
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          my: 2.5,
        }}
      >
        <Skeleton width="39%" height={5} />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: 5 }}
          width={160}
          height={35}
        />
        <Skeleton width="39%" height={5} />
      </Stack>
      <Skeleton
        variant="rectangular"
        sx={{ borderRadius: 1, my: 2.7 }}
        height={205}
      />
    </>
  );
};

export default SlugFaqSkeleton;
