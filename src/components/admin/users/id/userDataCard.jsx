"use client";

import { Paper, CardContent, Typography } from "@mui/material";
import { toLocalDateString } from "@/utils/toLocalDate";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useState } from "react";
import HoverCard from "@/common/hoverCard";
// Styled component for the triangle shaped background image

const UserDataCard = ({ user }) => {
  const { name, email, createdAt, phoneNumber, role, biography } = user;

  // ** Hook

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        position: "relative",
      }}
    >
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: "0.25px",
            position: "relative",
            zIndex: 100,
            mt: 1.5,
          }}
        >
          نام کاربر: {name}{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: "0.25px",
            position: "relative",
            zIndex: 100,
            mt: 1.5,
          }}
        >
          نقش کاربر: {role === "ADMIN" ? "ادمین" : "کاربر ساده"}{" "}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          شغل : {biography}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: "0.25px",
            position: "relative",
            zIndex: 100,
            mt: 1.5,
          }}
        >
          تاریخ پیوستن به ورکفولیو : {toLocalDateString(createdAt)}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          ایمیل : {email}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          شماره موبایل : {toPersianNumbers(phoneNumber)}
        </Typography>
      </CardContent>
    </HoverCard>
  );
};

export default UserDataCard;
