import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { categoryTypes } from "@/constants/categoryTypesData";

const SelectCategories = ({
    setSelectedType,
    selectedType,
}) => {

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>نوع</InputLabel>
        <Select
          id="type"
          label="نوع"
          onChange={setSelectedType}
          defaultValue={selectedType}
        >
          {categoryTypes.map((category, i) => {
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

export default SelectCategories;
