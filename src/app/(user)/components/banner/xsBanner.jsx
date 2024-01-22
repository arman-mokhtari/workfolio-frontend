"use client";

import { Box, Skeleton, Grid } from "@mui/material";
import Image from "next/image";
import ShopNow from "@/components/buttons/shopNow";
import ContactBtn from "@/components/buttons/contactBtn";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";

const banner = "https://cdn.workfolio.ir/images/bg/xs-banner.png";

const XsBanner = ({ isLoading }) => {
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
      <TopAbsoluteShadow height="12%" />
      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 64px)",
          flexDirection: "column",
          justifyContent: "space-around",
          mb: 1,
        }}
      >
        <Box
          sx={{
            px: 2,
            zIndex: 3,
            width: 1,
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Grid container spacing={2}>
            <Grid xs={12} md={2} item>
              {isLoading ? (
                <Skeleton
                  sx={{ borderRadius: 1 }}
                  variant="rectangular"
                  width={"30%"}
                  height={36.5}
                />
              ) : (
                <ContactBtn />
              )}
            </Grid>
            <Grid xs={12} md={2} item>
              {isLoading ? (
                <Skeleton
                  sx={{ borderRadius: 1 }}
                  variant="rectangular"
                  width={"35%"}
                  height={36.5}
                />
              ) : (
                <ShopNow variant="contained" text="برو به صفحه محصولات" />
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default XsBanner;
