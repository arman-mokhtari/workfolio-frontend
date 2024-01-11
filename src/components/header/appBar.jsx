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
  Skeleton,
} from "@mui/material";

import { Menu } from "@mui/icons-material";

import Logo from "@/common/logo";
import AppBarDrawer from "./drawer";
import AppBarList from "./list";
import ThemeBtn from "./themeBtn";
import SignBtn from "./signBtn";
import { useGetUser } from "@/hooks/useAuth";

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

  const { isLoading } = useGetUser();
  return (
    <Box
      component="header"
      sx={{
        "& .muirtl-19kzrtu": {
          padding: 0,
        },
      }}
    >
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            backgroundImage: "none",
          }}
        >
          <Toolbar>
            {isLoading ? (
              <Skeleton
                sx={{
                  mr: 2,
                  ml: -1.5,
                  display: {
                    lg: "none",
                  },
                  borderRadius: 2,
                }}
                variant="rectangular"
                width={38}
                height={38.23}
              />
            ) : (
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
            )}

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
