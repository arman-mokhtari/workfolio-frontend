import { Box, Stack } from "@mui/material";
import Image from "next/image";
import ShopNow from "@/common/buttons/shopNow";
import ContactBtn from "@/common/buttons/contactBtn";
import TopAbsoluteShadow from "@/common/topAbsoluteShadow";

const XsBanner = () => {
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
          src="/assets/bg/xs-banner.webp"
          placeholder="blur"
          blurDataURL="/assets/bg/xs-banner.webp"
          quality={100}
          priority
          fill
          sizes="100vw"
        />
      </Box>
      <TopAbsoluteShadow height="12%" />
      <Box
        sx={{
          display: "flex",
          height: "calc(100svh - 60px)",
          flexDirection: "column",
          justifyContent: "space-around",
          mb: 3,
        }}
      >
        <Box
          sx={{
            px: 2,
            zIndex: 3,
            width: 1,
            flex: 0.6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Stack direction="column" spacing={2}>
              <ContactBtn />

              <ShopNow variant="contained" text="برو به صفحه محصولات" />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default XsBanner;
