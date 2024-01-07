import {
  addProductReview,
  getAcceptedProductReviews,
  getProductReviewById,
  getProductReviewCaptcha,
  getProductReviewsByAdmin,
  removeProductReview,
  updateProductReview,
} from "@/services/review/productReviewServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddProductReview = () =>
  useMutation({ mutationFn: addProductReview });

export const useRemoveProductReview = () =>
  useMutation({ mutationFn: removeProductReview });

export const useUpdateProductReview = () => {
  return useMutation({ mutationFn: updateProductReview });
};

export const useGetProductReviewsByAdmin = () =>
  useQuery({
    queryKey: ["product-reviews-admin"],
    queryFn: getProductReviewsByAdmin,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetAcceptedProductReviews = (id) =>
  useQuery({
    queryKey: ["accepted-product-reviews", id],
    queryFn: () => getAcceptedProductReviews(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetProductReviewCaptcha = () =>
  useQuery({
    queryKey: ["product-review-captcha"],
    queryFn: getProductReviewCaptcha,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetProductReviewById = (id) =>
  useQuery({
    queryKey: ["product-review-id", id],
    queryFn: () => getProductReviewById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
