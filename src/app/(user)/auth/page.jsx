"use client";
import { useEffect, useState } from "react";

import { Box, Container, Typography } from "@mui/material";
import Logo from "@/common/logo";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CheckOtpForm from "./checkOtpForm";
import SendOtpForm from "./sendOtpForm";
import { useRouter } from "next/navigation";
import { useCheckOtp, useGetOtp } from "@/hooks/useAuth";
import LoginSectionsCard from "@/common/loginSectionsCard";

const RESEND_TIME = 60;

const SignIn = () => {
  const queryClient = useQueryClient();

  const {
    data: otpResponse,
    isPending,
    mutateAsync: mutateGetOtp,
  } = useGetOtp();

  const { mutateAsync: mutateCheckOtp, isPending: isPendingOtp } =
    useCheckOtp();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");

  const [time, setTime] = useState(RESEND_TIME);

  const router = useRouter();

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (data) => {
    const { phoneNumber, enteredCaptcha } = data;
    try {
      const data = await mutateGetOtp({ phoneNumber, enteredCaptcha });
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.error(error?.response?.data?.message);
    }
  };

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            value={phoneNumber}
            onChange={phoneNumberHandler}
            isPending={isPending}
            sendOtpHandler={sendOtpHandler}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            setOtp={setOtp}
            otp={otp}
            onSubmit={checkOtpHandler}
            goBack={() => setStep((s) => s - 1)}
            time={time}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            isPending={isPendingOtp}
          />
        );
      default:
        return null;
    }
  };

  return (
   <LoginSectionsCard title="ثبت نام">
      {renderSteps()}
   </LoginSectionsCard>
      

  );
};
export default SignIn;
