import { Grid, Typography, Stack, Box } from "@mui/material";
import Image from "next/image";

const SupportImagesMainContent = () => {

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
      }}
    >
      <Grid item xs={12} sm={6}>
        <Stack alignItems="center">
          <Typography
            variant="h3"
            noWrap
            sx={{
              mb: 2,
              fontSize: "1.45rem",
              fontWeight: "900",
            }}
          >
            حمایت هفت روز هفته
          </Typography>
          <Box>
            <Image
              className="support-img"
              priority
              alt="خدمات به مشتری"
              width={425}
              height={425}
              placeholder="blur"
              blurDataURL="/assets/bg/ask.webp"
              src="/assets/bg/ask.webp"
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
              fontSize: "1.45rem",
              fontWeight: "900",
            }}
          >
            گواهینامه ایزو 27001
          </Typography>
          <Box>
            <Image
              className="support-img"
              priority
              alt="گواهینامه ایزو"
              width={425}
              height={425}
              placeholder="blur"
              blurDataURL="/assets/bg/iso.webp"
              src="/assets/bg/iso.webp"
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SupportImagesMainContent;
