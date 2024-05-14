import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AdminSelectCategories = ({
  handleSetCategory,
  selectedCategory,
  categories,
}) => {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>دسته‌بندی</InputLabel>
        <Select
          id="category"
          label="دسته‌بندی"
          onChange={handleSetCategory}
          defaultValue={selectedCategory}
        >
          {categories?.map((category, i) => {
            return (
              <MenuItem key={i} value={category._id}>
                {category.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
export default AdminSelectCategories;
