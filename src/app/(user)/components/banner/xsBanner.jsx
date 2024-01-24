import { Box, Stack } from "@mui/material";
import Image from "next/image";
import ShopNow from "@/components/buttons/shopNow";
import ContactBtn from "@/components/buttons/contactBtn";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";

const banner = "https://cdn.workfolio.ir/images/bg/xs-banner.png";

const XsBanner = ({ isLoading }) => {
  return (
    <Box>
      <Box
        sx={{
          "& img": {
            objectFit: "cover",
          },
        }}
      >
        <Image
          alt="طراحی وبسایت و خدمات وب"
          src={banner}
          placeholder="blur"
          blurDataURL={banner}
          quality={100}
          priority
          fill
          sizes="100vw"
        />
      </Box>
      <TopAbsoluteShadow height="12%" />
      <Box
        sx={{
          height: "calc(100vh - 60px)",
          mb: 3,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "25%",
            left: "2.5rem",
          }}
        >
          <Stack direction="column" spacing={2}>
            <ContactBtn loading={isLoading} />

            <ShopNow
              loading={isLoading}
              variant="contained"
              text="برو به صفحه محصولات"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default XsBanner;
