"use client";
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "@/common/loading";
import { useChangeUserPassword, useGetUser } from "@/hooks/useAuth";
import UserServicesCaptcha from "@/common/userServicesCaptcha";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const TabSecurity = () => {
  const [values, setValues] = useState({
    showNewPassword: false,
    showCurrentPassword: false,
    showConfirmNewPassword: false,
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const isSmallScreen = useIsOnlyXs();

  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword });
  };

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };

  const handleClickShowConfirmNewPassword = () => {
    setValues({
      ...values,
      showConfirmNewPassword: !values.showConfirmNewPassword,
    });
  };
  const { data, isLoading: isLoadingUser } = useGetUser();
  const { user } = data || {};
  const { isLoading, mutateAsync } = useChangeUserPassword();
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const submitHandler = async ({
    currentPassword,
    newPassword,
    confirmNewPassword,
    enteredCaptcha,
  }) => {
    try {
      const { message } = await mutateAsync({
        userId: user._id,
        data: {
          currentPassword,
          newPassword,
          confirmNewPassword,
          enteredCaptcha,
        },
      });
      toast.success(message);
      setIsSubmit(true);
      router.push("/profile");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.error(errorMessage);
    }
  };
  const srcImg = "https://cdn.workfolio.ir/images/misc/pose-m-1.png";
  return (
    <Box onSubmit={handleSubmit(submitHandler)} component="form">
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <FormControl fullWidth>
                  <InputLabel>کلمه عبور فعلی</InputLabel>
                  <OutlinedInput
                    label="کلمه عبور فعلی"
                    type={values.showCurrentPassword ? "text" : "password"}
                    {...register("currentPassword", {
                      required: "کلمه عبور فعلی را وارد کنید",
                      minLength: {
                        value: 5,
                        message: "کلمه عبور فعلی حداقل باید 5 کاراکتر باشد",
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
                          onClick={handleClickShowCurrentPassword}
                        >
                          {values.showCurrentPassword ? (
                            <RemoveRedEyeOutlined />
                          ) : (
                            <VisibilityOffOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText error>
                    {errors.currentPassword?.message}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 3 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="account-settings-new-password">
                    کلمه عبور جدید
                  </InputLabel>
                  <OutlinedInput
                    label="کلمه عبور جدید"
                    id="account-settings-new-password"
                    type={values.showNewPassword ? "text" : "password"}
                    {...register("newPassword", {
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
                  <FormHelperText error>
                    {errors.newPassword?.message}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>تکرار کلمه عبور جدید</InputLabel>
                  <OutlinedInput
                    label="تکرار کلمه عبور جدید"
                    type={values.showConfirmNewPassword ? "text" : "password"}
                    {...register("confirmNewPassword", {
                      required: "تکرار کلمه عبور جدید را وارد کنید",
                      minLength: {
                        value: 5,
                        message:
                          "تکرار کلمه عبور جدید حداقل باید 5 کاراکتر باشد",
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
                  <FormHelperText error>
                    {errors.confirmNewPassword?.message}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>متن تصویر را وارد کنید</InputLabel>
                  <OutlinedInput
                    label="متن تصویر را وارد کنید"
                    type="text"
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
                  />
                  <FormHelperText error>
                    {errors.enteredCaptcha?.message}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <UserServicesCaptcha />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!isSmallScreen && (
              <Image
                priority
                width={183}
                alt="avatar"
                height={256}
                placeholder="blur"
                blurDataURL={srcImg}
                src={srcImg}
              />
            )}
          </Grid>
        </Grid>
        <Box>
          {isLoading ? (
            <Loading mt={1} size={30} />
          ) : (
            <Button
              type="submit"
              aria-label="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              تایید
            </Button>
          )}
        </Box>
      </CardContent>
    </Box>
  );
};

export default TabSecurity;
