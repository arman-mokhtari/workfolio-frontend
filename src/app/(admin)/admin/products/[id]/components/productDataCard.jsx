import React from "react";
import { CardContent, Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import HoverCard from "@/common/hoverCard";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { toLocalDateString } from "@/utils/toLocalDate";

const ProductDataCard = ({ product }) => {
  const {
    category,
    price,
    offPrice,
    discount,
    countInStock,
    likes,
    description,
  } = product;

  const numericFields = [price, offPrice, discount, countInStock, likes];

  const productTypographyMap = {
    _id: "شناسه",
    title: "عنوان محصول",
    slug: "نامک",
    category: "دسته بندی",
    imageLink: "لینک تصویر",
    brand: "برند",
    tags: "تگ‌ها",
    price: "قیمت محصول",
    offPrice: "تخفیف",
    discount: "درصد تخفیف",
    countInStock: "موجودی",
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
        {Object.entries(productTypographyMap).map(([field, label]) => (
          <Typography key={field} variant="body2" sx={{ mt: 1.5 }}>
            {`${label}: ${
              field === "likes"
                ? toPersianNumbersWithComma(product[field].length)
                : field === "category"
                ? product[field].title
                : numericFields.includes(product[field])
                ? toPersianNumbersWithComma(product[field])
                : field === "createdAt"
                ? toLocalDateString(product[field])
                : field === "updatedAt"
                ? toLocalDateString(product[field])
                : product[field]
            }`}
          </Typography>
        ))}
      </CardContent>
    </HoverCard>
  );
};

export default ProductDataCard;
