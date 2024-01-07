import {
  addReview,
  getAcceptedReviews,
  getAllReviewsByAdmin,
  getReviewById,
  getReviewCaptcha,
  removeReview,
  updateReview,
} from "@/services/review/reviewServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddReview = () => useMutation({ mutationFn: addReview });

export const useRemoveReview = () => useMutation({ mutationFn: removeReview });

export const useUpdateReview = () => {
  return useMutation({ mutationFn: updateReview });
};

export const useGetReviewsByAdmin = () =>
  useQuery({
    queryKey: ["get-reviews-admin"],
    queryFn: getAllReviewsByAdmin,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetAcceptedReviews = () =>
  useQuery({
    queryKey: ["get-accepted-reviews"],
    queryFn: getAcceptedReviews,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetReviewCaptcha = () =>
  useQuery({
    queryKey: ["get-review-captcha"],
    queryFn: getReviewCaptcha,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetReviewById = (id) =>
  useQuery({
    queryKey: ["get-review-id", id],
    queryFn: () => getReviewById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
