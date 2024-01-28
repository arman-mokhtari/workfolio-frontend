import Link from "next/link";
import "./globals.css";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function NotFound() {
  const srcImg = "https://cdn.workfolio.ir/images/svg/errors/404.svg";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        px: 2,
        pt: 2,
        "& img": {
          objectFit: "cover",
          width: "55% !important",
          height: "auto !important",
        },
        "& a": {
          fontFamily:"shabnam",
        },
      }}
    >
      <Image
        priority
        alt="خطا از سمت سرور"
        placeholder="blur"
        blurDataURL={srcImg}
        width={200}
        height={200}
        src={srcImg}
      />
      <Typography
        sx={{
          fontSize: "1.3rem",
          fontFamily:"shabnam",
          fontWeight: "900",
          mt: 4,
        }}
      >
        اوه! به نظر میاد که یه جایی گم شدیم...
      </Typography>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "700",
            fontFamily:"shabnam",
            my: 2,
          }}
        >
          اما جای هیچ نگرانی نیست! آینده روشنه و ما در حال بهتر شدن هستیم.
        </Typography>
      </Box>
      <Button
        variant="contained"
        role="link"
        href="/"
        aria-label="بازگشت"
        component={Link}
      >
        همین حالا به خانه برگرد!
      </Button>
    </Box>
  );
}
