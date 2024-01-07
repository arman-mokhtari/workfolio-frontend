import AutocompleteTags from "./autoCompleteTags";
import { productsFormData } from "@/constants/adminCreateProduct";
import AdminSelectCategories from "./selectCategories";

import { Grid, TextField } from "@mui/material";

const ProductFormBaseData = ({
  tags,
  handleTagsChange,
  productData,
  productDataOnChange,
  categories,
  handleSetCategory,
  selectedCategory,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
      {productsFormData.map((item, i) => {
        const value =
          productData && productData[item?.name] ? productData[item.name] : "";
        return (
          <Grid item key={i} xs={12} sm={6}>
            <TextField
              label={item.label}
              name={item.name}
              value={value}
              onChange={productDataOnChange}
              fullWidth
            />
          </Grid>
        );
      })}

      <Grid item xs={12} sm={6}>
        <AutocompleteTags tags={tags} handleTagsChange={handleTagsChange} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <AdminSelectCategories
          handleSetCategory={handleSetCategory}
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </Grid>
    </Grid>
  );
};

export default ProductFormBaseData;
