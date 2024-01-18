"use client";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CommonButton from "@/common/commonButton";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/auth/authServices";
import { includeObj } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { Box, Grid, TextField, CardContent } from "@mui/material";
import UserServicesCaptcha from "@/common/userServicesCaptcha";
import Loading from "@/common/loading";
import { useRouter } from "next/navigation";
const includesKey = [
  "name",
  "email",
  "phoneNumber",
  "biography",
  "enteredCaptcha",
];

const getLabel = (key) => {
  switch (key) {
    case "name":
      return "نام";
    case "email":
      return "ایمیل";
    case "phoneNumber":
      return "شماره موبایل";
    case "biography":
      return "بیوگرافی";
    case "enteredCaptcha":
      return "متن تصویر زیر";
    default:
      return "";
  }
};

const TabAccount = () => {
  const { data, isLoading } = useGetUser();
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });
  const router = useRouter();
  const { handleSubmit, control, setValue } = useForm();
  const { user } = data || {};

  useEffect(() => {
    if (user) {
      const initialValues = includeObj(user, includesKey);
      // Set initial form values
      Object.keys(initialValues).forEach((key) => {
        setValue(key, initialValues[key]);
      });
    }
  }, [user, setValue]);

  const onSubmit = async (formData) => {
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
      router.push("/profile");
    } catch (err) {
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.error(err?.response?.data?.message);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <CardContent
      sx={{
        mt: 3,
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} sx={{ mb: 2 }}>
          {includesKey.map((key, i) => (
            <Grid item key={i} xs={12} sm={6}>
              <Controller
                name={key}
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    label={
                      key === "name"
                        ? "نام"
                        : key === "email"
                        ? "ایمیل"
                        : key === "phoneNumber"
                        ? "شماره موبایل"
                        : key === "biography"
                        ? "بیوگرافی"
                        : key === "enteredCaptcha"
                        ? "متن تصویر زیر را وارد کنید"
                        : ""
                    }
                    {...field}
                    helperText={fieldState.error?.message}
                    error={!!fieldState.error}
                  />
                )}
                rules={{
                  ...(key === "phoneNumber" && {
                    pattern: {
                      value: /^0\d{10}$/,
                      message:
                        "شماره موبایل باید یازده رقمی باشد و با ۰ شروع شود.",
                    },
                  }),
                  ...(key === "enteredCaptcha" && {
                    required: "تایید کنید ربات نیستید",
                    minLength: {
                      value: 5,
                      message: "اعتبارسنجی باید 5 کاراکتر باشد",
                    },
                    maxLength: {
                      value: 5,
                      message: "اعتبارسنجی باید 5 کاراکتر باشد",
                    },
                  }),
                }}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <UserServicesCaptcha />
          </Grid>
          <Grid item xs={12}>
            <CommonButton
              fullWidth="fullWidth"
              isLoading={isUpdating}
              text="تایید"
              type="submit"
            />
          </Grid>
        </Grid>
      </Box>
    </CardContent>
  );
};

export default TabAccount;
