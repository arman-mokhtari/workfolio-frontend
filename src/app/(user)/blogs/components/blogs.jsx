
import { Grid } from "@mui/material";
import Blog from "./blog";

const BlogItems = ({ blogs }) => {
 

  return (
    <Grid spacing={3} container>
      {blogs.map((blog,index) => {
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
