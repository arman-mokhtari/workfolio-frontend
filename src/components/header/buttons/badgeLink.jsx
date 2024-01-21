import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Link from "next/link";

const BadgeLink = ({ badgeContent }) => {
  return (
    <Link href="/cart">
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        badgeContent={toPersianNumbers(badgeContent)}
        invisible={!badgeContent > 0}
        color="primary"
      >
        <ShoppingCartOutlined
        />
      </Badge>
    </Link>
  );
};

export default BadgeLink;
