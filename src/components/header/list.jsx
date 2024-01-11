import { Box, Tab, Skeleton } from "@mui/material";
import { navItems } from "@/constants/tabsData";
import Link from "next/link";
import { AccountCircleRounded, AdminPanelSettings } from "@mui/icons-material";
import { useGetUser } from "@/hooks/useAuth";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const AppBarList = ({ display, flexDirection }) => {
  const isSmallScreen = useIsOnlyXs();

  const { data, isLoading } = useGetUser();
  const { user } = data || {};

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
      {navItems.map(({ icon, to, text }, i) => {
        return isLoading ? (
          <Box
          key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              mr: !isSmallScreen && 1.5,
            }}
          >
            <Skeleton
              sx={{
                display: "flex",
                alignSelf: "center",
              }}
              width={isSmallScreen ? 50 : 100}
            />
          </Box>
        ) : (
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
        );
      })}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mx: !isSmallScreen && 1.5,
          }}
        >
          <Skeleton
            sx={{
              display: "flex",
              alignSelf: "center",
            }}
            width={isSmallScreen ? 50 : 100}
          />
        </Box>
      ) : (
        user && (
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
        )
      )}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Skeleton
            sx={{
              display: "flex",
              alignSelf: "center",
            }}
            width={isSmallScreen ? 50 : 100}
          />
        </Box>
      ) : (
        user &&
        user.role === "ADMIN" && (
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
            label="پنل ادمین"
          />
        )
      )}
    </Box>
  );
};

export default AppBarList;
