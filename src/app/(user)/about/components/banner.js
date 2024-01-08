import { Grid } from "@mui/material";
import Image from "next/image";

const AboutUsBanner = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        "& img": {
          boxShadow: "10px 10px 0px 0px #0381ff4f",
          borderRadius: 1,
          width: "100%",
          height: "auto",
        },
      }}
    >
      <Image
        src="https://cdn.workfolio.ir/images/bg/banner-service.jpg"
        alt="خدمات ورکفولیو"
        width="600"
        height="400"
      />
    </Grid>
  );
};

export default AboutUsBanner;
