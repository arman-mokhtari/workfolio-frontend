import { Button } from "@mui/material";
import Link from "next/link";

const ShopNow = ({ mt, ml, fullWidth, text, variant }) => {
  return (
    <Button
      fullWidth={fullWidth}
      role="link"
      component={Link}
      href="products"
      aria-label="رفتن به صفحه محصولات"
      sx={{
        mt: mt,
        ml: ml,
        fontWeight: "500",
        whiteSpace: "nowrap",
      }}
      variant={variant}
      color="primary"
    >
      {text}
    </Button>
  );
};

export default ShopNow;
