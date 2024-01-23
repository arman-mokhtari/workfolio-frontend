import { Grid } from "@mui/material";
const BannerCardLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      {children}
    </Grid>
  );
};

export default BannerCardLayout;
