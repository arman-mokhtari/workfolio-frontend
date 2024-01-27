"use client";
import { useTheme } from "@mui/material/styles";
import { Box, Divider, Grid } from "@mui/material";
import FirstGrid from "./firstGrid";
import CopyRight from "./copyRight";
import SecondGrid from "./secondGrid";
import ThirdGrid from "./thirdGrid";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer">
      <Divider
        sx={{
          borderWidth: "1px",
          mt: 2,
        }}
        orientation="horizontal"
        variant="middle"
        flexItem
      />

      <Grid
        container
        spacing={3}
        sx={{
          pt: 3,
          justifyContent: "center",
          px:1.5
        }}
      >
        <FirstGrid />
        <SecondGrid />
        <ThirdGrid />
      </Grid>

      <CopyRight />
    </Box>
  );
};

export default Footer;
