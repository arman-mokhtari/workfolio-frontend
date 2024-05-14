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
import ChipDivider from "@/common/chipDivider";

const FaqsSection = ({ faqs }) => {
  const theme = useTheme();
  return (
    <>
      <ChipDivider
        title="سوالات متداول:"
        mt={3}
        mb={4}
        color={theme.palette.success.main}
        
      />

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
