import { Box } from "@mui/material";
import ContactUsForm from "./components/contactUsForm";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";
import Image from "next/image"

const Page = () => {
  const banner = "https://cdn.workfolio.ir/images/bg/contact.png"
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
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
          src={banner}
          placeholder="blur"
          blurDataURL={banner}
          quality={100}
          fill
          sizes="100vw"
        />
      </Box>
      <TopAbsoluteShadow/>
      <ContactUsForm />
    </Box>
  );
};

export default Page;
