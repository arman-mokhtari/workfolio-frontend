"use client";

import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { CardContent, TextField, Button, Card, Box } from "@mui/material";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Loading from "@/common/loading";
import {
  useGetContactUsCaptcha,
  useSendContactUsEmail,
} from "@/hooks/useSendContactUsEmail";
import { useQueryClient } from "@tanstack/react-query";

const ContactUsForm = () => {
  const theme = useTheme();

  const { isLoading, data } = useGetContactUsCaptcha();

  const { data: captchaData } = data || {};
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useSendContactUsEmail();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      enteredCaptcha: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        enteredCaptcha: "",
      });
    }
  }, [formState, reset]);

  const submitHandler = async ({
    email,
    message,
    name,
    phoneNumber,
    enteredCaptcha,
  }) => {
    try {
      const { message: msg } = await mutateAsync({
        email,
        message,
        name,
        phoneNumber,
        enteredCaptcha,
      });
      queryClient.invalidateQueries({
        queryKey: ["get-contact-captcha"],
      });
      toast.success(msg, {
        duration: 5000,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";
      queryClient.invalidateQueries({
        queryKey: ["get-contact-captcha"],
      });
      toast.error(errorMessage);
    }
  };

  return (
    <Box
      sx={{
        px: 3,
        zIndex:4
      }}
    >
      <Card
        sx={{
          backgroundImage: "none",
          boxShadow: "#0000003d 0px 3px 8px",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0,0,0,0.7)"
              : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(5px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box component="form" onSubmit={handleSubmit(submitHandler)}>
          <CardContent>
            <Box
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
                alignItems: "center",
              }}
            >
              <TextField
                sx={{
                  my: 0.75,
                }}
                fullWidth
                size="small"
                name="name"
                label="نام و نام خانوادگی"
                type="text"
                {...register("name", {
                  required: "نام و نام خانوادگی خود را وارد کنید",
                  maxLength: 80,
                })}
                helperText={errors.name?.message}
              />

              <TextField
                type="email"
                name="email"
                {...register("email", {
                  required: "آدرس ایمیل خود را وارد کنید",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "فرمت ایمیل صحیح نیست",
                  },
                })}
                fullWidth
                size="small"
                sx={{
                  color: "#037fff",
                  my: 0.75,
                }}
                label="ایمیل"
                helperText={errors.email?.message}
              />
              <TextField
                sx={{
                  my: 0.75,
                }}
                fullWidth
                size="small"
                type="tel"
                label="شماره موبایل"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: "شماره موبایل خود را وارد کنید",
                  pattern: {
                    value: /^0\d{10}$/,
                    message: "شماره موبایل باید 11 رقم و با 0 شروع شود",
                  },
                })}
                helperText={errors.phoneNumber?.message}
              />

              <TextField
                {...register("message", {
                  required: "متن پیام خود را وارد کنید",
                })}
                fullWidth
                multiline
                rows={5}
                size="small"
                name="message"
                sx={{
                  color: "#037fff",
                  mt: 0.75,
                }}
                label="متن پیام"
                helperText={errors.message?.message}
              />

              <Box
                sx={{
                  padding: 0.3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
                        src={`data:image/svg+xml;base64,${btoa(captchaData)}`}
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
                    width: "250px",
                  }}
                  size="small"
                  name="enteredCaptcha"
                  label="اعتبارسنجی"
                  type="text"
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                disabled={isPending}
                fullWidth
                sx={{
                  backgroundColor: "#037fff",
                  color: "text.primary",
                  mt: 1,
                }}
              >
                {isPending ? "در حال ارسال پیام..." : "ارسال"}
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ContactUsForm;
