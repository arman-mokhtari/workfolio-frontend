"use client";

import { useTheme } from "@mui/material/styles";

import { Box, Breadcrumbs, Card, Typography, Skeleton } from "@mui/material";
import Link from "next/link";
import { routeNames } from "@/constants/routeNames";
import { usePathname } from "next/navigation";
import { useGetAllProducts } from "@/hooks/useProducts";
import { useGetAllBlogs } from "@/hooks/useBlogs";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const BreadCrumbsContent = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  const { isLoading: productLoading, data: productsData } = useGetAllProducts();
  const { products } = productsData || {};

  const { isLoading: blogLoading, data: blogsData } = useGetAllBlogs();
  const { blogs } = blogsData || {};

  const isSmallScreen = useIsOnlyXs();
  return (
    <Card
      sx={{
        mx: 2,
        [theme.breakpoints.only("xs")]: {
          mx: 1,
        },
        mb: 2,
        p: 1.5,
        display: "inline-flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "& a": {
          textDecoration: "none",
          color: "text.primary",
        },
        [theme.breakpoints.between("xs", "md")]: {
          alignItems: "flex-start",
        },
      }}
      role="presentation"
    >
      {productLoading ? (
        <Skeleton width={isSmallScreen ? 150 : 250} />
      ) : blogLoading ? (
        <Skeleton width={isSmallScreen ? 150 : 250} />
      ) : (
        <>
          <Typography
            sx={{
              mr: 2,
              cursor: "default",
              [theme.breakpoints.between("xs", "md")]: {
                display: "none",
              },
            }}
          >
            موقعیت شما در وبسایت :
          </Typography>
          <Breadcrumbs
            sx={{
              "& p": {
                color: "#037fff",
                fontSize: "0.95rem",
                textDecoration: "underline",
                textDecorationThickness: 2,
                textUnderlineOffset: 6,
              },
              fontSize: "0.95rem",
            }}
            separator="›"
            aria-label="breadcrumb"
          >
            <Link
              role="link"
              title="رفتن به صفحه اصلی" aria-label="رفتن به صفحه اصلی" href="/">خانه</Link>
            {paths.map((path, index) => {
              const isLastPath = index === paths.length - 1;
              const pathName = path;
              let displayName = routeNames[pathName] || pathName;

              if (products && products.length > 0) {
                const matchingProduct = products.find(
                  (product) => product.slug === pathName
                );
                if (matchingProduct) {
                  displayName = matchingProduct.title;
                }
              }
              if (blogs && blogs.length > 0) {
                const matchingBlog = blogs.find(
                  (blog) => blog.slug === pathName
                );
                if (matchingBlog) {
                  displayName = matchingBlog.title;
                }
              }

              return (
                <Box key={index}>
                  {isLastPath ? (
                    <Typography
                      sx={{
                        cursor: "default",
                      }}
                      color="textPrimary"
                    >
                      {decodeURIComponent(displayName).replace(/-/g, " ")}
                    </Typography>
                  ) : (
                    <Link
                    role="link"
                    title={`رفتن به صفحه ${displayName}`} aria-label={displayName} href={`/${paths.slice(0, index + 1).join("/")}`}>
                      {displayName}
                    </Link>
                  )}
                </Box>
              );
            })}
          </Breadcrumbs>
        </>
      )}
    </Card>
  );
};

export default BreadCrumbsContent;
