"use client";
import { useTheme } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import AboutUsDescription from "./components/description";
import Image from "next/image";
import { useIsDownLg, useIsDownMd, useIsOnlyXs } from "@/hooks/useMediaQueries";
const Page = () => {
  const theme = useTheme();
  const isSmallScreen = useIsDownMd();
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
            src="https://cdn.workfolio.ir/images/bg/banner-service.jpg"
            alt="خدمات ورکفولیو"
            title="خدمات ورکفولیو"
            width="600"
            height="400"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
