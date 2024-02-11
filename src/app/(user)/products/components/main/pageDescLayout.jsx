"use client";
import HoverCard from "@/common/hoverCard";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PageDescLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={10} md={9} lg={10} component="article">
      <HoverCard
        sx={{
          py: 2,
          px: 3,
          "& figcaption": {
            backgroundColor:
              theme.palette.mode === "light" ? "#f7f7f7" : "#1a1a1a",
          },
          "& figure.image": {
            width: "100% !important",
            m: "0 !important",
          },
        }}
        defaultElevation={4}
        hoveredElevation={10}
      >
        {children}
      </HoverCard>
    </Grid>
  );
};

export default PageDescLayout;
