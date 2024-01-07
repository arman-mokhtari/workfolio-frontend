import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {Select} from "@mui/material";

const AdminSelectCoupons = ({ defaultValue, onChangeSelect, products }) => {
  
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>محصولات</InputLabel>
        <Select
          multiple
          id="coupon"
          label="محصولات"
          onChange={onChangeSelect}
          defaultValue={defaultValue}
        >
          {products?.map((product, i) => {
            return (
              <MenuItem key={i} value={product._id}>
                {product.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
export default AdminSelectCoupons;
