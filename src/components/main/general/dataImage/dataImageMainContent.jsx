import { Typography, CardContent, Grid, Box } from "@mui/material";
import Image from "next/image";
import HoverCard from "@/common/hoverCard";

const DataImageMainContent = () => {

  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <HoverCard
        defaultElevation={4}
        hoveredElevation={10}
        component="section"
        sx={{
          borderRadius: 3,
        }}
      >
        <Grid
          sx={{
            "& img": {
              objectFit: "cover",
              width: "100% !important",
              height: "100% !important",
            },
            "& .content-image": {
              objectFit: "contain",
            },
          }}
          container
        >
          <Grid item xs={12} md={6}>
            <Image
              height="500"
              width="500"
              priority
              alt="رشد کسب و کار"
              title="بهترین روش‌ها برای رشد کسب و کار شما"
              placeholder="blur"
              blurDataURL="/images/ads/web_design_3.webp"
              src="/images/ads/web_design_3.webp"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
                gutterBottom
              >
                خدمات ورکفولیو
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                }}
              >
                تیم حرفه‌ای ورکفولیو با ارائه پیشرفته‌ترین سرویس‌ها به شما این
                امکان را می‌دهد تا به عنوان یک حرفه‌ایِ معتبر بهتر دیده شوید،
                همچنین این امکان را فراهم می‌آورد تا به جذاب‌ترین شکل ممکن
                مهارت‌های حرفه‌ای، پروژه‌های اجرا شده و تجربیات کاری خود را با
                مخاطبان خود به اشتراک بگذارید.
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  pb: 3,
                  height: "230px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <Image
                  className="content-image"
                  priority
                  alt="پرتفولیو"
                  placeholder="blur"
                  blurDataURL="/assets/bg/web-portfolio.webp"
                  src="/assets/bg/web-portfolio.webp"
                  width="423"
                  height="220"
                />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </HoverCard>
    </Box>
  );
};

export default DataImageMainContent;
