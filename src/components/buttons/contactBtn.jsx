import { Button } from "@mui/material";

const ContactBtn = ({ mt, ml }) => {
  return (
    <Button
      component="a"
      href="tel:+989125048616"
      sx={{
        mt: mt,
        ml: ml,
        fontWeight: "500",
        whiteSpace: "nowrap",
      }}
      variant="contained"
      color="warning"
    >
      با ما تماس بگیرید
    </Button>
  );
};

export default ContactBtn;
