import { Skeleton, Grid, Stack } from "@mui/material";

const SlugDescSkeleton = () => {
  return (
    <Stack>
      <Skeleton
        variant="text"
        width={200}
        sx={{
          fontSize: "1.4rem",
          my: 2.5,
        }}
      />
      <Grid spacing={1} container>
        <Grid item xs={12} sm={6}>
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton
              key={i}
              variant="text"
              width="100%"
              sx={{ fontSize: "1rem" }}
            />
          ))}
          <Skeleton variant="text" width="50%" sx={{ fontSize: "1rem" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton sx={{ borderRadius: 1, pt: "68%" }} variant="rectangular" />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SlugDescSkeleton;
