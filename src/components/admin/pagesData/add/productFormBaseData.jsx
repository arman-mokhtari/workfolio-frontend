import AutocompleteTags from "./autoCompleteTags";
import { pageFormData } from "@/constants/pagesData/pageFormData";

import { Grid, TextField } from "@mui/material";

const ProductFormBaseData = ({
  tags,
  handleTagsChange,
  pageData,
  pageDataOnChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
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
        <AutocompleteTags tags={tags} handleTagsChange={handleTagsChange} />
      </Grid>
    </Grid>
  );
};

export default ProductFormBaseData;
