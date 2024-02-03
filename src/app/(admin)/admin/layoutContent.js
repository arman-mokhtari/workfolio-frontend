"use client";

import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { lightTheme } from "../../../theme/themeRegistry";
import { CssBaseline } from "@mui/material";

import "../../globals.css";
import Providers from "../../provider";
import { Toaster } from "react-hot-toast";
import AdminAppBar from "./components/adminAppbar";
import { ModalProvider } from "@/context/modalContext";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const LayoutContent = ({ children }) => {
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
