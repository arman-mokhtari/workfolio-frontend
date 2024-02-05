"use client";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardHeader,
} from "@mui/material";
import { Comment } from "@mui/icons-material";
import Link from "next/link";
import shuffle from "lodash.shuffle";
import { useGetAllBlogs } from "@/hooks/useBlogs";
import HoverCard from "@/common/hoverCard";
import LinkAsideSkeleton from "@/pages/(user)/components/slugs/skeletons/linkAsideSkeleton";

const LinksAside = ({ currentPageSlug }) => {
  const { data, isLoading } = useGetAllBlogs();
  const { blogs } = data || {};

  const filteredItems = currentPageSlug
    ? shuffle(blogs)
        .filter((data) => data.slug !== currentPageSlug)
        .slice(0, 6)
    : shuffle(blogs).slice(0, 6);

  return (
    <Grid component="aside" item xs={12} sm={10} md={9} lg={2.5}>
      <HoverCard defaultElevation={4} hoveredElevation={10}>
        {isLoading ? (
          <LinkAsideSkeleton />
        ) : (
          <>
            <CardHeader subheader="لینک‌های مفید:" />
            <List>
              {filteredItems.map(({ faSlug, title }, i) => (
                <ListItem
                  role="link"
                  component={Link}
                  href={`/blogs/${faSlug}`}
                  aria-label={title}
                  title={title}
                  key={i}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                    }}
                  >
                    <Comment
                      sx={{
                        color: "#037fff",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    sx={{
                      color: "#037fff",
                      "& .MuiTypography-root": {
                        fontSize: "0.95rem",
                        display: "-webkit-box",
                        "-webkit-line-clamp": "1",
                        "-webkit-box-orient": "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </HoverCard>
    </Grid>
  );
};

export default LinksAside;
