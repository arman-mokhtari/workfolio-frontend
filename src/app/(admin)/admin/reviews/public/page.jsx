"use client";

import Loading from "@/common/loading";
import { Typography, Stack } from "@mui/material";
import { useGetReviewsByAdmin } from "@/hooks/useReviews";
import ReviewsTable from "./components/reviewsTable";

const BlogsPage = () => {
  const { isLoading, data } = useGetReviewsByAdmin();
  const { reviews } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 2,
        }}
      >
        <Typography variant="h5">نظرات</Typography>
      </Stack>

      <ReviewsTable reviews={reviews} />
    </>
  );
};

export default BlogsPage;
