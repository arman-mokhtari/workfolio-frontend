import { Box, Typography } from "@mui/material";

const ContentMain = () => {
  return (
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
          fontSize: "1.3rem",
          fontWeight: "900",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        راهکارهای ما برای بهتر و بیشتر دیده شدن شما چیست؟
      </Typography>

      <Box
        sx={{
          marginTop: 3,
          textAlign: "center",
          width: 1,
        }}
      >
        <Typography>
          ارائه سرویس وبسایت پرتفولیو به شما این امکان را می‌دهد تا به عنوان یک
          حرفه‌ایِ معتبر بهتر دیده شوید، همچنین این امکان را فراهم می‌آورد تا به
          جذاب‌ترین شکل ممکن مهارت‌های حرفه‌ای، پروژه‌های قبلی و تجربیات کاری
          خود را با کارفرمایان و شرکت‌های بزرگ به اشتراک بگذارید.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentMain;
