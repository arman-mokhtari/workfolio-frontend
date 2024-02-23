"use client";

import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { darkTheme, lightTheme } from "../../../theme/themeRegistry";
import { CssBaseline, useMediaQuery } from "@mui/material";

import "../../globals.css";
import MainContext from "@/context/themeContext";
import { useEffect } from "react";
import { useState } from "react";
import Providers from "../../provider";
import { Toaster } from "react-hot-toast";
import ProfileAppBar from "./components/profileAppBar";
import { ModalProvider } from "@/context/modalContext";

const LayoutContent = ({ children, nonce }) => {
  const [mode, setMode] = useState();

  const cacheRTL = createCache({
    key: "muirtl",
    // nonce: nonce,
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
              <ProfileAppBar>{children}</ProfileAppBar>
            </Providers>
          </ThemeProvider>
        </CacheProvider>
      </ModalProvider>
    </MainContext.Provider>
  );
};
export default LayoutContent;
