"use client";
import { useGetUserCaptcha } from "@/hooks/useAuth";
import Loading from "./loading";
import { Box } from "@mui/material";
import Image from "next/image";

const UserServicesCaptcha = () => {
  const { data, isLoading } = useGetUserCaptcha();
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

export default UserServicesCaptcha;
