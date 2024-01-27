"use client";
import { Typography, CardContent, Grid, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import HoverCard from "@/common/hoverCard";
import { useGetUser } from "@/hooks/useAuth";

const DataImageMainContent = () => {
  const { isLoading } = useGetUser();
  const webDesignSrc = "https://cdn.workfolio.ir/images/home/web_design_3.png";
  const webPortfolioSrc =
    "https://cdn.workfolio.ir/images/bg/web-portfolio.png";
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
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{ pt: "67.5%" }}
              />
            ) : (
              <Image
                height="500"
                width="500"
                priority
                alt="رشد کسب و کار"
                title="بهترین روش‌ها برای رشد کسب و کار شما"
                placeholder="blur"
                blurDataURL={webDesignSrc}
                src={webDesignSrc}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{ pt: "45.5%" }}
              />
            ) : (
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
                    blurDataURL={webPortfolioSrc}
                    src={webPortfolioSrc}
                    width="423"
                    height="220"
                  />
                </Box>
              </CardContent>
            )}
          </Grid>
        </Grid>
      </HoverCard>
    </Box>
  );
};

export default DataImageMainContent;
