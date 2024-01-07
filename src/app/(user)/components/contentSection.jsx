"use client";

import { useTheme } from "@mui/material/styles";

import Fade from "react-reveal/Fade";
import { Box, Typography } from "@mui/material";

const Content = () => {
  const theme = useTheme();

  return (
    <Fade bottom cascade>
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            [theme.breakpoints.only("xs")]: {
              fontSize: "1rem",
            },
            [theme.breakpoints.only("sm")]: {
              fontSize: "1.2rem",
            },
          }}
        >
          راهکارهای ما برای بهتر و بیشتر دیده شدن شما چیست؟
        </Typography>
        <Typography
          sx={{
            marginTop: 4,
            textAlign: "center",
            [theme.breakpoints.only("xs")]: {
              fontSize: "0.92rem",
            },
            [theme.breakpoints.only("sm")]: {
              fontSize: "0.95rem",
            },
          }}
        >
          ارائه سرویس وبسایت پرتفولیو به شما این امکان را می‌دهد تا به عنوان یک
          حرفه‌ایِ معتبر بهتر دیده شوید، همچنین این امکان را فراهم می‌آورد تا به
          جذاب‌ترین شکل ممکن مهارت‌های حرفه‌ای، پروژه‌های قبلی و تجربیات کاری
          خود را با کارفرمایان و شرکت‌های بزرگ به اشتراک بگذارید.
        </Typography>
      </Box>
    </Fade>
  );
};

export default Content;
