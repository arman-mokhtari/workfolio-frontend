import { Grid } from "@mui/material";
const MainCardLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </Grid>
  );
};

export default MainCardLayout;
