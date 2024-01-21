"use client";
import HoverCard from "@/common/hoverCard";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Box,
  Divider,
  CardHeader,
  Chip
} from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import FaqsSection from "./faqsSection";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const MainDescription = ({ blog }) => {
  const theme = useTheme();

  const isSmallScreen = useIsOnlyXs();

  const { description, faqs } = blog;

  return (
    <Grid component="article" item xs={12} md={9}>
      <HoverCard
        sx={{
          p: 2,
          "& figcaption": {
            backgroundColor:
              theme.palette.mode === "light" ? "#f7f7f7" : "#1a1a1a",
          },
          "& figure.image": {
            float: isSmallScreen ? "none" : "right",
            width: isSmallScreen ? "100% !important" : "50% !important",
            m: isSmallScreen && "0 !important",
            my: 1.5,
            mr: 0,
            ml: 2.5,
          },
        }}
        defaultElevation={4}
        hoveredElevation={10}
      >
        <Box
          className="custom_workfolio_desc"
          sx={{
            lineHeight: 1.7,
            "& h2": {
              fontSize: "1.2rem",
            },
          }}
        >
          {ReactHtmlParser(description)}
          <Box className="clearfix" />
        </Box>

        <Divider
          sx={{
            borderWidth: "1px",
            mb: 4,
            mt: 3,
          }}
          orientation="horizontal"
          variant="middle"
          flexItem
        >
          <Chip
            sx={{
              "& .MuiTypography-root": {
                [theme.breakpoints.only("xs")]: {
                  fontSize: "1.1rem",
                },
                fontSize: "1.4rem",
                fontWeight: "600",
              },
              my: 0,
            }}
            label={
              <CardHeader
                title="سوالات متداول:"
                sx={{
                  color: theme.palette.success.main,
                }}
              />
            }
          />
        </Divider>

        {faqs && <FaqsSection faqs={faqs} />}
      </HoverCard>
    </Grid>
  );
};

export default MainDescription;
