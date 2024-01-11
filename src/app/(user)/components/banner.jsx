"use client";

import { Box, Stack, Typography, Skeleton } from "@mui/material";
import Image from "next/image";
import ShopNow from "@/components/buttons/shopNow";
import { useTheme } from "@mui/material/styles";
import ContactBtn from "@/components/buttons/contactBtn";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";
import { useGetUser } from "@/hooks/useAuth";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import TypedInfoSkeleton from "./typedInfoSkeleton";

const banner = "https://cdn.workfolio.ir/images/bg/banner.png";

const Banner = () => {
  const theme = useTheme();
  const { isLoading } = useGetUser();

  const isOnlyXs = useIsOnlyXs();

  return (
    <Box
      sx={{
        "& img": {
          objectFit: "cover",
        },
      }}
    >
      <Box>
        <Image
          alt="طراحی وبسایت و خدمات وب"
          src={banner}
          placeholder="blur"
          blurDataURL={banner}
          quality={100}
          fill
          sizes="100vw"
        />
      </Box>
      <TopAbsoluteShadow />
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
          {isLoading ? (
            <Skeleton
              sx={{ borderRadius: 3 }}
              variant="rectangular"
              height={isOnlyXs ? 145 : 80}
            />
          ) : (
            <Typography
              sx={{
                lineHeight: "2rem",
                fontSize: "1rem",
                p: 1,
                borderRadius: "1rem",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#00000055" : "#ffffff65",
                [theme.breakpoints.only("xs")]: {
                  fontSize: "0.95rem",
                },
              }}
            >
              بهترین راه برای معرفی خدمات خود به کارفرمایان و شرکت‌ها، طراحی یک
              وبسایت حرفه‌ای و جذاب است. ما با بهره‌گیری از سال‌ها تجربه‌ در
              زمینه طراحی وبسایت، به شما خلاقانه‌ترین طرح‌ها را با مقرون به
              صرفه‌ترین قیمت‌ها ارائه می‌دهیم.
            </Typography>
          )}

          <Stack
            sx={{
              width: isOnlyXs ? "45%" : "inherit",
            }}
            direction={isOnlyXs ? "column" : "row"}
            spacing={2}
          >
            {isLoading ? (
              <Skeleton
                sx={{ borderRadius: 1 }}
                variant="rectangular"
                width={isOnlyXs ? "100%" : "12%"}
                height={36.5}
              />
            ) : (
              <ContactBtn />
            )}

            {isLoading ? (
              <Skeleton
                sx={{ borderRadius: 1 }}
                variant="rectangular"
                width={isOnlyXs ? "100%" : "12%"}
                height={36.5}
              />
            ) : (
              <ShopNow variant="contained" text="برو به صفحه محصولات" />
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
