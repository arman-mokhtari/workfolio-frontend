import { Grid, TextField } from "@mui/material";
import { productsFormData } from "@/constants/adminCreateProduct";
import AutocompleteTagsEdit from "./autoCompleteTags";
import { pageFormData } from "@/constants/pagesData/pageFormData";

const PageFormBaseData = ({
  tags,
  handleTagsChange,
  pageData,
  pageDataOnChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
      <Grid item xs={11.9} md={12}></Grid>
      {pageFormData.map((item, i) => {
        const value =
          pageData && pageData[item?.name] ? pageData[item.name] : "";
        return (
          <Grid item key={i} xs={12} sm={6}>
            <TextField
              label={item.label}
              name={item.name}
              value={value}
              onChange={pageDataOnChange}
              fullWidth
            />
          </Grid>
        );
      })}

      <Grid item xs={12} sm={6}>
        <AutocompleteTagsEdit tags={tags} handleTagsChange={handleTagsChange} />
      </Grid>
    </Grid>
  );
};

export default PageFormBaseData;
