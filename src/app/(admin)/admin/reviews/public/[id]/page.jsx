"use client";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import ReviewDescription from "./components/reviewDescription";
import { useGetReviewById } from "@/hooks/useReviews";
import ReviewDataCard from "./components/reviewDataCard";

const ReviewPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isLoading, data } = useGetReviewById(id);
  const { review } = data || {};

  if (isLoading) return <Loading />;
  if (review?._id !== id || !review) return router.push("/404");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <ReviewDataCard id={id} review={review} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <ReviewDescription review={review} />
      </Grid>
    </Grid>
  );
};

export default ReviewPage;
