import { Box, CircularProgress } from "@mui/material";
export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
}
