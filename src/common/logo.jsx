"use client";
import { useTheme } from "@mui/material/styles";

import { Box, Typography, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useGetCategories } from "@/hooks/useCategories";

const Logo = ({ my, ml }) => {
  const theme = useTheme();
  const brand = "ورکفولیو";

  const { isLoading } = useGetCategories();
  const lightLogo = "https://cdn.workfolio.ir/images/logo/workfolio-light.svg";
  const darkLogo = "https://cdn.workfolio.ir/images/logo/workfolio-dark.svg";
  return isLoading ? (
    <Skeleton
      sx={{
        my: my,
        ml: ml,
      }}
      variant="circular"
      width={50}
      height={50}
    />
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ml: ml,
        "&.MuiBox-root a": {
          textDecoration: "none",
        },
      }}
    >
      <Link role="link" aria-label="رفتن به صفحه اصلی" href="/">
        <Typography
          variant="h1"
          noWrap
          sx={{
            fontSize: 0,
            color: theme.palette.text.primary,
            my: my,
            "& img": {
              width: "60px !important",
              height: "auto !important",
              objectFit: "cover",
            },
          }}
        >
          {brand}
          <Image
            src={theme.palette.mode === "dark" ? lightLogo : darkLogo}
            placeholder="blur"
            blurDataURL={lightLogo}
            alt="طراحی وبسایت"
            title={brand}
            width="800"
            height="800"
            priority={true}
          />
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
