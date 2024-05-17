"use client";

import ChipDivider from "@/common/chipDivider";
import HoverCard from "@/common/hoverCard";
import Loading from "@/common/loading";
import { settings } from "@/constants/review/sliderSetting";
import { useGetAllProducts } from "@/hooks/useProducts";
import { Box, C } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const MayAlsoLike = () => {
  const { isLoading, data } = useGetAllProducts();
  const { products } = data || {};
  if (isLoading) return <Loading />;
  return (
    <Box sx={{ px: 1.5, mt: 2 }}>
      <ChipDivider mb={3} mt={4} title="قالب‌های پیشنهادی برای شما!" />
      <Slider {...settings}>
        {products.map(({ imageLink, slug, title }, i) => (
          <Box
            component="div"
            dir="rtl"
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HoverCard
              defaultElevation={4}
              hoveredElevation={10}
              square={true}
              sx={{
                position: "relative",
                overflow: "visible",
                mb: 3.5,
                mx: 1,
                borderRadius: 3,
                "& img": {
                  objectFit: "cover",
                  borderRadius: 3,
                  width: "100% !important",
                  height: "auto !important",
                },
              }}
            >
              <Link
                href={`/products/${slug}`}
                title={title}
                role="link"
                aria-label="link"
              >
                <Image
                  src={imageLink}
                  priority
                  placeholder="blur"
                  blurDataURL="/screenshots/web_design_2.png"
                  height="400"
                  width="400"
                  alt={title}
                />
              </Link>
            </HoverCard>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MayAlsoLike;
