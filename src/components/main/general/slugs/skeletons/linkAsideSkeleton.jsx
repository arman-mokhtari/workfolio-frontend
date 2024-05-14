import { Skeleton, Stack, Box } from "@mui/material";

const LinkAsideSkeleton = () => {
  return (
    <Stack sx={{ px: 1, py: 2 }}>
      <Skeleton
        variant="text"
        width={100}
        sx={{
          fontSize: "1.4rem",
          lineHeight: "1.8rem",
        }}
      />

      <Box>
        {Array.from({ length: 5 }, (_, i) => (
          <Stack
            key={i}
            sx={{ my: 2.5 }}
            alignItems="center"
            spacing={2}
            direction="row"
          >
            <Skeleton variant="circular" width={25} height={25} />
            <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default LinkAsideSkeleton;
