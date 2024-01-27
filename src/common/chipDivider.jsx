"use client";
import { Divider, CardHeader, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ChipDivider = ({ color,borderColor, chipColor, title, mt, mb }) => {
  const theme = useTheme();
  return (
    <Divider
      sx={{
        borderWidth: "1px",
        mb: mb,
        mt: mt,

        "&::before, &::after": {
          borderColor: borderColor,
        },
      }}
      orientation="horizontal"
      variant="middle"
      flexItem
    >
      <Chip
        color={chipColor}
        sx={{
          "& .MuiTypography-root": {
            [theme.breakpoints.only("xs")]: {
              fontSize: "1.1rem",
            },
            fontSize: "1.4rem",
            fontWeight: "600",
          },
          my: 0,
        }}
        label={
          <CardHeader
            title={title}
            sx={{
              color: color,
            }}
          />
        }
      />
    </Divider>
  );
};

export default ChipDivider;
