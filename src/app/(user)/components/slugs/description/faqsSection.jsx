"use client";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  CardHeader,
  Chip,
} from "@mui/material";

const FaqsSection = ({ faqs }) => {
  const theme = useTheme();
  return (
    <>
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
      <Box
        sx={{
          mb: 3,
        }}
      >
        {faqs.map(({ question, answer }, index) => {
          return (
            <Accordion
              sx={{
                "& .MuiTypography-root": {
                  [theme.breakpoints.only("xs")]: {
                    fontSize: "0.9rem",
                  },
                },
              }}
              component="details"
              key={index}
            >
              <AccordionSummary component="summary" expandIcon={<ExpandMore />}>
                <Typography
                  component="h3"
                  sx={{
                    color: "#00796b",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                  }}
                >
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </>
  );
};

export default FaqsSection;
