import { CardContent, Typography, Divider } from "@mui/material";

import HoverCard from "@/common/hoverCard";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { toLocalDateString } from "@/utils/toLocalDate";
import ProductTree from "./treeView";

const PaymentDataCard = ({ payment }) => {
  const productTypographyMap = {
    _id: "شناسه",
    invoiceNumber: "شماره فاکتور",
    user: "خریدار",
    amount: "مبلغ نهایی",
    createdAt: "تاریخ فاکتور",
    isPaid: "وضعیت",
  };

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        position: "relative",
      }}
    >
      <CardContent>
        {Object.entries(productTypographyMap).map(([field, label]) => (
          <Typography key={field} variant="body2" sx={{ mt: 1.5 }}>
            {`${label}: ${
              field === "amount"
                ? toPersianNumbersWithComma(payment[field])
                : field === "createdAt"
                ? toLocalDateString(payment[field])
                : field === "user"
                ? payment.user
                  ? payment.user.name
                  : "کاربر ناشناس"
                : field === "isPaid"
                ? payment.isPaid
                  ? "پرداخت شده"
                  : "پرداخت نشده"
                : payment[field]
            }`}
          </Typography>
        ))}
        <Divider sx={{ my: 1.5 }} variant="middle" />
        <ProductTree cart={payment.cart} />
      </CardContent>
    </HoverCard>
  );
};

export default PaymentDataCard;
