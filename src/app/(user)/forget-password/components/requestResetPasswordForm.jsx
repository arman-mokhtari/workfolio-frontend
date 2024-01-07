"use client";

import { useQueryClient } from "@tanstack/react-query";
import Loading from "@/common/loading";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ResetPasswordCaptcha from "./resetPasswordCaptcha";
import { useSendPasswordRequest } from "@/hooks/useResetPassword";
import toast from "react-hot-toast";

const RequestResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      enteredCaptcha: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: "",
        enteredCaptcha: "",
      });
    }
  }, [formState, reset]);
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useSendPasswordRequest();

  const submitHandler = async ({ email, enteredCaptcha }) => {
    try {
      const { message } = await mutateAsync({
        email,
        enteredCaptcha,
      });
       queryClient.invalidateQueries({
        queryKey: ["get-reset-password-captcha"],
      });
      // router.push("/sign-in");
      toast.success(message, {
        duration: 3000,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";
      queryClient.invalidateQueries({
        queryKey: ["get-reset-password-captcha"],
      });
      toast.error(errorMessage);
    }
  };

  return (
    <Box
      onSubmit={handleSubmit(submitHandler)}
      component="form"
      sx={{
        width: 1,
      }}
    >
      <TextField
        sx={{
          mb: 1,
          mt: 2,
        }}
        fullWidth
        type="email"
        label="ایمیل"
        name="email"
        autoFocus
        {...register("email", {
          required: "آدرس ایمیل خود را وارد کنید",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "فرمت ایمیل صحیح نیست",
          },
        })}
        helperText={errors.email?.message}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 1,
          "& img": {
            mb: 2,
          },
        }}
      >
        <ResetPasswordCaptcha />

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
          fullWidth
          name="enteredCaptcha"
          label="لطفا متن تصویر را وارد کنید"
          type="text"
        />
      </Box>
      
        <Button
          type="submit"
          disabled={isPending}
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
        >
          ارسال کد تایید
        </Button>
      
      <Grid
        sx={{
          "& a": {
            textDecoration: "none",
            color: "text.secondary",
          },
        }}
        container
      >
        <Grid item>
          <Link href="/sign-in">
            <Typography noWrap variant="body2">
              کلمه عبور را به خاطر آوردم! ورود
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RequestResetPasswordForm;
