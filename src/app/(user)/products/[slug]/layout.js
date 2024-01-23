import { Box } from "@mui/material";
import ContactSection from "../../components/contact/contactSection";

export default function RootLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          px: 1.5,
          overflow: "hidden",
          pb: 3,
        }}
      >
        {children}
      </Box>
      <ContactSection />
    </>
  );
}
