"use client";

import { useState } from "react";
import { Card } from "@mui/material";

const HoverCard = ({
  children,
  defaultElevation,
  hoveredElevation,
  ...rest
}) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <Card
      elevation={isHovered ? hoveredElevation : defaultElevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default HoverCard;
