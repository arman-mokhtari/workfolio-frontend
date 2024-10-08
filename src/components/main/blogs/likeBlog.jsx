"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { toast } from "react-hot-toast";
import { Box, IconButton } from "@mui/material";
import { ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useLikeBlog } from "@/hooks/useBlogs";

const LikeBlog = ({ blog }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { mutateAsync } = useLikeBlog();

  const { isLiked, _id } = blog;
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
          pt: 0,
        }}
        onClick={likeHandler}
        aria-label="like"
      >
        {isLiked ? <ThumbUp color="primary" /> : <ThumbUpOutlined />}
      </IconButton>
    </Box>
  );
};
export default LikeBlog;
