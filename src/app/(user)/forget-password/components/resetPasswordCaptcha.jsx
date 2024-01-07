"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useGetResetPasswordCaptcha } from "@/hooks/useResetPassword";
import Loading from "@/common/loading";

const ResetPasswordCaptcha = () => {
  const { data, isLoading } = useGetResetPasswordCaptcha();
  const { data: captchaData } = data || {};
  return (
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
  );
};

export default ResetPasswordCaptcha;
