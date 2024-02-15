import { Grid, TextField } from "@mui/material";
import { productsFormData } from "@/constants/adminCreateProduct";
import AdminSelectCategoriesEdit from "./selectCategory";
import AutocompleteTagsEdit from "./autoCompleteTags";

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
      <Grid item xs={11.9} md={12}></Grid>
      {productsFormData.map((item, i) => {
        const value =
          productData && productData[item?.name] ? productData[item.name] : "";
        return (
          <Grid item key={i} xs={12} sm={6}>
            <TextField
              label={item.label}
              name={item.name}
              type={item.type}
              value={value}
              onChange={productDataOnChange}
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

export default ProductFormBaseData;
