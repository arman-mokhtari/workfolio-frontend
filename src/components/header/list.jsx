import { Box, Tab } from "@mui/material";
import { navItems } from "@/constants/tabsData";
import Link from "next/link";
import { AccountCircleRounded, AdminPanelSettings } from "@mui/icons-material";
import { useGetUser } from "@/hooks/useAuth";

const AppBarList = ({ display, flexDirection }) => {
  const { data, error, isLoading } = useGetUser();
  const { user, cart } = data || {};

  return (
    <Box
      sx={{
        flexDirection: flexDirection,

        "& a": {
          minHeight: 63,
          display: "flex",
          fontWeight: "700",
        },
        "& a:hover": {
          color: "primary.main",
        },
        display: display,
      }}
    >
      {navItems.map(({ icon, to, text }, i) => (
        <Tab
          sx={{
            whiteSpace: "nowrap",
          }}
          iconPosition="start"
          icon={icon}
          key={i}
          component={Link}
          href={to}
          label={text}
        />
      ))}
      {user && user.role === "ADMIN" && (
        <Tab
          iconPosition="start"
          icon={
            <AdminPanelSettings
              sx={{
                fontSize: "1.2rem",
              }}
            />
          }
          component={Link}
          href="/admin"
          label="ادمین پنل"
        />
      )}
      {user && (
        <Tab
          iconPosition="start"
          icon={
            <AccountCircleRounded
              sx={{
                fontSize: "1.2rem",
              }}
            />
          }
          component={Link}
          href="/profile"
          label="پنل کاربر"
        />
      )}
    </Box>
  );
};

export default AppBarList;
