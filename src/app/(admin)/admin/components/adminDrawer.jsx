"use client";
import Logo from "@/common/logo";
import { adminProfileNavItems } from "@/constants/tabsData";
import { logout } from "@/services/auth/authServices";
import { ExpandLess, ExpandMore, Logout, Reviews } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const AdminDrawer = ({ handleDrawerToggle }) => {
  //Reviews section
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleClick = () => {
    setOpen(!open);
  };
  //End of reviews section

  const logoutHandler = async () => {
    document.location.href = "/";
    await logout();
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
              <ListItemText primary={<Link href={to}>{text}</Link>} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Reviews />
          </ListItemIcon>
          <ListItemText primary="نظرات" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Reviews color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={<Link href="/admin/reviews/public">نظرات عمومی</Link>}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Reviews color="success" />
              </ListItemIcon>
              <ListItemText
                primary={<Link href="/admin/reviews/product">نظرات محصول</Link>}
              />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={logoutHandler}>
          <ListItemIcon>
            <Logout color="error" />
          </ListItemIcon>
          <ListItemText
            sx={{
              color:
                theme.palette.mode === "light" ? "error.main" : "error.light",
            }}
            primary="خروج"
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default AdminDrawer;
