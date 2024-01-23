import { Grid } from "@mui/material";
import Image from "next/image";

const SlugPageBanner = ({ imageLink, title }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        "& img": {
          objectFit: "cover",
          borderRadius: 2,
          width: "100% !important",
          height: "auto !important",
        },
      }}
    >
      <Image
        height="700"
        width="700"
        priority
        src={imageLink}
        alt={title}
        title={title}
        placeholder="blur"
        blurDataURL={imageLink}
      />
    </Grid>
  );
};

export default SlugPageBanner;
