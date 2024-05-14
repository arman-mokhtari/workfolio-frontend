"use client";

import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import ShopNow from "@/common/buttons/shopNow";
import { useTheme } from "@mui/material/styles";
import ContactBtn from "@/common/buttons/contactBtn";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";
import TypedInfoSkeleton from "./typedInfoSkeleton";

const banner = "https://cdn.workfolio.ir/images/bg/banner.png";

const UpXsBanner = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          "& img": {
            objectFit: "cover",
          },
        }}
      >
        <Image
          alt="طراحی وبسایت و خدمات وب"
          src={banner}
          placeholder="blur"
          blurDataURL={banner}
          quality={100}
          priority
          fill
          sizes="100vw"
        />
      </Box>
      <TopAbsoluteShadow height="70%" />
      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 64px)",
          flexDirection: "column",
          justifyContent: "space-around",
          mb: 3,
        }}
      >
        <TypedInfoSkeleton />

        <Box
          sx={{
            px: 2,
            zIndex: 3,
            width: 1,
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography
              sx={{
                lineHeight: 2,
                fontSize: 15,
                p: 1,
                borderRadius: 4,
                backdropFilter: "blur(3px)",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#00000055" : "#ffffff65",
              }}
            >
              بهترین راه برای معرفی خدمات خود به کارفرمایان و شرکت‌ها، طراحی یک
              وبسایت حرفه‌ای و جذاب است. ما با بهره‌گیری از سال‌ها تجربه‌ در
              زمینه طراحی وبسایت، به شما خلاقانه‌ترین طرح‌ها را با مقرون به
              صرفه‌ترین قیمت‌ها ارائه می‌دهیم.
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <ContactBtn />
            <ShopNow variant="contained" text="برو به صفحه محصولات" />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default UpXsBanner;
