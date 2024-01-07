import { Grid, TextField } from "@mui/material";
import AdminSelectCategoriesEdit from "./selectCategory";

import AutocompleteTagsEdit from "./autoCompleteTags";

import { blogsFormData } from "@/constants/blog/adminCreateBlog";

const BlogEditFormBaseData = ({
  tags,
  handleTagsChange,
  blogData,
  blogDataOnChange,
  categories,
  handleSetCategory,
  selectedCategory,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
      <Grid item xs={11.9} md={12}></Grid>
      {blogsFormData.map((item, i) => {
        const value =
          blogData && blogData[item?.name] ? blogData[item.name] : "";
        return (
          <Grid item key={i} xs={12} sm={6}>
            <TextField
              label={item.label}
              name={item.name}
              value={value}
              onChange={blogDataOnChange}
              fullWidth
            />
          </Grid>
        );
      })}

      <Grid item xs={12} sm={6}>
        <AutocompleteTagsEdit tags={tags} handleTagsChange={handleTagsChange} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <AdminSelectCategoriesEdit
          handleSetCategory={handleSetCategory}
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </Grid>
    </Grid>
  );
};

export default BlogEditFormBaseData;
