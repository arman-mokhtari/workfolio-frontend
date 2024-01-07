"use client";
import { Box, Grid, Typography, Card, Badge } from "@mui/material";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import TickSvg from "@/components/main/tickSvg";
import AddToCart from "../../components/addToCart";
import HoverCard from "@/common/hoverCard";

const ProductCard = ({ product }) => {
  const { discount, price, countInStock, metaDescription, title } = product;
  const tickOptions = "تحویل فوری،سرعت لود بسیار بالا،قابلیت پویا‌سازی";
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 1,
      }}
    >
      <HoverCard
        defaultElevation={4}
        hoveredElevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",

              lineHeight: "1.8rem",
            }}
            variant="h1"
          >
            {title}
          </Typography>

          <Box
            sx={{
              fontSize: "1rem",
              mt: 1.5,
            }}
          >
            {metaDescription}
          </Box>
          <Box
            sx={{
              mt: 2,
            }}
          >
            {tickOptions?.split("،").map((text, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <TickSvg />
                <Typography
                  sx={{
                    ml: 0.5,
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            mt: 1,
          }}
        >
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography>
              وضعیت : {countInStock > 0 ? "موجود" : "ناموجود"}
            </Typography>

            <Box
              sx={{
                my: 1,
                display: "flex",
                flexDirection: "row",
              }}
            >
              قیمت :&nbsp;
              <Typography
                sx={{
                  textDecoration: discount ? "line-through" : "unset",
                }}
              >
                {toPersianNumbersWithComma(price)} تومان
              </Typography>
            </Box>
            {!!discount && (
              <Badge
                sx={{
                  "& .MuiBadge-badge": {
                    right: -20,
                    top: "50%",
                  },
                }}
                badgeContent={"%" + toPersianNumbersWithComma(discount)}
                color="primary"
              >
                <Typography
                  sx={{
                    my: 1,
                  }}
                >
                  قیمت با تخفیف : {toPersianNumbersWithComma(price)} تومان
                </Typography>
              </Badge>
            )}
          </Box>

          <AddToCart product={product} />
        </Box>
      </HoverCard>
    </Grid>
  );
};

export default ProductCard;
