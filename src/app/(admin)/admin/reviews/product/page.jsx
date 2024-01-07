"use client";

import Loading from "@/common/loading";
import { Typography, Stack } from "@mui/material";
import ReviewsTable from "./components/reviewsTable";
import { useGetProductReviewsByAdmin } from "@/hooks/useProductReviews";

const BlogsPage = () => {
  const { isLoading, data } = useGetProductReviewsByAdmin();
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
