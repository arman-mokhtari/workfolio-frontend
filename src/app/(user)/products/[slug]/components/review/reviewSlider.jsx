"use client";

import { useGetAcceptedProductReviews } from "@/hooks/useProductReviews";
import ReviewSliderSkeleton from "../../../../components/review/reviewSliderSkeleton";
import ReviewSliderContent from "../../../../components/review/reviewSliderContent";

const ReviewSlider = ({ pId }) => {
  const { data, isLoading } = useGetAcceptedProductReviews(pId);
  const { acceptedReviews } = data || {};

  return isLoading ? (
    <ReviewSliderSkeleton />
  ) : (
    <ReviewSliderContent acceptedReviews={acceptedReviews} />
  );
};

export default ReviewSlider;
