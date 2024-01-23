import HoverCard from "@/common/hoverCard";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DescriptionLayout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useIsOnlyXs();
  return (
    <Grid component="article" item xs={12} md={9}>
      <HoverCard
        sx={{
          p: 2,
          "& figcaption": {
            backgroundColor:
              theme.palette.mode === "light" ? "#f7f7f7" : "#1a1a1a",
          },
          "& figure.image": {
            float: isSmallScreen ? "none" : "right",
            width: isSmallScreen ? "100% !important" : "50% !important",
            m: isSmallScreen && "0 !important",
            my: 1.5,
            mr: 0,
            ml: 2.5,
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

export default DescriptionLayout;
