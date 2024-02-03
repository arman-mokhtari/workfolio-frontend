"use client";
import Logo from "@/common/logo";
import { adminProfileNavItems } from "@/constants/tabsData";
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
  AppBar,
} from "@mui/material";
import Link from "next/link";
import { useModal } from "@/context/modalContext";
import GlobalModal from "@/common/globalModal";

const AdminDrawer = ({ handleDrawerToggle }) => {
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
        {adminProfileNavItems.map(({ text, icon, to }, index) => (
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
              <Logout color="error" />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: "error.main",
                "& .MuiTypography-root": {
                  fontWeight: "800",
                },
              }}
              primary="خروج"
            />
          </ListItemButton>
        </GlobalModal>
      </List>
    </Box>
  );
};

export default AdminDrawer;
