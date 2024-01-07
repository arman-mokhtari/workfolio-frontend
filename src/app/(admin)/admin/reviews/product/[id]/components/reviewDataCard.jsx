import React from "react";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonGroup,
} from "@mui/material";
import HoverCard from "@/common/hoverCard";
import { toast } from "react-hot-toast";
import { toLocalDateString } from "@/utils/toLocalDate";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useRemoveProductReview, useUpdateProductReview } from "@/hooks/useProductReviews";

const ReviewDataCard = ({ review, id }) => {
  const router = useRouter();
  const reviewTypographyMap = {
    _id: "شناسه",
    user: "نام",
    product: "محصول",
    rating: "امتیاز",
    isAccept: "وضعیت",
    createdAt: "تاریخ ایجاد",
    updatedAt: "تاریخ اصلاح",
  };

  const { mutateAsync } = useUpdateProductReview();
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncRemove } = useRemoveProductReview();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        reviewId: id,
        data: {
          isAccept: true,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["product-review-id"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleUnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        reviewId: id,
        data: {
          isAccept: false,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["product-review-id"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const removeReviewHandler = async () => {
    try {
      const { message } = await mutateAsyncRemove(id);
      toast.success(message);
      router.push("/admin/reviews");
      queryClient.invalidateQueries({ queryKey: ["product-reviews-admin"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
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
        {Object.entries(reviewTypographyMap).map(([field, label]) => (
          <Typography key={field} variant="body2" sx={{ mt: 1.5 }}>
            {`${label}: ${
              field === "createdAt"
                ? toLocalDateString(review[field])
                : field === "updatedAt"
                ? toLocalDateString(review[field])
                : field === "product"
                ? review[field].title
                : field === "user"
                ? review[field]
                  ? review[field].name
                  : "کاربر ناشناس"
                : field === "isAccept"
                ? review.isAccept
                  ? "تایید شده"
                  : "در حال انتظار"
                : review[field]
            }`}
          </Typography>
        ))}
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "space-around",

          mt: 1.5,
        }}
      >
        <ButtonGroup>
          <Button color="success" onClick={handleSubmit}>
            تایید
          </Button>
          <Button onClick={handleUnSubmit}>عدم تایید</Button>
          <Button color="error" onClick={removeReviewHandler}>
            حذف
          </Button>
        </ButtonGroup>
      </CardActions>
    </HoverCard>
  );
};

export default ReviewDataCard;
