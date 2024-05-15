import {
  Box,
  Grid,
  Avatar,
  CardHeader,
  Typography,
  CardContent,
} from "@mui/material";

import {
  AttachMoney,
  Phonelink,
  Receipt,
} from "@mui/icons-material";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Loading from "@/common/loading";
import jalaliMoment from "jalali-moment";
import { toLocalDateStringMonth } from "@/utils/toLocalDate";
import HoverCard from "@/common/hoverCard";

const UserShoppingData = ({ payments, isLoading }) => {
  const currentDate = jalaliMoment();
  const calculateStats = () => {
    const startOfMonth = currentDate.clone().startOf("jMonth");
    const endOfMonth = currentDate.clone().endOf("jMonth");

    const filteredPayments = payments.filter((payment) =>
      jalaliMoment(payment.createdAt).isBetween(
        startOfMonth,
        endOfMonth,
        null,
        "[]"
      )
    );

    const totalPurchase = filteredPayments.reduce(
      (acc, payment) => acc + payment.amount,
      0
    );

    const numberOfInvoices = filteredPayments.length;

    const numberOfProducts = filteredPayments.reduce(
      (acc, payment) => acc + payment.cart.productDetail.length,
      0
    );

    return [
      {
        stats: toPersianNumbersWithComma(totalPurchase),
        title: "مجموع فروش",
        color: "primary",
        icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbersWithComma(numberOfInvoices),
        color: "success",
        title: "تعداد فاکتورها",
        icon: <Receipt sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbers(numberOfProducts),
        color: "warning",
        title: "تعداد محصولات",
        icon: <Phonelink sx={{ fontSize: "1.75rem" }} />,
      },
    ];
  };
  if (isLoading) return <Loading />;
  const renderStats = () => {
    const statsData = calculateStats();

    return statsData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: "common.white",
              backgroundColor: `${item.color}.main`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption">{item.title}</Typography>
            <Typography variant="h6">{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ));
  };

  return (
    <HoverCard
      sx={{
        width: 1,
      }}
      defaultElevation={4}
      hoveredElevation={10}
    >
      <CardHeader
        title="آمار فروشگاه"
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              وضعیت ورکفولیو
            </Box>{" "}
            😎 در ماه {toLocalDateStringMonth(currentDate)}
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <Box
        component={CardContent}
        sx={{ pt: (theme) => `${theme.spacing(1)} !important` }}
      >
        <Grid
          sx={{ justifyContent: "space-between", whiteSpace: "nowrap" }}
          container
          spacing={[5, 0]}
        >
          {renderStats()}
        </Grid>
      </Box>
    </HoverCard>
  );
};

export default UserShoppingData;
