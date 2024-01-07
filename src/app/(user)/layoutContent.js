"use client";

import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { darkTheme, lightTheme } from "../../theme/themeRegistry";
import { CssBaseline, useMediaQuery } from "@mui/material";

import "../globals.css";
import DrawerAppBar from "@/components/header/appBar";
import MainContext from "@/context/themeContext";
import { useEffect } from "react";
import { useState } from "react";
import Providers from "../provider";
import { Toaster } from "react-hot-toast";
import FabContact from "@/components/buttons/fabContact";
import ScrollTop from "@/components/buttons/scrollTop";
import Footer from "@/components/footer/footer";
import CustomBreadCrumbs from "@/components/main/breadCrumbs";
import { usePathname } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const LayoutContent = ({ children }) => {
  const [mode, setMode] = useState();

  const pn = usePathname();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <MainContext.Provider
      value={{
        handleThemeChange,
      }}
    >
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Providers>
            <Toaster position="top-left" />
            <DrawerAppBar />
            {pn !== "/" &&
              !pn.startsWith("/forget-password") &&
              pn !== "/complete-profile" &&
              pn !== "/auth" &&
              pn !== "/contact" &&
              pn !== "/services" &&
              pn !== "/sign-in" && <CustomBreadCrumbs />}
            {children}
            {pn !== "/complete-profile" &&
              pn !== "/auth" &&
              pn !== "/sign-in" &&
              pn !== "/services" &&
              pn !== "/contact" &&
              !pn.startsWith("/forget-password") && <Footer />}
            <FabContact />
            <ScrollTop />
          </Providers>
        </ThemeProvider>
      </CacheProvider>
    </MainContext.Provider>
  );
};

export default LayoutContent;
