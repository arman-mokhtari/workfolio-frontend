"use client";

import HoverCard from "@/common/hoverCard";
import { useIsBetweenSmLg, useIsOnlyXs } from "@/hooks/useMediaQueries";
import { Skeleton, Stack, Grid } from "@mui/material";
const ReviewSliderSkeleton = () => {
  const isBetweenSmLg = useIsBetweenSmLg();
  const isXs = useIsOnlyXs();
  const arrayLength = isXs ? 1 : isBetweenSmLg ? 2 : 3;

  return (
    <Grid
      sx={{
        px: 1,
      }}
      spacing={2}
      container
    >
      {Array.from({ length: arrayLength }, (_, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          key={i}
          sx={{
            mt: 2,
          }}
        >
          <HoverCard
            defaultElevation={4}
            hoveredElevation={4}
            square={true}
            sx={{
              position: "relative",
              overflow: "visible",
              mb: 2,
              borderRadius: 3,
              p: 2.5,
            }}
          >
            <Stack>
              <Stack
                alignItems="center"
                justifyContent="space-between"
                direction="row"
              >
                <Skeleton height={30} width={120} />
                <Skeleton height={50} width={80} />
              </Stack>

              <Stack
                sx={{ mb: 2 }}
                spacing={1}
                alignItems="center"
                direction="row"
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Stack direction="column">
                  <Skeleton
                    variant="text"
                    width={60}
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    variant="text"
                    width={40}
                    sx={{ fontSize: "1rem" }}
                  />
                </Stack>
              </Stack>

              {Array.from({ length: 3 }, (_, i) => (
                <Skeleton
                  key={i}
                  variant="text"
                  sx={{ fontSize: "1rem", mb: 1 }}
                />
              ))}
              <Skeleton
                key={i}
                variant="text"
                width="50%"
                sx={{ fontSize: "1rem", mb: 1 }}
              />
            </Stack>
          </HoverCard>
        </Grid>
      ))}
      <Stack
        sx={{ mb: 2, width: 1 }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} variant="circular" width={5} height={5} />
        ))}
      </Stack>
    </Grid>
  );
};

export default ReviewSliderSkeleton;
