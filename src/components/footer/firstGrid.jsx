import { Typography } from "@mui/material";
import FooterGridLayout from "./footerLayout";

const FirstGrid = () => {
  return (
    <FooterGridLayout title="تعهد ما">
      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.9rem",
          textAlign: "justify",
        }}
      >
        با خدمات ورکفولیو، دنیای تخصص و تجربه به روی شما باز می‌شود. ما با
        افتخار با شما همراه می‌شویم تا تخصص و تجربه‌ی خود را به نمایش بگذارید و
        با بزرگترین شرکت‌ها و بهترین کارفرمایان در ارتباط باشید. با تیم تخصصی
        ورکفولیو ایجاد یک وبسایت حرفه‌ای و جذاب برای شما آسانتر از همیشه است.
      </Typography>
    </FooterGridLayout>
  );
};

export default FirstGrid;
