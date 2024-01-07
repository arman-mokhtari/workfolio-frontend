import {
  addNewsletterUser,
  getNewsletterCaptcha,
  getNewsletterUsers,
  removeNewsletterUser,
} from "@/services/newsletter/newsletterServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetNewsletterUsers = () =>
  useQuery({
    queryKey: ["get-newsletter-users"],
    queryFn: getNewsletterUsers,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetNewsletterCaptcha = () =>
  useQuery({
    queryKey: ["get-newsletter-captcha"],
    queryFn: getNewsletterCaptcha,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddNewsletterUser = () =>
  useMutation({ mutationFn: addNewsletterUser });

export const useRemoveNewsletterUser = () =>
  useMutation({ mutationFn: removeNewsletterUser });
