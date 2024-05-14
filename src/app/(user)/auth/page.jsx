"use client";
import { useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CheckOtpForm from "../../../components/auth/checkOtpForm";
import SendOtpForm from "../../../components/auth/sendOtpForm";
import { useRouter } from "next/navigation";
import { useCheckOtp, useGetOtp, useGetResendOtp } from "@/hooks/useAuth";
import LoginSectionsCard from "@/common/loginSectionsCard";

const RESEND_TIME = 60;

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(RESEND_TIME);
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: otpResponse,
    isPending,
    mutateAsync: mutateGetOtp,
  } = useGetOtp();

  const { data: otpResendResponse, mutateAsync: mutateGetResendOtp } =
    useGetResendOtp();

  const { mutateAsync: mutateCheckOtp, isPending: isPendingOtp } =
    useCheckOtp();

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const captchaHandler = (e) => {
    setCaptcha(e.target.value);
  };

  const sendOtpHandler = async () => {
    try {
      const data = await mutateGetOtp({ phoneNumber, enteredCaptcha: captcha });
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.success(data.message);
      setIsSubmit(true)
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast.error(error?.response?.data?.message);
    }
  };

  const sendResendOtpHandler = async () => {
    try {
      const data = await mutateGetResendOtp({ phoneNumber });
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
            onChangeCaptcha={captchaHandler}
            isSubmit={isSubmit}
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
            onResendOtp={sendResendOtpHandler}
            otpResponse={otpResponse || otpResendResponse}
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
