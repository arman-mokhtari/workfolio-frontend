import { Box } from "@mui/material";
import ServicesSlider from "../../../components/main/services/slider";
const ServicesPage = () => {
  return (
    <Box
      sx={{
        "& .muirtl-10145e5 > div": {
          top: 0,
          overFlow: "hidden",
          "::-webkit-scrollbar": {
            width: 0,
            height: 0,
          },
        },
      }}
    >
      <ServicesSlider />
    </Box>
  );
};

export default ServicesPage;
