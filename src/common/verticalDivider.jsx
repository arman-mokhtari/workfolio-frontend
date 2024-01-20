import { Divider } from "@mui/material";

const VerticalDivider = ({ variant }) => {
  return (
    <Divider
      sx={{
        mx: 1,
      }}
      orientation="vertical"
      variant={variant}
      flexItem
    />
  );
};

export default VerticalDivider;
