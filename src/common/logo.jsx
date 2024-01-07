"use client";
import { useTheme } from "@mui/material/styles";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ my, ml }) => {
  const theme = useTheme();
  const brand = "ورکفولیو";

  return (
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
      <Link href="/">
        <Typography
          variant="h1"
          title="خانه"
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
            src={
              theme.palette.mode === "dark"
                ? "/assets/svg/workfolio-light.svg"
                : "/assets/svg/workfolio-dark.svg"
            }
            alt={brand}
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
