import FooterGridLayout from "./footerLayout";
import NewsletterForm from "./newsletterForm";
import { Box } from "@mui/material";

const SecondGrid = () => {
  return (
    <FooterGridLayout px={5} title="خبرنامه">
      <Box>
        <Box
          sx={{
            width: 1,
          }}
        >
          <NewsletterForm />
        </Box>
      </Box>
    </FooterGridLayout>
  );
};

export default SecondGrid;
