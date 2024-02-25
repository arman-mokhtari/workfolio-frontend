"use client";

import { completeProfile } from "@/services/auth/authServices";
import { Box, Button, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProfileTextFields = () => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

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
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    try {
      const { message } = await mutateAsync({
        name,
        email,
        password,
        confirmPassword,
      });
      toast.success(message);
      setIsSubmit(true);
      router.push("/");
    } catch (err) {
      toast.error(err?.response?.data?.message);
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
          mt: 1.5,
        }}
        fullWidth
        type="text"
        label="نام و نام خانوادگی"
        name="name"
        autoFocus
        {...register("name", {
          required: "نام خود را وارد کنید",
          minLength: {
            value: 3,
            message: "نام حداقل باید 3 کاراکتر باشد",
          },
          maxLength: {
            value: 50,
            message: "نام حداکثر باید 50 کاراکتر باشد",
          },
        })}
        helperText={errors.name?.message}
      />
      <TextField
        sx={{
          my: 2,
        }}
        fullWidth
        type="email"
        label="ایمیل"
        name="email"
        {...register("email", {
          required: "آدرس ایمیل خود را وارد کنید",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "فرمت ایمیل صحیح نیست",
          },
        })}
        helperText={errors.email?.message}
      />
      <TextField
        fullWidth
        sx={{
          mb: 2,
        }}
        name="password"
        label="کلمه عبور"
        type="password"
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
      <TextField
        fullWidth
        name="confirmPassword"
        label="کلمه عبور"
        type="password"
        {...register("confirmPassword", {
          required: "تکرار کلمه عبور را وارد کنید",
          minLength: {
            value: 5,
            message: "کلمه عبور حداقل باید 5 کاراکتر باشد",
          },
          maxLength: {
            value: 25,
            message: "کلمه عبور حداکثر باید 25 کاراکتر باشد",
          },
        })}
        helperText={errors.confirmPassword?.message}
      />
      <Button
        type="submit"
        aria-label="submit"
        disabled={isPending}
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
      >
        تایید
      </Button>
    </Box>
  );
};

export default ProfileTextFields;
