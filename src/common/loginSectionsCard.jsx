"use client";
import Logo from "@/common/logo";
import { Container, Typography } from "@mui/material";
import HoverCard from "@/common/hoverCard";

const LoginSectionsCard = ({ title, children, mb }) => {

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        mb: mb,
      }}
    >
      <HoverCard
        defaultElevation={4}
        hoveredElevation={10}
        sx={{
          width: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#037fff",
          },
          "& .MuiInputBase-root:focus-within .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#037fff",
            },
          "& .MuiFormHelperText-root": {
            color: "#f44336",
          },
        }}
      >
        <Logo />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          component="h1"
          variant="h2"
          noWrap
        >
          {title}
        </Typography>
        {children}
      </HoverCard>
    </Container>
  );
};

export default LoginSectionsCard;
