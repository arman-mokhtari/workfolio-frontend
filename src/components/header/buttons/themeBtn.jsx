"use client";
import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Skeleton } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import MainContext from "@/context/themeContext";
import { useGetUser } from "@/hooks/useAuth";

const ThemeBtn = ({ xs }) => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(MainContext);
  const { isLoading } = useGetUser();
  return (
    <Box
      sx={{
        display: {
          xs: xs,
        },
      }}
    >
      {isLoading ? (
        <Skeleton
          sx={{
            borderRadius: 2,
          }}
          variant="rectangular"
          width={38}
          height={38.23}
        />
      ) : (
        <IconButton
          aria-label="ThemeChanger"
          sx={{
            "&.MuiButtonBase-root:hover": {
              backgroundColor: "transparent",
            },
            border: "2px solid",
            borderRadius: 2,
            padding: "5px",
            color: "inherit",
          }}
          onClick={handleThemeChange}
        >
          {theme.palette.mode === "dark" ? (
            <WbSunnyOutlined />
          ) : (
            <NightlightOutlined />
          )}
        </IconButton>
      )}
    </Box>
  );
};

export default ThemeBtn;
