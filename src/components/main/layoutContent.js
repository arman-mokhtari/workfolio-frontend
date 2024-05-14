"use client";

import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { darkTheme, lightTheme } from "../../theme/themeRegistry";
import { CssBaseline, useMediaQuery } from "@mui/material";

import "../../app/globals.css";
import DrawerAppBar from "@/components/header/appBar";
import MainContext from "@/context/themeContext";
import { useEffect } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import FabContact from "@/common/buttons/fabContact";
import ScrollTop from "@/common/buttons/scrollTop";
import Footer from "@/components/footer/footer";
import CustomBreadCrumbs from "@/components/main/breadCrumbs/breadCrumbs";
import { usePathname } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalProvider } from "@/context/modalContext";
import Providers from "./provider";

const LayoutContent = ({ children, nonce }) => {
  const [mode, setMode] = useState();

  const pn = usePathname();
  const cacheRTL = createCache({
    key: "muirtl",
    nonce: nonce,
    stylisPlugins: [prefixer, rtlPlugin],
  });
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
      <ModalProvider>
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
      </ModalProvider>
    </MainContext.Provider>
  );
};

export default LayoutContent;
