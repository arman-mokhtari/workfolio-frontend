import { Chip, Box, Typography } from "@mui/material";
import { MenuItem } from "./dropdownMainContent";

const NotificationHeader = ({ notificationLabel }) => {
  return (
    <MenuItem disableRipple>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>پیام‌ها</Typography>
        <Chip
          size="small"
          label={notificationLabel}
          color="primary"
          sx={{
            height: 20,
            fontSize: "0.75rem",
            fontWeight: 500,
            borderRadius: "10px",
          }}
        />
      </Box>
    </MenuItem>
  );
};

export default NotificationHeader;
