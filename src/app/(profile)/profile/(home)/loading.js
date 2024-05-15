import { Box, CircularProgress } from "@mui/material";
export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "calc(100vh - 64px)",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
      }}
    >
      <CircularProgress aria-label="loading" size={60} />
    </Box>
  );
}
