import { useIsUpLg } from "@/hooks/useMediaQueries";
import FooterGridLayout from "./footerLayout";
import NewsletterForm from "./newsletterForm";
import { Box, Typography } from "@mui/material";

const SecondGrid = () => {
  const isBigScreen = useIsUpLg();

  return (
    <FooterGridLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: isBigScreen ? "70%" : "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              ml: 2,
              mb: 1,
            }}
          >
            خبرنامه
          </Typography>
          <NewsletterForm />
        </Box>
      </Box>
    </FooterGridLayout>
  );
};

export default SecondGrid;
