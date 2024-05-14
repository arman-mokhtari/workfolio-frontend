import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  Stack,
} from "@mui/material";

const PaymentTextarea = ({ handleInputChange }) => {
  return (
    <Accordion
      sx={{
        borderRadius: 2,
        "&::before": {
          display: "none",
        },
        mb: 2,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
            }}
          >
            توضیحات تکمیلی
          </Typography>

          <Typography variant="caption">{"(اختیاری)"}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            my: 1.5,
            fontSize: "0.95rem",
          }}
        >
          <TextField
            type="text"
            fullWidth
            multiline
            rows={5}
            size="small"
            name="message"
            sx={{
              color: "#037fff",
            }}
            label="توضیحات تکمیلیِ سفارش را برای ما بنویسید..."
            variant="outlined"
            onChange={handleInputChange}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default PaymentTextarea;
