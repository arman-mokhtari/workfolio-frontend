import { Grid } from "@mui/material";
import HoverCard from "@/common/hoverCard";

const MiscCardLayout = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={9}
      lg={10}
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

export default MiscCardLayout;
