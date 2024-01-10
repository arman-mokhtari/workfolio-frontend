"use client";

import { Box, Grid, Typography } from "@mui/material";

import ShopNow from "@/components/buttons/shopNow";
import { useTheme } from "@mui/material/styles";
import ContactBtn from "@/components/buttons/contactBtn";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";

const banner = "https://cdn.workfolio.ir/images/bg/banner.png";

const Banner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "545px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "660px",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          width: "100%",
        }}
      >
        <TopAbsoluteShadow />
        <Box
          sx={{
            position: "absolute",
            [theme.breakpoints.between("xs", "md")]: {
              top: "18rem",
            },
            top: "20rem",
            mx: 3,
            zIndex: 3,
          }}
        >
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
            وبسایت حرفه‌ای و جذاب است. ما با بهره‌گیری از سال‌ها تجربه‌ در زمینه
            طراحی وبسایت، به شما خلاقانه‌ترین طرح‌ها را با مقرون به صرفه‌ترین
            قیمت‌ها ارائه می‌دهیم.
          </Typography>
          <Grid
            container
            spacing={3}
            xs={12}
            md={6}
            lg={5}
            sx={{
              mt: 0.5,
              display: "flex",
            }}
          >
            <Grid xs={12} md={6} item>
              <ContactBtn />
            </Grid>
            <Grid xs={12} md={6} item>
              <ShopNow variant="contained" text="برو به صفحه محصولات" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
