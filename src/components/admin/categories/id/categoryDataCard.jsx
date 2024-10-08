import React from "react";
import { CardContent, Typography } from "@mui/material";

import HoverCard from "@/common/hoverCard";
import { toLocalDateString } from "@/utils/toLocalDate";

const CategoryDataCard = ({ category }) => {
  const categoryTypographyMap = {
    _id: "شناسه",
    title: "عنوان دسته‌بندی",
    description: "توضیحات",
    englishTitle: "عنوان انگلیسی",
    type: "نوع",
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
        {Object.entries(categoryTypographyMap).map(([field, label]) => (
          <Typography key={field} variant="body2" sx={{ mt: 1.5 }}>
            {`${label}: ${
              field === "createdAt"
                ? toLocalDateString(category[field])
                : field === "updatedAt"
                ? toLocalDateString(category[field])
                : category[field]
            }`}
          </Typography>
        ))}
      </CardContent>
    </HoverCard>
  );
};

export default CategoryDataCard;
