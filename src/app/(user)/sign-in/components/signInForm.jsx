"use client";

import Link from "next/link";
import UserServicesCaptcha from "@/common/userServicesCaptcha";
import { useAuthenticateUser } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";

import {
  Box,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Typography,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import LoginSectionsCard from "@/common/loginSectionsCard";

const SignInForm = () => {
  const router = useRouter();
  const [loginType, setLoginType] = useState("phoneNumber");

  const { isPending, mutateAsync } = useAuthenticateUser();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      loginIdentifier: "", // changed from phoneNumber to loginIdentifier
      password: "",
      enteredCaptcha: "",
    },
  });

  const handleLoginTypeChange = (event) => {
    setLoginType(event.target.value);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        loginIdentifier: "", // changed from phoneNumber to loginIdentifier
        password: "",
        enteredCaptcha: "",
      });
    }
  }, [formState, reset]);

  const submitHandler = async ({
    loginIdentifier,
    password,
    enteredCaptcha,
  }) => {
    try {
      const { message } = await mutateAsync({
        // changed from phoneNumber to loginIdentifier
        [loginType]: loginIdentifier,
        password,
        enteredCaptcha,
      });
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.success(message);

      router.push("/");
    } catch (err) {
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <LoginSectionsCard title="ورود" mt={0} mb={5}>
      <Box
        onSubmit={handleSubmit(submitHandler)}
        component="form"
        sx={{
          width: 1,
        }}
      >
        <Box>
          <FormLabel>انتخاب نحوه ورود</FormLabel>
          <RadioGroup
            row
            aria-label="loginType"
            name="loginType"
            value={loginType}
            onChange={handleLoginTypeChange}
          >
            <FormControlLabel
              value="phoneNumber"
              control={<Radio size="small" />}
              label="شماره موبایل"
            />
            <FormControlLabel
              value="email"
              control={<Radio size="small" />}
              label="ایمیل"
            />
          </RadioGroup>
        </Box>

        <TextField
          sx={{
            mb: 2,
            mt: 1,
          }}
          fullWidth
          type={loginType === "phoneNumber" ? "tel" : "email"}
          label={loginType === "phoneNumber" ? "شماره موبایل" : "ایمیل"}
          name="loginIdentifier"
          autoComplete="off"
          autoFocus
          {...register("loginIdentifier", {
            required: "شماره موبایل یا ایمیل خود را وارد کنید",
          })}
          helperText={errors.loginIdentifier?.message}
        />
        <TextField
          fullWidth
          name="password"
          label="کلمه عبور"
          type="password"
          autoComplete="off"
          {...register("password", {
            required: "کلمه عبور را وارد کنید",
            minLength: {
              value: 5,
              message: "کلمه عبور حداقل باید 5 کاراکتر باشد",
            },
            maxLength: {
              value: 25,
              message: "کلمه عبور حداکثر باید 25 کاراکتر باشد",
            },
          })}
          helperText={errors.password?.message}
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
          ورود
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
          <Grid item xs={7}>
            <Link href="/auth">
              <Typography noWrap variant="body2">
                حساب کاربری ندارم! ثبت نام
              </Typography>
            </Link>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            item
            xs={5}
          >
            <Link href="/forget-password">
              <Typography noWrap variant="body2">
                فراموشی کلمه عبور
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </LoginSectionsCard>
  );
};

export default SignInForm;
