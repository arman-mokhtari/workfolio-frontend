import { Box, Divider } from "@mui/material";

import AppBarList from "./list";
import Logo from "@/common/logo";

const AppBarDrawer = ({ handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: {
              left: 5,
              top: 5,
            },
          }}
        ></Box>

        <Logo my={2} fontSize="1.2rem" />
      </Box>

      <Divider />
      <AppBarList
        orientation="vertical"
      />
    </Box>
  );
};

export default AppBarDrawer;
