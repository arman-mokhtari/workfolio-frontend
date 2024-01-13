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
import shuffle  from "lodash.shuffle";
import { useGetAllBlogs } from "@/hooks/useBlogs";
import Loading from "@/common/loading";
import HoverCard from "@/common/hoverCard";

const LinksAside = ({ currentPageSlug }) => {
  const { data, isLoading } = useGetAllBlogs();
  const { blogs } = data || {};

  const filteredItems = currentPageSlug
    ? shuffle(blogs)
        .filter((data) => data.slug !== currentPageSlug)
        .slice(0, 6)
    : shuffle(blogs).slice(0, 6);

  if (isLoading) return <Loading />;
  return (
    <Grid component="aside" item xs={12} md={3}>
      <HoverCard defaultElevation={4} hoveredElevation={10}>
        <CardHeader subheader="لینک‌های مفید:" />
        <List>
          {filteredItems.map(({ slug, title }, i) => (
            <ListItem
              component={Link}
              href={`/blogs/${slug}`}
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
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </HoverCard>
    </Grid>
  );
};

export default LinksAside;
