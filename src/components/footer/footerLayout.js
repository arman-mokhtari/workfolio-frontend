import { Grid, Typography, Box } from "@mui/material";

const FooterGridLayout = ({ children, title }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        pb: 3,
        pt: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          ml: 2,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      {children}
    </Grid>
  );
};

export default FooterGridLayout;
