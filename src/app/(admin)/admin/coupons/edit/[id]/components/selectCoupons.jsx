import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EditSelectCoupons = ({ defaultValue, onChangeSelect, products }) => {
  const def = defaultValue.map((product) => product._id);

  const renderSelectedText = (selected) => {
    const selectedProducts = selected.map((id) =>
      products && products.find((product) => product._id === id)
    );
    const limitedSelection = selectedProducts.slice(0, 1);
    const remainingCount = selectedProducts.length - 1;

    const selectedText = limitedSelection.map((product) =>
      product ? product.title : ""
    );
    const remainingText =
      remainingCount > 0 ? ` و ${remainingCount} مورد دیگر` : "";

    return `${selectedText.join(", ")}${remainingText}`;
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>ویرایش کد تخفیف</InputLabel>
        <Select
          multiple
          id="category"
          label="ویرایش کد تخفیف"
          onChange={onChangeSelect}
          defaultValue={def ? def : [""]}
          renderValue={(selected) => renderSelectedText(selected)}
        >
          {products?.map((product, i) => (
            <MenuItem key={i} value={product._id}>
              {product.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EditSelectCoupons;
