"use client";
import Logo from "@/common/logo";
import GlobalModal from "@/common/globalModal";
import { userProfileNavItems } from "@/constants/tabsData";
import { useModal } from "@/context/modalContext";
import { logout } from "@/services/auth/authServices";
import { Logout } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";

const ProfileDrawer = ({ handleDrawerToggle }) => {
  const { openModal, closeModal } = useModal();

  const modalHandler = async () => {
    await logout();
    closeModal();
    document.location.href = "/sign-in";
  };

  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{
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
              <ListItemText
                primary={
                  <Link role="link" aria-label={text} href={to}>
                    {text}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
        <GlobalModal
          modalHandler={modalHandler}
          question="آیا از خروج اطمینان دارید؟"
          acceptText="تایید"
          rejectText="انصراف"
        >
          <ListItemButton onClick={openModal}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="خروج" />
          </ListItemButton>
        </GlobalModal>
      </List>
    </Box>
  );
};

export default ProfileDrawer;
