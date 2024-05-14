import { Box, Typography, Badge, Link } from "@mui/material";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import TickSvg from "@/components/main/tickSvg";
import AddToCart from "../../../components/addToCart";
import SlugCardLayout from "../../../../components/slugs/card/slugCardLayout";

const ProductCard = ({ product }) => {
  const { discount, price, countInStock, metaDescription, title, demo } =
    product;
  const tickOptions = "تحویل فوری،سرعت لود بسیار بالا،قابلیت پویا‌سازی";
  return (
    <SlugCardLayout>
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
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
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
          {demo && (
            <Typography
              sx={{
                mt: 0.5,
              }}
            >
              دمو نهایی :{" "}
              <Link
                component="a"
                title={`مشاهده دمو ${title}`}
                href={demo}
                underline="none"
                rel="noreferrer noopener"
                target="_blank"
              >
                مشاهده
              </Link>
            </Typography>
          )}

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
    </SlugCardLayout>
  );
};

export default ProductCard;
