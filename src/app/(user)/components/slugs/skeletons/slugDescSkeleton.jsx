import { Skeleton, Box, Stack } from "@mui/material";

const SlugDescSkeleton = () => {
  return (
    <Stack>
      <Skeleton
        variant="text"
        width={200}
        sx={{
          fontSize: "1.4rem",
          my: 2,
        }}
      />
      <Stack>
        <Skeleton
          sx={{ borderRadius: 1, pt: "66.5%", mb: 1.5 }}
          variant="rectangular"
        />

        <Box>
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton
              key={i}
              variant="text"
              width="100%"
              sx={{ fontSize: "1rem" }}
            />
          ))}
          <Skeleton variant="text" width="50%" sx={{ fontSize: "1rem" }} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default SlugDescSkeleton;
