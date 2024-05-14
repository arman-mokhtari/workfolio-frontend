import {
  Box,
  Grid,
  Avatar,
  CardHeader,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import { TrendingUp, AttachMoney, Phonelink } from "@mui/icons-material";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const UserShoppingData = ({ payments }) => {
  const calculateStats = () => {
    const totalPurchase = payments.reduce(
      (acc, payment) => acc + payment.amount,
      0
    );
    const totalDiscount = payments.reduce((acc, payment) => {
      // محاسبه مجموع تخفیفهای مربوط به هر محصول در هر پرداخت
      const productDiscount = payment.cart.productDetail.reduce(
        (productAcc, product) => productAcc + (product.offPrice || 0),
        0
      );
      return acc + productDiscount;
    }, 0);

    const numberOfProducts = payments.reduce(
      (acc, payment) => acc + payment.cart.productDetail.length,
      0
    );

    return [
      {
        stats: toPersianNumbersWithComma(totalPurchase),
        title: "مجموع خرید",
        color: "primary",
        icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbersWithComma(totalDiscount),
        color: "success",
        title: "سود شما از خرید",
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbers(numberOfProducts),
        color: "warning",
        title: "تعداد محصولات",
        icon: <Phonelink sx={{ fontSize: "1.75rem" }} />,
      },
    ];
  };

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
    <Card>
      <CardHeader
        title="آمار فاکتورها"
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              جزئیات کارت شما
            </Box>{" "}
            😎 در یک نگاه
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
    </Card>
  );
};

export default UserShoppingData;
