import { CardContent, Typography } from "@mui/material";
import HoverCard from "@/common/hoverCard";
import { toLocalDateString } from "@/utils/toLocalDate";

const PageDataCard = ({ pageData }) => {


  const pageTypographyMap = {
    _id: "شناسه",
    title: "عنوان محصول",
    englishTitle: "عنوان انگلیسی",
    metaTitle: "عنوان متا",
    metaDescription: "توضیحات متا",
    imageLink: "لینک تصویر",
    tags: "تگ‌ها",
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
        {Object.entries(pageTypographyMap).map(([field, label]) => (
          <Typography key={field} variant="body2" sx={{ mt: 1.5 }}>
            {`${label}: ${
              field === "createdAt"
                ? toLocalDateString(pageData[field])
                : field === "updatedAt"
                ? toLocalDateString(pageData[field])
                : pageData[field]
            }`}
          </Typography>
        ))}
      </CardContent>
    </HoverCard>
  );
};

export default PageDataCard;
