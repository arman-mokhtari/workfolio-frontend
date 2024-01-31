import Link from "next/link";
import "./globals.css";
import { Box, Typography, Button, Stack } from "@mui/material";
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
          height: "auto !important",
          overflow: "hidden",
        },
        "& a": {
          fontFamily: "shabnam",
        },
      }}
    >
      <Image
        className="not-found-img"
        priority
        alt="خطا از سمت سرور"
        placeholder="blur"
        blurDataURL={srcImg}
        width={200}
        height={200}
        src={srcImg}
      />

      <Stack
        alignItems="center"
        textAlign="center"
        spacing={1.5}
        sx={{
          my: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontFamily: "shabnam",
            fontWeight: "900",
          }}
        >
          به نظر میاد یه جایی گم شدیم...
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "700",
            fontFamily: "shabnam",
          }}
        >
          متاسفانه صفحه مورد نظر شما پیدا نشد!
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "700",
            fontFamily: "shabnam",
          }}
        >
          اما جای هیچ نگرانی نیست! آینده روشنه و ما در حال بهتر شدن هستیم.
        </Typography>
      </Stack>
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
