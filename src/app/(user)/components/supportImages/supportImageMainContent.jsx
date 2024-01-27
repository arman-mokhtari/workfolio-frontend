"use client";
import { useTheme } from "@mui/material/styles";

import { Grid, Typography, Stack, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import { useGetUser } from "@/hooks/useAuth";

const SupportImagesMainContent = () => {
  const theme = useTheme();
  const { isLoading } = useGetUser();
  const srcAsk = "https://cdn.workfolio.ir/images/bg/ask.png";
  const srcIso = "https://cdn.workfolio.ir/images/bg/iso.png";
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
            width: 1,
            height: "auto",
          },
        },
      }}
    >
      <Grid item xs={12} sm={6}>
        <Stack alignItems="center">
          <Typography
            variant="h3"
            noWrap
            sx={{
              mb: 2,
              fontSize: "1.6rem",
              fontWeight: "900",
              [theme.breakpoints.down("md")]: {
                fontSize: "1.3rem",
              },
            }}
          >
            حمایت هفت روز هفته
          </Typography>
          <Box>
            <Image
              priority
              alt="خدمات به مشتری"
              width={425}
              height={425}
              placeholder="blur"
              blurDataURL={srcAsk}
              src={srcAsk}
            />
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Stack alignItems="center">
          <Typography
            variant="h3"
            noWrap
            sx={{
              fontSize: "1.6rem",
              fontWeight: "900",
              [theme.breakpoints.down("md")]: {
                fontSize: "1.3rem",
              },
            }}
          >
            گواهینامه ایزو 27001
          </Typography>
          <Box>
            <Image
              priority
              alt="گواهینامه ایزو"
              width={425}
              height={425}
              placeholder="blur"
              blurDataURL={srcIso}
              src={srcIso}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SupportImagesMainContent;
