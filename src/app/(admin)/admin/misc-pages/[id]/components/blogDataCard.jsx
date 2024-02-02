import React from "react";
import { CardContent, Typography } from "@mui/material";
import HoverCard from "@/common/hoverCard";
import { toLocalDateString } from "@/utils/toLocalDate";

const MiscPageDataCard = ({ miscPage }) => {
  const blogTypographyMap = {
    _id: "شناسه",
    title: "عنوان محصول",
    slug: "نامک",
    createdAt: "تاریخ ایجاد",
    updatedAt: "تاریخ اصلاح",
  };

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        position: "relative",
      }}
    >
      <CardContent>
        {Object.entries(blogTypographyMap).map(([field, label]) => (
          <Typography key={field} variant="body2" sx={{ mt: 1.5 }}>
            {`${label}: ${
              field === "createdAt"
                ? toLocalDateString(miscPage[field])
                : field === "updatedAt"
                ? toLocalDateString(miscPage[field])
                : miscPage[field]
            }`}
          </Typography>
        ))}
      </CardContent>
    </HoverCard>
  );
};

export default MiscPageDataCard;
