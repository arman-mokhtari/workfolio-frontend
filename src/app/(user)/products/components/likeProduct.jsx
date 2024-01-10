"use client";

import { likeProduct } from "@/services/product/productService";
import { toast } from "react-hot-toast";
import { Box, IconButton } from "@mui/material";
import { ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useQueryClient } from "@tanstack/react-query";

const LikeProduct = ({ product }) => {
  const queryClient = useQueryClient();
  const { isLiked, _id } = product;


  const likeHandler = async () => {
    try {
      const { message } = await likeProduct(_id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-qs-products"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Box
      sx={{
        "& .MuiButtonBase-root:hover": {
          backgroundColor: "unset",
        },
        "& .MuiSvgIcon-root:hover": {
          color: "primary.main",
        },
      }}
    >
      <IconButton
        sx={{
          pt: 0.5,
        }}
        onClick={likeHandler}
      >
        {isLiked ? <ThumbUp color="primary" /> : <ThumbUpOutlined />}
      </IconButton>
    </Box>
  );
};
export default LikeProduct;
