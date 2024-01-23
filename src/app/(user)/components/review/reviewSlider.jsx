"use client";

import { useGetAcceptedReviews } from "@/hooks/useReviews";
import ReviewSliderSkeleton from "./reviewSliderSkeleton";
import ReviewSliderContent from "./reviewSliderContent";

const ReviewSlider = () => {
  const { data, isLoading } = useGetAcceptedReviews();
  const { acceptedReviews } = data || {};

  return isLoading ? (
    <ReviewSliderSkeleton />
  ) : (
    <ReviewSliderContent acceptedReviews={acceptedReviews} />
  );
};

export default ReviewSlider;
