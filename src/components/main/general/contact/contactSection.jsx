"use client";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ContactBtn from "@/common/buttons/contactBtn";

const ContactSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: 1,
        height: "300px",
        px: 3,
        mt: 2,
        mb: 3,
        backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
        backgroundImage:
          theme.palette.mode === "dark"
            ? `linear-gradient(66deg, rgba(58,66,102,1) 0%, rgba(34,39,59,1) 100%)`
            : `linear-gradient(66deg, rgba(179,179,179,1) 0%, rgba(241,241,241,1) 100%)`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "1.2rem",
          lineHeight: "1.9rem",
          fontWeight: "bold",
          [theme.breakpoints.only("xs")]: {
            fontSize: "1rem",
          },
          [theme.breakpoints.only("sm")]: {
            fontSize: "1.1rem",
          },
          textAlign: "center",
        }}
      >
        همین حالا با بهترین ارائه دهنده قالب وبسایت تماس بگیرید و وارد دنیایی از
        خلاقیت و زیبایی شوید.
      </Typography>

      <ContactBtn mt="30px" />
    </Box>
  );
};

export default ContactSection;
