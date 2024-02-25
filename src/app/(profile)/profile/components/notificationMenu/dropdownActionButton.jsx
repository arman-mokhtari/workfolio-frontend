import { Button } from "@mui/material";
import { MenuItem } from "./dropdownMainContent";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateAllNotifications } from "@/hooks/useNotefication";

const DropdownActionButton = ({ notifications }) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useUpdateAllNotifications();
  const updateHandler = async () => {
    try {
      await mutateAsync();
      queryClient.invalidateQueries({ queryKey: ["get-Notifications"] });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MenuItem
      disableRipple
      sx={{
        py: 3.5,
        borderBottom: 0,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Button
        onClick={updateHandler}
        sx={{ whiteSpace: "nowrap" }}
        aria-label="update aria"
        fullWidth
        variant="contained"
        disabled={notifications.length <= 0}
      >
        تغییر وضعیت همه به خوانده شده!
      </Button>
    </MenuItem>
  );
};

export default DropdownActionButton;
