"use client";
import { Grid, Box } from "@mui/material";
import AboutUsDescription from "./components/description";
import Image from "next/image";
import { useIsDownMd } from "@/hooks/useMediaQueries";
const Page = () => {

  const isSmallScreen = useIsDownMd();
  const srcImg = "https://cdn.workfolio.ir/images/bg/banner-service.jpg";
  return (
    <Box
      sx={{
        height: !isSmallScreen && "calc(100vh - 128px)",
        display: "flex",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          px: 3,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid xs={12} md={6} item>
          <AboutUsDescription />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: isSmallScreen && -1,
            "& img": {
              boxShadow: "10px 10px 0px 0px #0381ff4f",
              borderRadius: 1,
              width: "100%",
              height: "auto",
            },
          }}
        >
          <Image
            priority
            alt="خدمات ورکفولیو"
            title="خدمات ورکفولیو"
            width="600"
            height="400"
            placeholder="blur"
            blurDataURL={srcImg}
            src={srcImg}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
