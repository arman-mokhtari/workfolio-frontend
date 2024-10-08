import Link from "next/link";
import LoadingBtn from "@/common/loadingBtn";

const ShopNow = ({ mt, ml, fullWidth, text, variant }) => {
  return (
    <LoadingBtn
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
      text={text}
    />
  );
};

export default ShopNow;
