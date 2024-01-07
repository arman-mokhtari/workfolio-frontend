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
        badgeContent={badgeContent}
        color="primary"
      >
        <ShoppingCartOutlined
          sx={{
            color: "text.primary",
          }}
        />
      </Badge>
    </Link>
  );
};

export default BadgeLink;
