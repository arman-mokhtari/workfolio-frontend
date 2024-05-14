"use client";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  CardContent,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  AttachMoney,
  EmojiEvents,
  Phonelink,
  Receipt,
} from "@mui/icons-material";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Loading from "@/common/loading";
import HoverCard from "@/common/hoverCard";

const ProductShoppingData = ({ payments, isLoading, id }) => {
  const theme = useTheme();
  if (isLoading) return <Loading />;

  const productsSold = payments.reduce(
    (acc, payment) =>
      acc +
      payment.cart.productDetail.reduce((productAcc, product) => {
        // Check if the product ID matches the prop ID and the payment status is "COMPLETED"
        if (product._id === id && payment.status === "COMPLETED") {
          // Increment the quantity for the matched product
          return productAcc + product.quantity;
        } else {
          return productAcc;
        }
      }, 0),
    0
  );

  const calculateStats = () => {
    const totalDiscount = payments.reduce(
      (acc, payment) =>
        acc +
        payment.cart.productDetail.reduce((productAcc, product) => {
          // Check if the product ID matches the prop ID and the payment status is "COMPLETED"
          if (product._id === id && payment.status === "COMPLETED") {
            // Add offPrice to the total discount
            return productAcc + product.offPrice * product.quantity;
          } else {
            return productAcc;
          }
        }, 0),
      0
    );

    const totalSalesAmount = payments.reduce(
      (acc, payment) =>
        acc +
        payment.cart.productDetail.reduce((productAcc, product) => {
          // Check if the product ID matches the prop ID and the payment status is "COMPLETED"
          if (product._id === id && payment.status === "COMPLETED") {
            // Subtract offPrice from price and add to the total sales amount
            return (
              productAcc + (product.price - product.offPrice) * product.quantity
            );
          } else {
            return productAcc;
          }
        }, 0),
      0
    );

    return [
      {
        stats: toPersianNumbersWithComma(totalSalesAmount),
        title: "کل فروش",
        color: "primary",
        icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbersWithComma(totalDiscount),
        color: "success",
        title: "کل تخفیف",
        icon: <Receipt sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbers(productsSold),
        color: "warning",
        title: "تعداد فروش",
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
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      component={CardContent}
      sx={{
        position: "relative",
        minHeight: "232.09px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          "& p , svg": {
            fontSize: 25,
            fontWeight: "500",
          },
          [theme.breakpoints.down("sm")]: {
            mb: 2,
          },
        }}
      >
        {productsSold < 5 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>محصول برنز</Typography>
            <EmojiEvents color="bronze" />
          </Stack>
        ) : productsSold < 10 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>محصول نقره‌ای</Typography>
            <EmojiEvents color="disabled" />
          </Stack>
        ) : productsSold < 50 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>محصول طلایی</Typography>
            <EmojiEvents color="warning" />
          </Stack>
        ) : (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>محصول ویژه</Typography>
            <EmojiEvents color="info" />
          </Stack>
        )}
      </Box>

      <Typography
        sx={{
          [theme.breakpoints.down("sm")]: {
            mb: 2,
          },
        }}
        variant="body2"
      >
        <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
          وضعیت محصول
        </Box>{" "}
        😎 در یک نگاه
      </Typography>

      <Box sx={{ pt: (theme) => `${theme.spacing(1)} !important` }}>
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

export default ProductShoppingData;
