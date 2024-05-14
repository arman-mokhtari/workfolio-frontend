import { Box } from "@mui/material";
import ContactSection from "../../../../components/main/general/contact/contactSection";
import MayAlsoLike from "@/common/mayAlsoLike";

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
      <MayAlsoLike />
      <ContactSection />
    </>
  );
}
