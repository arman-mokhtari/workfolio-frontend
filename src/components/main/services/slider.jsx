"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Box } from "@mui/material";
import Image from "next/image";

const ServicesSlider = () => {
  const parallax = useRef(null);

  return (
    <Box sx={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer className="first-parallax" offset={1} speed={1} />
        <ParallaxLayer className="second-parallax" offset={2} speed={1} />

        <ParallaxLayer
          className="star-parallax"
          offset={0}
          speed={0}
          factor={3}
        />

        <ParallaxLayer className="pointer-events" offset={1.3} speed={-0.3}>
          <Image
            priority
            className="satellite"
            src="/assets/svg/about-slider/satellite.svg"
            alt="satellite"
            width="100"
            height="100"
          />
        </ParallaxLayer>

        <ParallaxLayer className="opacity-1" offset={1} speed={0.8}>
          <Image
            priority
            className="ml-55"
            src="/assets/svg/about-slider/cloud.svg"
            alt="parallax"
            width="100"
            height="100"
          />
          <Image
            priority
            className="ml-15"
            src="/assets/svg/about-slider/cloud.svg"
            alt="parallax"
            width="100"
            height="100"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} className="opacity-1">
          <Image
            priority
            className="ml-70"
            src="/assets/svg/about-slider/cloud.svg"
            alt="parallax"
            width="100"
            height="100"
          />
          <Image
            priority
            className="ml-40"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} className="opacity-2">
          <Image
            priority
            className="ml-10"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
          <Image
            priority
            className="ml-75"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} className="opacity-4">
          <Image
            priority
            className="ml-60"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
          <Image
            priority
            className="width-25-block"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
          <Image
            priority
            className="width-10-block"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} className="opacity-6">
          <Image
            priority
            className="width-20-block"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
          <Image
            priority
            className="width-15-block"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/cloud.svg"
          />
        </ParallaxLayer>

        <ParallaxLayer
          className="pointer-events flex-center"
          offset={2.5}
          speed={-0.4}
        >
          <Image
            priority
            className="width-60"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/earth.svg"
          />
        </ParallaxLayer>

        <ParallaxLayer className="clients" offset={2} speed={-0.3} />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          className="flex-center"
        >
          <Image
            priority
            className="width-20"
            src="/assets/svg/about-slider/server.svg"
            alt="parallax"
            width="100"
            height="100"
          />
        </ParallaxLayer>

        <ParallaxLayer
          className="flex-center"
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <Image
            priority
            className="width-40"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/bash.svg"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          className="flex-center"
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Image
            priority
            className="width-40"
            alt="parallax"
            width="100"
            height="100"
            src="/assets/svg/about-slider/client.svg"
          />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default ServicesSlider;
