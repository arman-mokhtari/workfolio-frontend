"use client";
// ** React Imports
import { useState } from "react";

// ** MUI Imports
import { Box, Card } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import { styled } from "@mui/material/styles";
import MuiTab from "@mui/material/Tab";

// ** Icons Imports
import { PersonOutline, LockOpenOutlined } from "@mui/icons-material";

// ** Third Party Styles Imports
import "react-datepicker/dist/react-datepicker.css";
import TabAccount from "./tabAccount";
import TabSecurity from "./tabSecurity";

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    minWidth: 100,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: 67,
  },
}));

const TabName = styled("span")(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: "0.875rem",
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState("account");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="account-settings tabs"
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value="account"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PersonOutline />
                <TabName
                sx={{
                  fontWeight:"700"
                }}
                >حساب کاربری</TabName>
              </Box>
            }
          />
          <Tab
            value="security"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LockOpenOutlined />
                <TabName sx={{
                  fontWeight:"700"
                }}>تغییر کلمه عبور</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value="account">
          <TabAccount />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="security">
          <TabSecurity />
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default AccountSettings;
