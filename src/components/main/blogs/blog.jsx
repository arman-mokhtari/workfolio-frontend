"use client";
import {
  Box,
  Button,
  Typography,
  CardContent,
  CardActions,
  Tooltip,
  Fade,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HoverCard from "@/common/hoverCard";
import LikeBlog from "./likeBlog";

const Blog = ({ blog }) => {
  const { faSlug, title, imageLink, metaDescription } = blog;
  const pathname = usePathname();
  const isBlogsPage = pathname === "/blogs";
  return (
    <HoverCard defaultElevation={4} hoveredElevation={10}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
          mx: 2,
          "& img": {
            objectPosition: "center",
            objectFit: "cover",
            borderRadius: 3,
            width: "100% !important",
            height: "auto !important",
          },
          "& a": {
            width: "100% !important",
          },
        }}
      >
        <Link role="link" aria-label={title} href={`/blogs/${faSlug}`}>
          <Image
            priority
            height="240"
            width="280"
            src={imageLink}
            alt={title}
            title={title}
            placeholder="blur"
            blurDataURL={imageLink}
          />
        </Link>
      </Box>
      <CardContent
        sx={{
          "& a": { textDecoration: "none" },
          py: isBlogsPage ? 0.5 : 1.5,
        }}
      >
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          title={title}
          placement="top"
        >
          <Typography gutterBottom component="div">
            <Link role="link" aria-label={title} href={`/blogs/${faSlug}`}>
              <Typography
                color="text.primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  display: "-webkit-box",
                  "-webkit-line-clamp": "1",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                variant="h2"
              >
                {title}
              </Typography>
            </Link>
          </Typography>
        </Tooltip>

        <Typography
          sx={{
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="body2"
          color="text.secondary"
        >
          {metaDescription}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 0,
        }}
      >
        <Box
          sx={{
            width: 1,
            mb: 1,
            px: 1,
          }}
        >
          {isBlogsPage && <LikeBlog blog={blog} />}
          <Button
            sx={{
              fontWeight: "700",
              "& a": {
                textDecoration: "none",
                color: "primary.main",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
            aria-label="مطالعه مقاله"
          >
            <Link
              role="link"
              aria-label="مطالعه مقاله"
              href={`/blogs/${faSlug}`}
            >
              مطالعه مقاله
            </Link>
          </Button>
        </Box>
      </CardActions>
    </HoverCard>
  );
};

export default Blog;
