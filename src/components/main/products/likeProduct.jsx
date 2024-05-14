"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { Box, IconButton } from "@mui/material";
import { ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useLikeProduct } from "@/hooks/useProducts";

const LikeProduct = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { mutateAsync } = useLikeProduct();

  const { isLiked, _id } = product;

  const likeHandler = async () => {
    try {
      const { message } = await mutateAsync(_id);
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
        aria-label="like"
      >
        {isLiked ? <ThumbUp color="primary" /> : <ThumbUpOutlined />}
      </IconButton>
    </Box>
  );
};
export default LikeProduct;
