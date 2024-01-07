"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { likeProduct } from "@/services/product/productService";
import { toast } from "react-hot-toast";
import { Box, IconButton } from "@mui/material";
import { ThumbUp, ThumbUpOutlined } from "@mui/icons-material";

const LikeProduct = ({ product }) => {
  const { isLiked, _id } = product;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const likeHandler = async () => {
    try {
      const { message } = await likeProduct(_id);
      toast.success(message);
      router.refresh(pathname + "?" + searchParams.toString());
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
