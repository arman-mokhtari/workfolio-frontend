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
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Loading from "@/common/loading";
import HoverCard from "@/common/hoverCard";

const CategoryShoppingData = ({ products, isLoading, id }) => {
  const theme = useTheme();
  if (isLoading) return <Loading />;

  const productsInCategory = products.reduce((acc, product) => {
    if (product.category._id === id) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const calculateStats = () => {
    const categoryProductsInStock = products.reduce((acc, product) => {
      if (product.category._id === id) {
        return acc + product.countInStock;
      } else {
        return acc;
      }
    }, 0);

    const productsPricesInCategory = products.reduce((acc, product) => {
      if (product.category._id === id) {
        return acc + product.price;
      } else {
        return acc;
      }
    }, 0);

    return [
      {
        stats: toPersianNumbersWithComma(productsPricesInCategory),
        title: "مبلغ کل موجودی",
        color: "primary",
        icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbers(categoryProductsInStock),
        color: "success",
        title: "موجودی",
        icon: <Receipt sx={{ fontSize: "1.75rem" }} />,
      },
      {
        stats: toPersianNumbers(productsInCategory),
        color: "warning",
        title: "تعداد محصول",
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
        {productsInCategory < 10 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>دسته‌بندی با حجم پایین</Typography>
            <EmojiEvents color="disabled" />
          </Stack>
        ) : productsInCategory < 50 ? (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>دسته‌بندی با حجم متوسط</Typography>
            <EmojiEvents color="warning" />
          </Stack>
        ) : (
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Typography>دسته‌بندی با حجم بالا</Typography>
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
          وضعیت دسته‌بندی
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

export default CategoryShoppingData;
