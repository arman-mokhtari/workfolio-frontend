import { Grid, Skeleton, Stack } from "@mui/material";
import Blog from "./blog";
import HoverCard from "@/common/hoverCard";

const BlogItems = ({ blogs, isPending }) => {
  return (
    <Grid spacing={3} container>
      {isPending
        ? Array.from({ length: 4 }, (_, i) => (
            <Grid xs={12} md={6} lg={3} item key={i}>
              <HoverCard
                sx={{ p: 2 }}
                defaultElevation={4}
                hoveredElevation={4}
              >
                <Stack>
                  <Skeleton
                    sx={{ borderRadius: 3 }}
                    variant="rectangular"
                    height={130}
                  />
                  <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton
                    sx={{ mb: 0.5 }}
                    variant="circular"
                    width={30}
                    height={30}
                  />
                  <Skeleton variant="rounded" height={30} />
                </Stack>
              </HoverCard>
            </Grid>
          ))
        : blogs &&
          blogs.map((blog, index) => {
            return (
              <Grid xs={12} md={6} lg={3} item key={index}>
                <Blog blog={blog} />
              </Grid>
            );
          })}
    </Grid>
  );
};

export default BlogItems;
