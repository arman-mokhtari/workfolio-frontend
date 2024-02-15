"use client";
import {
  Box,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import {
  useAddNewsletterUser,
  useGetNewsletterCaptcha,
} from "@/hooks/useNewsletterUsers";
import Loading from "@/common/loading";
import HoverCard from "@/common/hoverCard";
import LoadingBtn from "@/common/loadingBtn";

const NewsletterForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      enteredCaptcha: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        name: "",
        email: "",
        enteredCaptcha: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const { mutateAsync, isPending } = useAddNewsletterUser();

  const { isLoading, data } = useGetNewsletterCaptcha();

  const { data: captchaData } = data || {};
  const queryClient = useQueryClient();

  const onSubmit = async ({ enteredCaptcha, name, email }, e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        enteredCaptcha,
        email,
        name,
      });
      queryClient.invalidateQueries({ queryKey: ["get-newsletter-captcha"] });
      setIsSubmit(true);
      toast.success(message);
    } catch (error) {
      queryClient.invalidateQueries({ queryKey: ["get-newsletter-captcha"] });
      const errorMessage =
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";

      toast.error(errorMessage);
    }
  };

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        backgroundImage: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 1,
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CardContent
          sx={{
            "& .MuiFormHelperText-root": {
              color: "#f44336",
            },
          }}
        >
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              flexDirection: "column",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "1rem",
                mt: 1,
                mb: 2,
                color: "#037fff",
                fontWeight: "bold",
              }}
            >
              عضویت در خبرنامه
            </Typography>
            <TextField
              {...register("name", {
                required: "نام خود را وارد کنید",
                maxLength: 80,
              })}
              helperText={errors.name?.message}
              size="small"
              name="name"
              type="text"
              sx={{
                color: "#037fff",
                width: 1,
              }}
              label="نام"
              variant="outlined"
            />
            <TextField
              {...register("email", {
                required: "آدرس ایمیل خود را وارد کنید",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "فرمت ایمیل صحیح نیست",
                },
              })}
              size="small"
              name="email"
              type="email"
              sx={{
                color: "#037fff",
                width: 1,
                mt: 1.5,
              }}
              label="ایمیل"
              variant="outlined"
              helperText={errors.email?.message}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 1,
            }}
          >
            <Box
              sx={{
                height: 60,
              }}
            >
              {isLoading ? (
                <Loading mt={1} />
              ) : (
                <Image
                  priority
                  src={`data:image/svg+xml;base64,${btoa(captchaData)}`}
                  width="120"
                  height="50"
                  alt="تصویر اعتبارسنجی"
                  title="تصویر اعتبارسنجی"
                />
              )}
            </Box>
          </Box>

          <TextField
            {...register("enteredCaptcha", {
              required: "تایید کنید ربات نیستید",
              minLength: {
                value: 5,
                message: "اعتبارسنجی باید 5 کاراکتر باشد",
              },
              maxLength: {
                value: 5,
                message: "اعتبارسنجی باید 5 کاراکتر باشد",
              },
            })}
            helperText={errors.enteredCaptcha?.message}
            size="small"
            name="enteredCaptcha"
            label="متن تصویر را وارد کنید"
            type="text"
            sx={{
              width: 1,
            }}
          />

          <CardActions
            sx={{
              alignItems: "end",
              flexDirection: "column",
              width: 1,
              mt: 0.5,
              alignItems: "center",
            }}
          >
            <LoadingBtn
              text="ثبت نام"
              loading={isPending}
              type="submit"
              variant="contained"
            />
          </CardActions>
        </CardContent>
      </Box>
    </HoverCard>
  );
};

export default NewsletterForm;
