"use client";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, Link, Typography } from "@mui/material";

const AboutUsDescription = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "1.4rem",
          fontWeight: "bold",
          [theme.breakpoints.only("xs")]: {
            fontSize: "1.1rem",
            mt: 1,
          },
          [theme.breakpoints.only("sm")]: {
            fontSize: "1.2rem",
            mt: 2,
          },
        }}
      >
        ورکفولیو: همراه شما در طراحی و توسعه وب
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          [theme.breakpoints.only("xs")]: {
            fontSize: "0.9rem",
          },
          [theme.breakpoints.only("sm")]: {
            fontSize: "1rem",
          },
          color: "#037fff",
          my: 3,
        }}
      >
        باورها و آرمان‌ها، پیشرانه‌های قوی در پیشرفت هر شرکتی هستند.
      </Typography>
      <Typography component="div">
        <Typography>
          در ورکفولیو، تیمی از توانمندترین و مجرب‌ترین متخصصین در زمینه طراحی و
          توسعه وب به همراه مدیریت{" "}
          <Link
            aria-label="وبسایت شخصی"
            role="link"
             
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://armanmokhtari.ir"
          >
            آرمان مختاری
          </Link>
          ، مشتاقانه در کنار هم می‌کوشیم تا بهترین وبسایت‌ها و برنامه‌های وب را
          برای شما ایجاد کنیم.
        </Typography>

        <Typography
          sx={{
            my: 2,
          }}
        >
          تیم ورکفولیو، با تخصص‌های متنوع و تجربه‌های بیشمار در زمینه طراحی رابط
          کاربری (UI) و توسعه نرم‌افزار (Front-end و Back-end)، مجموعه‌ای است از
          تجربه و دانشی عمیق در بالاترین سطوح توسعه اپلیکیشن‌های جاوا اسکریپتی.
          ما در ورکفولیو به ارائه راه‌حل‌های شگفت‌انگیز و نوآورانه برای
          مشتریانمان اعتقاد داریم و در این راستا، از آخرین تکنولوژی‌ها و روش‌های
          توسعه مدرن بهره می‌بریم.
        </Typography>
        <Typography>
          با ما همراه باشید و تجربه‌ای منحصربه‌فرد از توانمندی‌های ورکفولیو در
          طراحی و توسعه وب را تجربه کنید.
        </Typography>
      </Typography>
    </Box>
  );
};

export default AboutUsDescription;
