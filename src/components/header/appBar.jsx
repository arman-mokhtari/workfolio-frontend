"use client";
import { cloneElement, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

import { Menu } from "@mui/icons-material";

import Logo from "@/common/logo";
import AppBarDrawer from "./drawer";
import AppBarList from "./list";
import ThemeBtn from "./themeBtn";
import SignBtn from "./signBtn";

function ElevationScroll(props) {
  const { children, window } = props;
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [textColor, setTextColor] = useState("inherit");

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const theme = useTheme();

  useEffect(() => {
    const appBarBackground =
      theme.palette.mode === "dark" ? "rgba(0,0,0)" : "rgba(255,255,255)";

    if (trigger) {
      setBackgroundColor(appBarBackground);
      setTextColor(theme.palette.text.primary);
    } else {
      setBackgroundColor("transparent");
      setTextColor("inherit");
    }
  }, [
    trigger,
    theme.palette.mode,
    theme.palette.primary.dark,
    theme.palette.primary.light,
    theme.palette.text.primary,
  ]);

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor,
      color: textColor,
    },
  });
}

const DrawerAppBar = (props) => {
  const theme = useTheme();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="header"
      sx={{
        "& .muirtl-19kzrtu": {
          padding: 0,
          mb: "24px",
        },
      }}
    >
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            // transition: "background-color 0.5s",
            backgroundImage: "none",
          }}
        >
          <Toolbar>
            <IconButton
              color={theme.palette.text.primary}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: {
                  lg: "none",
                },
                border: "2px solid",
                borderRadius: 2,
                padding: "5px",
                color: "inherit",
              }}
            >
              <Menu />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ThemeBtn />
              <SignBtn
                display={{
                  xs: "none",
                  lg: "block",
                }}
              />
            </Box>
            <AppBarList
              display={{ xs: "none", lg: "flex" }}
              flexDirection="row-reverse !important"
            />
            <SignBtn
              display={{
                xs: "block",
                lg: "none",
              }}
            />
            <Logo ml={2} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              background:
                theme.palette.mode === "dark"
                  ? "rgba(0,0,0,0.6)"
                  : "rgba(255,255,255,0.6)",
              backdropFilter: "blur(7px)",
            },
          }}
        >
          <AppBarDrawer handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
      <Box sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default DrawerAppBar;
