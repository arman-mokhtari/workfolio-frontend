"use client";

import { useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import Typed from "typed.js";
import { Box, Typography } from "@mui/material";

const TypedInfo = () => {
  const theme = useTheme();

  const infoEl = useRef(null);

  useEffect(() => {
    const strings = [
      "پرتفولیو برتر، برای جذب کارفرمایان جدید.",
      "طراحی&zwnj;های مدرن و تماما واکنش&zwnj;گرا.",
      "طراحی&zwnj;شده برای ایندکس سریع سئو.",
      "متمایز از تمامی طرح&zwnj;های آماده موجود در بازار.",
      "هر پرتفولیو سفارشی و فقط برای شما طراحی می&zwnj;شود.",
    ];
    const typedInfo = new Typed(infoEl.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });
    return () => {
      typedInfo.destroy();
    };
  }, []);

  return (
    <Box
      sx={{
        ml: 1.5,
        maxHeight: "40px",
      }}
    >
      <Typography
        ref={infoEl}
        variant="h2"
        sx={{
          fontWeight: "600",
          fontSize: "1.2rem",
          position: "absolute",
          zIndex: "500",
          [theme.breakpoints.only("xs")]: {
            fontSize: "1.1rem",
          },
        }}
      />
    </Box>
  );
};

export default TypedInfo;
