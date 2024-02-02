import { Box } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <Box
      sx={{
        px: 1.5,
        overflow: "hidden",
        pb: 3,
      }}
    >
      {children}
    </Box>
  );
}
