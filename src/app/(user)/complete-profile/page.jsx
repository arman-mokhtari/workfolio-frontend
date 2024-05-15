"use client";

import ProfileTextFields from "../../../components/main/profileComplete/profileTextFields";
import LoginSectionsCard from "@/common/loginSectionsCard";

const CompleteProfile = () => {
  return (
    <LoginSectionsCard title="تکمیل مشخصات کاربری">
      <ProfileTextFields />
    </LoginSectionsCard>
  );
};

export default CompleteProfile;
