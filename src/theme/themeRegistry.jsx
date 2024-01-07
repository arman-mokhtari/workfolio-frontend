"use client";
import { createTheme } from "@mui/material/styles";
import { red,brown } from "@mui/material/colors";

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    background: {
      default: "#F1F1F1",
    },
    myRed: {
      main: red["A700"],
      light: red["A400"],
      dark: red[900],
    },
    bronze: {
      main: brown[400],
      light: brown[200],
      dark: brown[600],
    },
    textColor: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    background: {
      default: "#22273b",
    },
    myRed: {
      main: red["A700"],
      light: red["A400"],
      dark: red[900],
    },
    bronze: {
      main: brown[400],
      light: brown[200],
      dark: brown[600],
    },
    textColor: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1C2331",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
