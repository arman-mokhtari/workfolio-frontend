import { Menu, IconButton, Badge, Tooltip, Fade } from "@mui/material";
import { NotificationsNone } from "@mui/icons-material";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

const NotificationLayout = ({
  children,
  notificationNum,
  handleDropdownOpen,
  handleDropdownClose,
  notificationLabel,
  anchorEl,
  theme,
}) => {
  return (
    <>
      <Tooltip
        arrow
        placement="right"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        title={notificationLabel}
      >
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              top: 10,
            },
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={toPersianNumbers(notificationNum)}
          invisible={notificationNum <= 0}
          color="error"
        >
          <IconButton
            color="inherit"
            aria-haspopup="true"
            onClick={handleDropdownOpen}
            aria-controls="customized-menu"
            aria-label="dropdown area"
            sx={{ p: 0 }}
          >
            <NotificationsNone
              sx={{
                fontSize: "2rem",
              }}
            />
          </IconButton>
        </Badge>
      </Tooltip>

      <Menu
        sx={{
          "& .MuiMenu-paper": {
            width: 380,
            overflow: "hidden",
            marginTop: theme.spacing(4),
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          },
          "& .MuiMenu-list": {
            padding: 0,
          },
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {children}
      </Menu>
    </>
  );
};

export default NotificationLayout;
