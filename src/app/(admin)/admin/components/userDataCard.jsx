"use client";

import { Button, Card, CardContent, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { toLocalDateString } from "@/utils/toLocalDate";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import HoverCard from "@/common/hoverCard";
// Styled component for the triangle shaped background image
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

// Styled component for the trophy image
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const UserDataCard = ({ user }) => {
  const { name, email, createdAt, phoneNumber } = user;

  // ** Hook
  const theme = useTheme();
  const imageSrc =
    theme.palette.mode === "light" ? "triangle-light.png" : "triangle-dark.png";

  return (
    <HoverCard
      sx={{
        width: 1,
        minHeight: "183.92px",
        position: "relative",
      }}
      defaultElevation={4}
      hoveredElevation={10}
    >
      <CardContent>
        <Typography variant="h6">خوش آمدید ادمین عزیز، {name} </Typography>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: "0.25px",
            position: "relative",
            zIndex: 100,
            mt: 2,
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

        <TriangleImg
          alt="triangle background"
          src={`/images/misc/${imageSrc}`}
        />
        <TrophyImg alt="trophy" src="/images/misc/trophy.png" />
      </CardContent>
    </HoverCard>
  );
};

export default UserDataCard;
