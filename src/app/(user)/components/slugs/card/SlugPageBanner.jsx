import HoverCard from "@/common/hoverCard";
import { Grid } from "@mui/material";
import Image from "next/image";

const SlugPageBanner = ({ imageLink, title }) => {
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={9}
      lg={5}
      sx={{
        "& img": {
          objectFit: "cover",
          width: "100% !important",
          height: "100% !important",
        },
      }}
    >
      <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
        sx={{
          width: 1,
          height: 1,
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
      </HoverCard>
    </Grid>
  );
};

export default SlugPageBanner;
