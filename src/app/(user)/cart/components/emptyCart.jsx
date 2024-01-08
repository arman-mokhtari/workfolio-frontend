"use client";
import Link from "@mui/material/Link";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";

const EmptyCart = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 490,
        mt: 2,
      }}
    >
      <Image
        alt="x"
        width={200}
        height={200}
        src="https://cdn.workfolio.ir/images/graphics/empty_cart.svg"
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
        سبد خرید شما در حال حاضر خالی می‌باشد!
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
          قبل از رفتن به صفحه پرداخت باید محصولات مورد نظر خود را به سبد خرید
          اضافه کنید.
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "700",
            mt: 2,
          }}
        >
          در صفحه فروشگاه، مجموعه‌ای از محصولات جذاب و متنوع منتظر شماست.
        </Typography>
      </Box>

      <Button
        sx={{
          mt: 3,
          minWidth: "25%",
        }}
        color="success"
        variant="contained"
        component={Link}
        href="/products"
      >
        بازگشت به صفحه خرید
      </Button>
    </Box>
  );
};
export default EmptyCart;
