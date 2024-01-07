import React from "react";
import { CardContent, Typography } from "@mui/material";
import HoverCard from "@/common/hoverCard";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { toLocalDateString } from "@/utils/toLocalDate";

const BlogDataCard = ({ blog }) => {
  const blogTypographyMap = {
    _id: "شناسه",
    title: "عنوان محصول",
    slug: "نامک",
    category: "دسته بندی",
    imageLink: "لینک تصویر",
    tags: "تگ‌ها",
    likes: "تعداد لایک",
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
              field === "likes"
                ? toPersianNumbersWithComma(blog[field].length)
                : field === "category"
                ? blog[field].title
                : field === "createdAt"
                ? toLocalDateString(blog[field])
                : field === "updatedAt"
                ? toLocalDateString(blog[field])
                : blog[field]
            }`}
          </Typography>
        ))}
      </CardContent>
    </HoverCard>
  );
};

export default BlogDataCard;
