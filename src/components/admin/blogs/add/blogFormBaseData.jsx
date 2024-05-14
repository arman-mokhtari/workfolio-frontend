
import {
  Grid,
  TextField,

} from "@mui/material";
import AutocompleteTags from "./autoCompleteTags";

import AdminSelectCategories from "./selectCategories";
import { blogsFormData } from "@/constants/blog/adminCreateBlog";

const BlogFormBaseData = ({
    tags,
    handleTagsChange,
    blogData,
    blogDataOnChange,
    categories,
    handleSetCategory,
    selectedCategory}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            {blogsFormData.map((item, i) => {
              const value =
              blogData && blogData[item?.name]
                  ? blogData[item.name]
                  : "";
              return (
                <Grid item key={i} xs={12} sm={6}>
                  <TextField
                    label={item.label}
                    name={item.name}
                    value={value}
                    type={item.type}
                    onChange={blogDataOnChange}
                    fullWidth
                  />
                </Grid>
              );
            })}

            <Grid item xs={12} sm={6}>
              <AutocompleteTags
                tags={tags}
                handleTagsChange={handleTagsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AdminSelectCategories
                handleSetCategory={handleSetCategory}
                selectedCategory={selectedCategory}
                categories={categories}
              />
            </Grid>
          </Grid>
  )
}

export default BlogFormBaseData