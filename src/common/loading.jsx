import { Box, CircularProgress } from "@mui/material";

const Loading = ({ size, mt, mr,mx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      
        mt: mt,
        mr: mr,
        mx:mx
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loading;
