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
            flex: 0.5,
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
    </Box>
  );
};

export default XsBanner;
