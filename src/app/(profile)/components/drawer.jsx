"use client";
import Logo from "@/common/logo";
import { userProfileNavItems } from "@/constants/tabsData";
import { logout } from "@/services/auth/authServices";
import { Inbox, Logout, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";

const ProfileDrawer = () => {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/sign-in";
  };

  return (
    <Box
      sx={{
        // transition: "inherit",
        "& a": {
          textDecoration: "none",
          color: "inherit",
          whiteSpace: "nowrap",
        },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Logo />
      </Toolbar>
      <Divider />
      <List>
        {userProfileNavItems.map(({ text, icon, to }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={<Link href={to}>{text}</Link>} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton onClick={logoutHandler}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="خروج" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default ProfileDrawer;
