"use client";

import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { CssBaseline } from "@mui/material";

import "../../app/globals.css";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/context/modalContext";
import { lightTheme } from "../../theme/themeRegistry";
import Providers from "../main/provider";
import AdminAppBar from "./shared/adminAppbar";

const LayoutContent = ({ children, nonce }) => {
  const cacheRTL = createCache({
    key: "muirtl",
    nonce: nonce,
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <ModalProvider>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Providers>
            <Toaster position="top-left" />
            <AdminAppBar>{children}</AdminAppBar>
          </Providers>
        </ThemeProvider>
      </CacheProvider>
    </ModalProvider>
  );
};

export default LayoutContent;
