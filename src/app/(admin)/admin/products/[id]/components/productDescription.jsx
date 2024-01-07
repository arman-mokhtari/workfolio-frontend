import React from "react";
import { CardContent, Typography, FormLabel, CardHeader } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import HoverCard from "@/common/hoverCard";

const ProductDescription = ({ product }) => {
  const { description, title } = product;

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        position: "relative",
      }}
    >
      <CardContent>
        <CardHeader title="توضیحات محصول" subheader={title} />
        <Typography>{ReactHtmlParser(description)}</Typography>
      </CardContent>
    </HoverCard>
  );
};

export default ProductDescription;
