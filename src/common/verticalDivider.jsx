import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const VerticalDivider = ({variant}) => {
  const theme = useTheme();

  return (
    <Divider
      sx={{
        mx: 1,
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.25)"
            : "rgba(0,0,0,0.25)",
        // transition: "border-color 0.5s ease-in-out",
      }}
      orientation="vertical"
      variant={variant}
      flexItem
    />
  );
};

export default VerticalDivider;
