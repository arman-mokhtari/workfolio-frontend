"use client";
import { useTheme } from "@mui/material/styles";
import Fade from "react-reveal/Fade";

import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const SupportImages = () => {
  const theme = useTheme();
  return (
    <Grid
    spacing={2}
      sx={{
        mt:3,
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.only("xs")]: {
          "& img": {
            objectPosition: "center",
            objectFit: "cover",
            width: "100% !important",
            height: "auto !important",
          },
        },
      }}
      container
      component="section"
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          width: "550px",
          flexDirection: "column",
        }}
        xs={11}
        md={6}
      >
        <Fade right>
          <Typography
            variant="h4"
            sx={{
              whiteSpace: "nowrap",
              mb: 2,
              fontSize: "1.6rem",
              fontWeight: "bold",
              [theme.breakpoints.only("xs")]: {
                fontSize: "1.2rem",
              },
              [theme.breakpoints.only("sm")]: {
                fontSize: "1.4rem",
              },
            }}
          >
            حمایت هفت روز هفته
          </Typography>
          <Image
            src="/assets/bg/ask.png"
            alt="خدمات به مشتری"
            width="400"
            height="400"
          />
        </Fade>
      </Grid>
      
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          width: "550px",
          flexDirection: "column",
        }}
        xs={12}
        md={6}
      >
        <Fade left>
          <Typography
            variant="h4"
            sx={{
              whiteSpace: "nowrap",
              fontSize: "1.6rem",
              fontWeight: "bold",
              [theme.breakpoints.only("xs")]: {
                fontSize: "1.2rem",
              },
              [theme.breakpoints.only("sm")]: {
                fontSize: "1.4rem",
              },
            }}
          >
            گواهینامه ایزو 27001
          </Typography>
          <Image
            src="/assets/bg/iso.png"
            alt="گواهینامه ایزو"
            width="430"
            height="430"
          />
        </Fade>
      </Grid>
    </Grid>
  );
};

export default SupportImages;
