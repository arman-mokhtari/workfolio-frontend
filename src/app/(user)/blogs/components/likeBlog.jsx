"use client";
import { toast } from "react-hot-toast";
import { Box, IconButton } from "@mui/material";
import { ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useQueryClient } from "@tanstack/react-query";
import { useLikeBlog } from "@/hooks/useBlogs";

const LikeBlog = ({ blog }) => {
  const { isLiked, _id } = blog;
  const queryClient = useQueryClient();
  const { mutateAsync } = useLikeBlog();

  const likeHandler = async () => {
    try {
      const { message } = await mutateAsync(_id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-qs-blogs"] });
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
      >
        {isLiked ? <ThumbUp color="primary" /> : <ThumbUpOutlined />}
      </IconButton>
    </Box>
  );
};
export default LikeBlog;
