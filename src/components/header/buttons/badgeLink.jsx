import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Link from "next/link";

const BadgeLink = ({ badgeContent }) => {
  return (
    <Link role="link" aria-label="رفتن به صفحه کارت" href="/cart">
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        badgeContent={badgeContent}
      >
        <ShoppingCartOutlined />
      </Badge>
    </Link>
  );
};

export default BadgeLink;
