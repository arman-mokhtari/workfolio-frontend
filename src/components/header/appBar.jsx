"use client";
import { cloneElement, useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  useScrollTrigger,
  Skeleton
} from "@mui/material";

import { Menu } from "@mui/icons-material";

import Logo from "@/common/logo";
import AppBarDrawer from "./drawer";
import AppBarList from "./list";
import ThemeBtn from "./buttons/themeBtn";
import SignBtn from "./buttons/signBtn";
import { useGetUser } from "@/hooks/useAuth";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const DrawerAppBar = (props) => {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const { isLoading } = useGetUser();
  return (
    <Box component="header">
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar component="nav">
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
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
