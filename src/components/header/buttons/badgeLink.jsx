import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Link from "next/link";

const BadgeLink = ({ badgeContent }) => {
  return (
    <Link role="link" aria-label="رفتن به صفحه کارت" href="/cart">
      <Badge
        color="primary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        badgeContent={toPersianNumbers(badgeContent)}
        invisible={!badgeContent > 0}
      >
        <ShoppingCartOutlined />
      </Badge>
    </Link>
  );
};

export default BadgeLink;
