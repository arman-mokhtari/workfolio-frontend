"use client";

import { Box, IconButton, Typography, Skeleton } from "@mui/material";
import Link from "next/link";
import { Logout } from "@mui/icons-material";

import BadgeLink from "./badgeLink";
import VerticalDivider from "@/common/verticalDivider";
import { logout } from "@/services/auth/authServices";
import { useGetUser } from "@/hooks/useAuth";

const SignBtn = ({ display }) => {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  const splitName = user?.name?.split(" ")[0];

  const cartItemsCount = cart
    ? cart.reduce(
        (count, cartItem) =>
          count + (cartItem.payDetail.productIds?.length || 0),
        0
      )
    : 0;

  const logoutHandler = async () => {
    await logout();
    document.location.href = "/sign-in";
  };

  return (
    <Box
      sx={{
        display: display,
      }}
    >
      {isLoading ? (
        <Skeleton
          sx={{
            borderRadius: 2,
            ml: 1,
          }}
          variant="rectangular"
          width={135.7}
          height={38.23}
        />
      ) : (
        <Box
          sx={{
            "&.MuiButtonBase-root:hover": {
              backgroundColor: "transparent",
            },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "2px solid",
            borderRadius: 2,
            padding: "5px",
            ml: 1,
            "& a": {
              textDecoration: "none",
              fontSize: "1rem",
              color: "inherit",
              whiteSpace: "nowrap",
            },
          }}
        >
          {user && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                size="small"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "inherit",
                  p: 0,
                  backgroundColor: "transparent !important",
                }}
                onClick={logoutHandler}
              >
                <Logout />
              </IconButton>
              <VerticalDivider />
            </Box>
          )}

          <BadgeLink badgeContent={cartItemsCount} />

          {user ? (
            <>
              {user.isActive && <VerticalDivider />}
              <Typography>{splitName}</Typography>
            </>
          ) : (
            <>
              <VerticalDivider />
              <Link
                role="link"
                title="رفتن به صفحه ثبت‌نام"
                aria-label="ثبت‌نام"
                href="/auth"
              >
                ثبت‌نام
              </Link>
              <VerticalDivider />
              <Link
                role="link"
                title="رفتن به صفحه ورود"
                aria-label="ورود"
                href="/sign-in"
              >
                ورود
              </Link>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SignBtn;
