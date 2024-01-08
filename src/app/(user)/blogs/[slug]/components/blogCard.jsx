"use client";
import HoverCard from "@/common/hoverCard";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import { toLocalDateString } from "@/utils/toLocalDate";

const BlogCard = ({ blog, pageUrl }) => {
  const { title, createdAt, updatedAt, metaDescription, user } = blog;

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            lineHeight: "1.8rem",
            mb: 1.5,
          }}
          variant="h1"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1rem",
            lineHeight: "1.6rem",
          }}
          variant="body1"
        >
          {metaDescription}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            my: 1,
            "& a": {
              color: "#1976d2",
              textDecoration: "none",
            },
          }}
        >
          <Link href="#continue">ادامه مطلب...</Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              mr: 1,
            }}
            alt={user?.name}
            src="https://cdn.workfolio.ir/images/admin/arman_mokhtari.png"
          />
          <Typography>{user?.name}</Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            fontSize: "0.90rem",
          }}
        >
          تاریخ انتشار : {toLocalDateString(createdAt)}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            mb: 2,
            fontSize: "0.90rem",
          }}
        >
          آخرین بروزرسانی : {toLocalDateString(updatedAt)}
        </Typography>
      </Box>
      <Box>
        <Divider
          sx={{
            borderWidth: "1px",
            mb: 0.5,
          }}
          orientation="horizontal"
          variant="middle"
          flexItem
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Typography id="continue">به اشتراک گذاری</Typography>
          <ShareButtons url={pageUrl} title={title} />
        </Box>
      </Box>
    </HoverCard>
  );
};

export default BlogCard;
