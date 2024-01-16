import { Box, CircularProgress } from "@mui/material";
export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
      }}
    >
      <CircularProgress size={45} />
    </Box>
  );
}
