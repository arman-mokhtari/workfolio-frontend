import {Stack}from "@mui/material"

const XsUpCategoryLayout = ({ children }) => {
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        width: 1,
      }}
    >
      {children}
    </Stack>
  );
};

export default XsUpCategoryLayout;
