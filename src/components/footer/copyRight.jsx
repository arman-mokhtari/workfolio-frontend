"use client";
import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import SocialLinks from "@/components/footer/socialLinks"
import { currentPersianDate } from "@/utils/toLocalDate";
const CopyRight = ({ dividerDisplay }) => {
  const theme = useTheme();


  const year =  currentPersianDate();

  return (
    <Box
      sx={{
        w: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SocialLinks/>
      <Divider
        sx={{
          borderWidth: "1px",
          display: dividerDisplay,
        }}
        orientation="horizontal"
        variant="middle"
        flexItem
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "text.secondary",
          justifyContent: "center",
          height: "3rem",
          "& a": {
            textDecoration: "none",
            color: "text.secondary",
          },
          "& a:hover": {
            color: "#037fff",
          },
        }}
      >
        <Typography 
        sx={{
          fontSize:"0.9rem !important",
          [theme.breakpoints.only("xs")]: {
            fontSize: "0.7rem !important",
          },
          whiteSpace: "nowrap"
        }}
        variant="body1">تمامی حقوق برای سایت <Link
        role="link"
        aria-label="وبسایت ورکفولیو" title="وبسایت ورکفولیو" href="/">ورکفولیو</Link> محفوظ است. کپی‌رایت © {year}</Typography>
      </Box>
    </Box>
  );
};

export default CopyRight;
