import { Box } from "@mui/material";
import ContactUsForm from "../../../components/main/contact/contactUsForm";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";
import Image from "next/image";

const Page = () => {

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "none",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          "& img": {
            objectFit: "cover",
          },
        }}
      >
        <Image
          alt="طراحی وبسایت و خدمات وب"
          priority
          src="/assets/bg/contact.webp"
          placeholder="blur"
          blurDataURL="/assets/bg/contact.webp"
          quality={100}
          fill
          sizes="100vw"
        />
      </Box>
      <TopAbsoluteShadow height="70%" />
      <ContactUsForm />
    </Box>
  );
};

export default Page;
