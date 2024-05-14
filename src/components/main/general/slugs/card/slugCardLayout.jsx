import { Grid } from "@mui/material";
import HoverCard from "@/common/hoverCard";

const SlugCardLayout = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={9}
      lg={5}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HoverCard
        defaultElevation={4}
        hoveredElevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        {children}
      </HoverCard>
    </Grid>
  );
};

export default SlugCardLayout;
