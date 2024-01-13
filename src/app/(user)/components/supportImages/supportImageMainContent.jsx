"use client";
import { useTheme } from "@mui/material/styles";

import { Grid, Typography, Stack, Box } from "@mui/material";
import Image from "next/image";

const SupportImagesMainContent = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      component="section"
      spacing={2}
      sx={{
        mt: 3,
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          objectFit: "cover",
        },
        [theme.breakpoints.between("xs", "md")]: {
          "& img": {
            objectFit: "cover",
            width: 1,
            height: "auto",
          },
        },
      }}
    >
      <Grid item xs={12} md={6}>

          <Stack alignItems="center">
            <Typography
              variant="h4"
              noWrap
              sx={{
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
            <Box>
              <Image
              priority
                src="https://cdn.workfolio.ir/images/bg/ask.png"
                alt="خدمات به مشتری"
                width={425}
                height={425}
              />
            </Box>
          </Stack>

      </Grid>

      <Grid item xs={12} md={6}>

          <Stack alignItems="center">
            <Typography
              variant="h4"
              noWrap
              sx={{
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
            <Box>
              <Image
              priority
                src="https://cdn.workfolio.ir/images/bg/iso.png"
                alt="گواهینامه ایزو"
                width={425}
                height={425}
              />
            </Box>
          </Stack>

      </Grid>
    </Grid>
  );
};

export default SupportImagesMainContent;
