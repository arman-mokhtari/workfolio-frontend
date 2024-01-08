import { Box } from "@mui/material";
import ContactUsForm from "./components/contactUsForm";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";

const Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: "none",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: "400px",
          width: 1,
          backgroundImage: "url('https://cdn.workfolio.ir/images/bg/contact.png')",
          backgroundPosition: "bottom",
          zIndex: -1,
        }}
      />
      <TopAbsoluteShadow/>
      <ContactUsForm />
    </Box>
  );
};

export default Page;
