"use client";

import { useGetUser } from "@/hooks/useAuth";
import ReviewFormLayout from "./reviewFormLayout";
import ReviewFormSkeleton from "../slugs/skeletons/reviewFormSkeleton";
import ReviewFormMainContent from "./reviewFormMainContent";

const ReviewForm = () => {
  const { isPending } = useGetUser();

  return (
    <ReviewFormLayout>
      {isPending ? <ReviewFormSkeleton /> : <ReviewFormMainContent />}
    </ReviewFormLayout>
  );
};

export default ReviewForm;
