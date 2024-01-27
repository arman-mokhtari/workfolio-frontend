"use client";

import { useTheme } from "@mui/material/styles";

import { Box, Typography, Skeleton, Stack } from "@mui/material";
import { useGetUser } from "@/hooks/useAuth";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const ContentMain = () => {
  const theme = useTheme();
  const isXs = useIsOnlyXs();
  const { isLoading } = useGetUser();
  const modifiedNum = isXs ? 4 : 1;
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
      {isLoading ? (
        <Skeleton
          variant="text"
          width="80%"
          sx={{
            fontSize: "1.6rem",
            [theme.breakpoints.down("md")]: {
              fontSize: "1.2rem",
            },
          }}
        />
      ) : (
        <Typography
          variant="h2"
          sx={{
            fontSize: "1.6rem",
            fontWeight: "900",
            textAlign: "center",
            lineHeight: 1.5,
            [theme.breakpoints.down("md")]: {
              fontSize: "1.2rem",
            },
          }}
        >
          راهکارهای ما برای بهتر و بیشتر دیده شدن شما چیست؟
        </Typography>
      )}

      <Box
        sx={{
          marginTop: 4,
          textAlign: "center",
          width: 1,
        }}
      >
        {isLoading ? (
          <Stack alignItems="center">
            {Array.from({ length: modifiedNum }, (_, i) => (
              <Skeleton key={i} variant="text" width="100%" />
            ))}

            <Skeleton variant="text" width="40%" />
          </Stack>
        ) : (
          <Typography>
            ارائه سرویس وبسایت پرتفولیو به شما این امکان را می‌دهد تا به عنوان
            یک حرفه‌ایِ معتبر بهتر دیده شوید، همچنین این امکان را فراهم می‌آورد
            تا به جذاب‌ترین شکل ممکن مهارت‌های حرفه‌ای، پروژه‌های قبلی و تجربیات
            کاری خود را با کارفرمایان و شرکت‌های بزرگ به اشتراک بگذارید.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContentMain;
