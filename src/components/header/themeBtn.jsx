"use client"
import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import MainContext from "@/context/themeContext";

const ThemeBtn = ({ xs }) => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(MainContext);

  return (
    <Box
      sx={{
        display: {
          xs: xs,
        },
      }}
    >
      <IconButton
        aria-label="ThemeChanger"
        sx={{
          "&.MuiButtonBase-root:hover": {
            backgroundColor: "transparent",
          },
          "& svg:hover": {
            color:theme.palette.mode === "dark"? "#ffeb3b":"#64b5f6",
          },
          border: "2px solid",
          borderRadius: 2,
          padding: "5px",
          color:"inherit",
        }}
        onClick={handleThemeChange}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined 
          />
        ) : (
          <NightlightOutlined />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeBtn;
