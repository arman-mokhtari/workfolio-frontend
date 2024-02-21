import { Box, Typography } from "@mui/material";
import { MenuItem } from "./dropdownMainContent";

const EmptyBox = () => {
  return (
    <MenuItem>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Typography variant="caption" sx={{ color: "text.disabled" }}>
          فاقد پیام!
        </Typography>
      </Box>
    </MenuItem>
  );
};

export default EmptyBox;
