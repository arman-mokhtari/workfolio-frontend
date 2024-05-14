import React from "react";
import { CardContent, Typography, CardHeader } from "@mui/material";
import HoverCard from "@/common/hoverCard";

const ReviewDescription = ({ review }) => {
  const { message } = review;

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        position: "relative",
      }}
    >
      <CardContent>
        <CardHeader subheader="متن پیام:" />
        <Typography>{message}</Typography>
      </CardContent>
    </HoverCard>
  );
};

export default ReviewDescription;
