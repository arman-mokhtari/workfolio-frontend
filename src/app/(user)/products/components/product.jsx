"use client";

import {
  Box,
  Button,
  Typography,
  CardContent,
  CardActions,
  Tooltip,
  Fade,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "./addToCart";
import LikeProduct from "./likeProduct";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { usePathname } from "next/navigation";
import HoverCard from "@/common/hoverCard";

const Product = ({ product }) => {
  const { faSlug, title, price, imageLink, metaDescription } = product;

  const pathname = usePathname();
  const isProductsPage = pathname === "/products";

  return (
    <HoverCard defaultElevation={4} hoveredElevation={10}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
          mx: 2,
          "& img": {
            objectPosition: "center",
            objectFit: "cover",
            borderRadius: 3,
            width: "100% !important",
            height: "auto !important",
          },
          "& a": {
            width: "100% !important",
          },
        }}
      >
        <Link href={`/products/${faSlug}`}>
          <Image
            height="240"
            width="280"
            src={imageLink}
            alt={title}
            title={title}
          />
        </Link>
      </Box>
      <CardContent
        sx={{
          "& a": { textDecoration: "none" },
          py: 0.5,
        }}
      >
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          title={title}
          placement="top"
        >
          <Typography gutterBottom component="div">
            <Link href={`/products/${faSlug}`}>
              <Typography
                color="text.primary"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  display: "-webkit-box",
                  "-webkit-line-clamp": "1",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                variant="h2"
              >
                {title}
              </Typography>
            </Link>
          </Typography>
        </Tooltip>
        <Typography
          sx={{
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="body2"
          color="text.secondary"
        >
          {metaDescription}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 0,
        }}
      >
        <Box
          sx={{
            width: 1,
            mb: 1,
            px: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: !!!isProductsPage && 1,
            }}
          >
            <Typography variant="body2">قیمت :&nbsp;</Typography>
            <Typography variant="body2">
              {toPersianNumbersWithComma(price)} تومان
            </Typography>
          </Box>
          {isProductsPage && <LikeProduct product={product} />}
          <Button
            sx={{
              fontWeight: "700",
              "& a": {
                textDecoration: "none",
                color: "primary.main",
              },
            }}
            size="small"
            fullWidth
            variant="outlined"
          >
            <Link href={`/products/${faSlug}`}>اطلاعات بیشتر</Link>
          </Button>
        </Box>
        <Box
          sx={{
            width: 1,
            mb: 1,
            mx: "0 !important",
            px: 1,
          }}
        >
          <AddToCart product={product} />
        </Box>
      </CardActions>
    </HoverCard>
  );
};

export default Product;
