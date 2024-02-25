"use client";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import MuiMenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import NotificationLayout from "./dropdownLayout";
import NotificationHeader from "./dropdownHeader";
import DropdownMain from "./dropdownMain";
import DropdownActionButton from "./dropdownActionButton";
import { useGetNotifications } from "@/hooks/useNotefication";
import { NotificationsNone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  cursor: "default",
}));

const Dropdown = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState(null);

  // ** Hook
  const theme = useTheme();
  const { data, isLoading } = useGetNotifications();
  const { notifications } = data || {};

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  if (isLoading)
    return (
      <IconButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="customized-menu"
        aria-label="dropdown area"
        disabled
      >
        <NotificationsNone
          sx={{
            fontSize: "2rem",
          }}
        />
      </IconButton>
    );

  const filteredNotifications = notifications?.filter(
    (notification) => notification.isRead === false
  );
  const notificationNum = filteredNotifications?.length;
  const notificationLabel =
    notificationNum > 0
      ? `${toPersianNumbers(notificationNum)} پیام جدید`
      : "پیام جدید ندارید!";
  return (
    <NotificationLayout
      notificationNum={notificationNum}
      handleDropdownOpen={handleDropdownOpen}
      handleDropdownClose={handleDropdownClose}
      notificationLabel={notificationLabel}
      anchorEl={anchorEl}
      theme={theme}
    >
      <NotificationHeader notificationLabel={notificationLabel} />
      <DropdownMain notifications={notifications} theme={theme} />
      <DropdownActionButton notifications={notifications} />
    </NotificationLayout>
  );
};

export default Dropdown;
