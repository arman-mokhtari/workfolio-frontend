import {
  addCouponToCart,
  addToCart,
  removeFromCart,
} from "@/services/payment/cartSevice";
import { useMutation } from "@tanstack/react-query";

export const useAddToCart = () =>
  useMutation({
    mutationFn: addToCart,
  });

export const useRemoveFromCart = () =>
  useMutation({
    mutationFn: removeFromCart,
  });

export const useAddCouponToCart = () =>
  useMutation({
    mutationFn: addCouponToCart,
  });
