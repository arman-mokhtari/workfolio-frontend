import React from "react";
import { CardContent, Typography, CardHeader } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import HoverCard from "@/common/hoverCard";

const PageDescription = ({ pageData }) => {
  const { description, title } = pageData;

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        position: "relative",
      }}
    >
      <CardContent>
        <CardHeader title="توضیحات صفحه" subheader={title} />
        <Typography>{ReactHtmlParser(description)}</Typography>
      </CardContent>
    </HoverCard>
  );
};

export default PageDescription;
