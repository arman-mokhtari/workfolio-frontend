import { Grid } from "@mui/material";
const BannerCardLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={1.5}
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 2,
        mt: 1,
      }}
    >
      {children}
    </Grid>
  );
};

export default BannerCardLayout;
