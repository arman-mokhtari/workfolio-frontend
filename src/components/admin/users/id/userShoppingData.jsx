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

const UserShoppingData = ({ payments, isLoading }) => {
  const theme = useTheme();

  const totalPurchase = payments.reduce(
    (acc, payment) => acc + payment.amount,
    0
  );

  const calculateStats = () => {
    const numberOfInvoices = payments.length;

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
      defaultElevation={4}
      hoveredElevation={10}
      component={CardContent}
      sx={{
        position: "relative",
        minHeight: "232.09px",
        // [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // },
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
        {totalPurchase < 10000000 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>کاربر برنز</Typography>
            <EmojiEvents color="bronze" />
          </Stack>
        ) : totalPurchase < 50000000 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>کاربر نقره‌ای</Typography>
            <EmojiEvents color="disabled" />
          </Stack>
        ) : totalPurchase < 100000000 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>کاربر طلایی</Typography>
            <EmojiEvents color="warning" />
          </Stack>
        ) : (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>کاربر ویژه</Typography>
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
          وضعیت کاربر
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

export default UserShoppingData;
