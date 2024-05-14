import HoverCard from "@/common/hoverCard";
import { Grid } from "@mui/material";

const ReviewFormLayout = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        px:1
      }}
    >
      <Grid
        item
        xs={12}
        sm={9}
        md={8}
        lg={7}
        sx={{
          position: "relative",
        }}
      >
        <HoverCard
        defaultElevation={4}
        hoveredElevation={10}
        sx={{
          backgroundImage: "none",
          "& form": {
            width: "100%",
          },
        }}
      >
        {children}
      </HoverCard>
        
      </Grid>
    </Grid>
  );
};

export default ReviewFormLayout;
