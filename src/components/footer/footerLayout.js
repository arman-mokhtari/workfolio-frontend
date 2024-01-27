import { Grid, Typography, Box } from "@mui/material";

const FooterGridLayout = ({ children, title, px }) => {
  return (
    <Grid
      item
      xs={11.5}
      sm={8}
      md={7}
      lg={4}
      sx={{
        mb: 3,
        mt: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 1,
          px: px,
        }}
      >
        <Typography
          noWrap
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            ml: 2,
            mb: 1,
          }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Grid>
  );
};

export default FooterGridLayout;
