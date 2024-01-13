"use client";
import Logo from "@/common/logo";
import { Box, Container, Typography } from "@mui/material";
import ProfileTextFields from "./components/profileTextFields";
import LoginSectionsCard from "@/common/loginSectionsCard";

const CompleteProfile = () => {
  return (
    <LoginSectionsCard title="تکمیل مشخصات کاربری">
      <ProfileTextFields />
    </LoginSectionsCard>
  );
};

export default CompleteProfile;
