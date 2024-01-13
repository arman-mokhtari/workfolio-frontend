"use client";

import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const theme = useTheme();
  const isSmallScreen = useIsOnlyXs();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 490,
        px:2,
        mt:2,
        "& img": {
          objectFit: "cover",
          width: isSmallScreen?"55% !important":"30% !important",
          height: "auto !important",
        },
      }}
    >
      <Image
      priority
        alt="x"
        width={200}
        height={200}
        src="https://cdn.workfolio.ir/images/svg/errors/error.svg"
      />
      <Typography
        sx={{
          fontSize: "1.3rem",
          fontWeight: "900",
          mt: 4,
          [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "1rem",
          },
        }}
      >
        ظاهرا خطایی در سمت سرور رخ داده است!
      </Typography>
      <Box
        sx={{
          "& .MuiTypography-root": {
            [theme.breakpoints.between("xs", "md")]: {
              fontSize: "0.85rem",
              lineHeight: "1.5rem",
            },
          },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "700",
            mt: 2,
          }}
        >
          احتمالا با تلاش مجدد مشکل بر طرف خواهد شد، در صورت تداوم خطا با
          پشتیبانی ورکفولیو در تماس باشید.
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "700",
            mt: 2,
          }}
        >
          از صبر و شکیبایی شما سپاسگذاریم.
        </Typography>
      </Box>
      <Button
        sx={{
          mt: 3,
          minWidth: "25%",
        }}
        color="success"
        variant="contained"
        onClick={() => reset()}
      >
        تلاش مجدد!
      </Button>
    </Box>
  );
}
