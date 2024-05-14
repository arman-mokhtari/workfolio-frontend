import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { categoryTypes } from "@/constants/categoryTypesData";

const AdminSelectCategoriesEdit = ({ handleSetCategory, selectedCategory }) => {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>دسته‌بندی</InputLabel>
        <Select
          id="category"
          label="دسته‌بندی"
          onChange={handleSetCategory}
          defaultValue={selectedCategory ? selectedCategory.value : ""}
        >
          {categoryTypes?.map((category, i) => {
            return (
              <MenuItem key={i} value={category.value}>
                {category.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
export default AdminSelectCategoriesEdit;
