"use client"
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import AboutUsDescription from "./components/description";
import AboutUsBanner from "./components/banner";

const Page = () => {
  const theme = useTheme();
  return (
    <Grid
      item
      container
      spacing={2}
      xs={12}
      sx={{
        px: 3,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        mb: 6,
        [theme.breakpoints.between("xs", "md")]: {
          flexDirection: "column-reverse",
          mb: 2,
          mt: 0,
        },
      }}
    >
      <AboutUsDescription />
      <AboutUsBanner />
    </Grid>
  );
};

export default Page;
