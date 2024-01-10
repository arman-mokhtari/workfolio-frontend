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
import AdminAppBar from "./components/adminAppbar";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const LayoutContent = ({ children }) => {
  const [mode, setMode] = useState();

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
            <AdminAppBar>{children}</AdminAppBar>
          </Providers>
        </ThemeProvider>
      </CacheProvider>
    </MainContext.Provider>
  );
};

export default LayoutContent;
