"use client";
import Loading from "@/common/loading";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import UserServicesCaptcha from "@/common/userServicesCaptcha";

const SendOtpForm = ({ sendOtpHandler, onChange, isPending,onChangeCaptcha }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
      enteredCaptcha: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        phoneNumber: "",
        enteredCaptcha: "",
      });
    }
  }, [formState, reset]);

  return (
    
    <Box
      onSubmit={handleSubmit((data) => sendOtpHandler(data))}
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
        type="tel"
        label="شماره موبایل"
        name="phoneNumber"
        autoFocus
        {...register("phoneNumber", {
          required: "شماره موبایل خود را وارد کنید",
          pattern: {
            value: /^0\d{10}$/,
            message: "شماره موبایل باید 11 رقم و با 0 شروع شود",
          },
          onChange,
        })}
        helperText={errors.phoneNumber?.message}
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
        <UserServicesCaptcha />

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
            onChange:onChangeCaptcha,
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
        <Grid item xs={6}>
          <Link href="/sign-in">
            <Typography noWrap variant="body2">
              حساب کاربری دارم! ورود
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SendOtpForm;
