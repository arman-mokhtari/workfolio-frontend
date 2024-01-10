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
  Skeleton,
  Stack,
} from "@mui/material";
import { toast } from "react-hot-toast";

import Image from "next/image";
import HoverCard from "@/common/hoverCard";
import { useQueryClient } from "@tanstack/react-query";
import ReviewRating from "./reviewRating";
import Loading from "@/common/loading";
import {
  useAddProductReview,
  useGetProductReviewCaptcha,
} from "@/hooks/useProductReviews";
import { useGetUser } from "@/hooks/useAuth";

const ReviewForm = ({ pId }) => {
  const [ratingValue, setRatingValue] = useState(4);

  const handleRatingChange = (value) => {
    setRatingValue(value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      message: "",
      enteredCaptcha: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        message: "",
        enteredCaptcha: "",
      });
    }
  }, [formState, reset]);

  const { mutateAsync } = useAddProductReview();

  const { isLoading, data } = useGetProductReviewCaptcha();

  const { data: captchaData } = data || {};
  const queryClient = useQueryClient();

  const onSubmit = async ({ enteredCaptcha, message }, e) => {
    e.preventDefault();
    try {
      const { message: msg } = await mutateAsync({
        productId: pId,
        data: {
          enteredCaptcha,
          message,
          rating: ratingValue,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["product-review-captcha"] });
      toast.success(msg);
    } catch (error) {
      queryClient.invalidateQueries({ queryKey: ["product-review-captcha"] });
      const errorMessage =
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";

      toast.error(errorMessage);
    }
  };

  const { isPending } = useGetUser();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={9}
        md={8}
        lg={7}
        sx={{
          position: "relative",
        }}
      >
        <HoverCard
          defaultElevation={4}
          hoveredElevation={10}
          sx={{
            backgroundImage: "none",
            "& form": {
              width: "100%",
            },
          }}
        >
          {isPending ? (
            <Stack
              spacing={1.5}
              sx={{
                p: 2,
              }}
            >
              <Skeleton width={220} variant="text" sx={{ fontSize: "2rem" }} />
              <Skeleton
                sx={{ borderRadius: 3 }}
                variant="rectangular"
                height={130}
              />
              <Skeleton
                width={190}
                variant="text"
                sx={{ fontSize: "1.5rem" }}
              />
              <Skeleton width={160} height={20} />
              <Skeleton
                sx={{ borderRadius: 3 }}
                variant="rectangular"
                height={40}
                width={100}
              />
              <Skeleton
                sx={{ borderRadius: 3 }}
                variant="rectangular"
                height={40}
                width="35%"
              />
              <Skeleton
                sx={{ borderRadius: 3 }}
                variant="rectangular"
                height={45}
              />
            </Stack>
          ) : (
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Grid
                      container
                      sx={{
                        "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline":
                          {
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
                              message:
                                "متن پیام نباید بیشتر از 700 کاراکتر باشد",
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
                                src={`data:image/svg+xml;base64,${btoa(
                                  captchaData
                                )}`}
                                width="120"
                                height="50"
                                alt="Captcha Image"
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
          )}
        </HoverCard>
      </Grid>
    </Grid>
  );
};

export default ReviewForm;
