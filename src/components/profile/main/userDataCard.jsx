"use client";

import { Button, Card, CardContent, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { toLocalDateString } from "@/utils/toLocalDate";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Image from "next/image"

// Styled component for the triangle shaped background image
const TriangleImg = styled(Image)({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

// Styled component for the trophy image
const TrophyImg = styled(Image)({
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
  const splitName = name?.split(" ")[0];

  return (
    <Card sx={{ position: "relative",minHeight:"183.92px" }}>
      <CardContent>
        <Typography variant="h6">خوش آمدید {splitName} عزیز 🥳</Typography>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: "0.25px",
            position: "relative",
            zIndex: 100,
            mt: 2,
          }}
        >
          تاریخ پیوستن : {toLocalDateString(createdAt)}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          ایمیل : {email}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          شماره موبایل : {toPersianNumbers(phoneNumber)}
        </Typography>

        <TriangleImg
          alt="triangle background"
          priority
          placeholder="blur"
          blurDataURL={`/images/misc/${imageSrc}`}
          src={`/images/misc/${imageSrc}`}
          width={150}
          height={100}
          quality={100}
        />
        <TrophyImg
          alt="trophy"
          src="/images/misc/trophy.png"
          placeholder="blur"
          blurDataURL="/images/misc/trophy.png"
          priority
          quality={100}
          width={80}
          height={80}
        />
      </CardContent>
    </Card>
  );
};

export default UserDataCard;
