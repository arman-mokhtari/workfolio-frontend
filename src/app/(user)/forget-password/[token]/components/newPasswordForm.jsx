"use client";

import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { useResetPassword } from "@/hooks/useResetPassword";

const NewPasswordForm = ({ token }) => {
  const [values, setValues] = useState({
    showNewPassword: false,
    showCurrentPassword: false,
    showConfirmNewPassword: false,
  });

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };

  const handleClickShowConfirmNewPassword = () => {
    setValues({
      ...values,
      showConfirmNewPassword: !values.showConfirmNewPassword,
    });
  };

  const { isPending, mutateAsync } = useResetPassword();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        password: "",
        confirmPassword: "",
      });
    }
  }, [formState, reset]);

  const submitHandler = async ({ password, confirmPassword }) => {
    try {
      const { message } = await mutateAsync({
        token,
        data: {
          password,
          confirmPassword,
        },
      });
      router.push("/");
      toast.success(message, {
        duration: 4000,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";
      toast.error(errorMessage);
    }
  };

  return (
    <Box
      onSubmit={handleSubmit(submitHandler)}
      component="form"
      sx={{
        width: 1,
        mt: 2,
      }}
    >
      <FormControl
        sx={{
          mb: 1.5,
        }}
        fullWidth
      >
        <InputLabel htmlFor="account-settings-new-password">
          کلمه عبور جدید
        </InputLabel>
        <OutlinedInput
          label="کلمه عبور جدید"
          id="account-settings-new-password"
          autoFocus
          type={values.showNewPassword ? "text" : "password"}
          {...register("password", {
            required: "کلمه عبور جدید را وارد کنید",
            minLength: {
              value: 5,
              message: "کلمه عبور جدید حداقل باید 5 کاراکتر باشد",
            },
            maxLength: {
              value: 25,
              message: "کلمه عبور حداکثر باید 25 کاراکتر باشد",
            },
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleClickShowNewPassword}
                aria-label="toggle password visibility"
              >
                {values.showNewPassword ? (
                  <RemoveRedEyeOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error>{errors.password?.message}</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>تکرار کلمه عبور جدید</InputLabel>
        <OutlinedInput
          label="تکرار کلمه عبور جدید"
          type={values.showConfirmNewPassword ? "text" : "password"}
          {...register("confirmPassword", {
            required: "تکرار کلمه عبور جدید را وارد کنید",
            minLength: {
              value: 5,
              message: "تکرار کلمه عبور جدید حداقل باید 5 کاراکتر باشد",
            },
            maxLength: {
              value: 25,
              message: "کلمه عبور حداکثر باید 25 کاراکتر باشد",
            },
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmNewPassword}
              >
                {values.showConfirmNewPassword ? (
                  <RemoveRedEyeOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error>{errors.confirmPassword?.message}</FormHelperText>
      </FormControl>

      <Button
        type="submit"
        fullWidth
        disabled={isPending}
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
      >
        ذخیره
      </Button>
    </Box>
  );
};

export default NewPasswordForm;
