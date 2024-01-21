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
      <Box
        sx={{
          mx: 3,
          [theme.breakpoints.only("xs")]: {
            mx: 2,
          },
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            color: "text.primary",
            pt: 3,
            position: "relative",
          }}
        >
          <FirstGrid />
          <SecondGrid />
          <ThirdGrid />
        </Grid>
      </Box>

      <CopyRight />
    </Box>
  );
};

export default Footer;
