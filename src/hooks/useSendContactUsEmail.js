import {
  getContactUsCaptcha,
  sendContactUsEmail,
} from "@/services/contactUs/contactUsServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSendContactUsEmail = () =>
  useMutation({ mutationFn: sendContactUsEmail });

export const useGetContactUsCaptcha = () =>
  useQuery({
    queryKey: ["get-contact-captcha"],
    queryFn: getContactUsCaptcha,
    retry: false,
    refetchOnWindowFocus: true,
  });
