"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  CardContent,
  TextField,
  CardActions,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { toast } from "react-hot-toast";

import Image from "next/image";
import { useAddReview, useGetReviewCaptcha } from "@/hooks/useReviews";
import { useQueryClient } from "@tanstack/react-query";
import ReviewRating from "./reviewRating";
import Loading from "@/common/loading";

const ReviewFormMainContent = () => {
  const [ratingValue, setRatingValue] = useState(4);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleRatingChange = (value) => {
    setRatingValue(value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      message: "",
      enteredCaptcha: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        message: "",
        enteredCaptcha: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const { mutateAsync } = useAddReview();
  const { isLoading, data } = useGetReviewCaptcha();
  const { data: captchaData } = data || {};
  const queryClient = useQueryClient();

  const onSubmit = async ({ enteredCaptcha, message }, e) => {
    e.preventDefault();
    try {
      const { message: msg } = await mutateAsync({
        enteredCaptcha,
        message,
        rating: ratingValue,
      });
      queryClient.invalidateQueries({ queryKey: ["get-review-captcha"] });
      setIsSubmit(true)
      toast.success(msg);
    } catch (error) {
      queryClient.invalidateQueries({ queryKey: ["get-review-captcha"] });
      const errorMessage =
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";

      toast.error(errorMessage);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#037fff",
                },
                "& .MuiInputBase-root:focus-within .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#037fff",
                  },
                "& .MuiFormHelperText-root": {
                  color: "#f44336",
                },
                minHeight: "300px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 1,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.1rem",
                    mt: 1,
                    mb: 2,
                    color: "#037fff",
                    fontWeight: "bold",
                  }}
                >
                  ما به نظرات شما احترام می‌گذاریم.
                </Typography>
                <TextField
                  {...register("message", {
                    required: "متن پیام خود را وارد کنید",
                    maxLength: {
                      value: 700,
                      message: "متن پیام نباید بیشتر از 700 کاراکتر باشد",
                    },
                  })}
                  fullWidth
                  multiline
                  rows={5}
                  size="small"
                  name="message"
                  sx={{
                    color: "#037fff",
                    mt: 0.5,
                  }}
                  label="نظرات خود را با ما به اشتراک بگذارید..."
                  variant="outlined"
                  helperText={errors.message?.message}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "& img": {
                    mb: 2,
                  },
                }}
              >
                <ReviewRating
                  text="به ورکفولیو چه امتیازی می‌دهید؟"
                  onRatingChange={handleRatingChange}
                />
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
                  sx={{
                    width: "300px",
                  }}
                  size="small"
                  name="enteredCaptcha"
                  label="لطفا متن تصویر را وارد کنید"
                  type="text"
                />
              </Box>

              <CardActions
                sx={{
                  alignItems: "end",
                  flexDirection: "column",
                  width: 1,
                  mt: 1.5,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#037fff",
                    color: "text.primary",
                  }}
                >
                  ارسال
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
};

export default ReviewFormMainContent;
