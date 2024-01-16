"use client"
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TopAbsoluteShadow = ({height}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        height: height,
        zIndex: 2,
        "&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundImage:
            theme.palette.mode === "dark"
              ? "linear-gradient(to top, transparent, #00000071)"
              : "linear-gradient(to top, transparent, #ffffff9c)",
        },
      }}
    />
  );
};

export default TopAbsoluteShadow;
