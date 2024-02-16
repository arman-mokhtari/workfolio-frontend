import {
  HomeRounded,
  ConnectWithoutContactRounded,
  Diversity1,
  Engineering,
  StoreMallDirectoryOutlined,
  ArticleOutlined,
  AccountBoxRounded,
  AdminPanelSettings,
  Group,
  ShoppingCart,
  Category,
  Checklist,
  Discount,
  Article,
  Email,
  Reviews,
  Web,
  Pages,
} from "@mui/icons-material";

export const navItems = [
  {
    text: "خانه",
    icon: (
      <HomeRounded
        sx={{
          fontSize: "1.2rem",
        }}
      />
    ),
    to: "/",
  },
  {
    text: "خدمات",
    icon: (
      <Engineering
        sx={{
          fontSize: "1.2rem",
        }}
      />
    ),
    to: "/services",
  },
  {
    text: "محصولات",
    icon: (
      <StoreMallDirectoryOutlined
        sx={{
          fontSize: "1.2rem",
        }}
      />
    ),
    to: "/products",
  },
  {
    text: "مقالات",
    icon: (
      <ArticleOutlined
        sx={{
          fontSize: "1.2rem",
        }}
      />
    ),
    to: "/blogs",
  },
  {
    text: "درباره ما",
    icon: (
      <Diversity1
        sx={{
          fontSize: "1.2rem",
        }}
      />
    ),
    to: "/about",
  },
  {
    text: "ارتباط با ما",
    icon: (
      <ConnectWithoutContactRounded
        sx={{
          fontSize: "1.2rem",
        }}
      />
    ),
    to: "/contact",
  },
];

export const pageUrl = ["/", "/services", "/about", "/contact", "/admin"];

export const userProfileNavItems = [
  {
    text: "صفحه اصلی",
    icon: <HomeRounded />,
    to: "/",
  },
  {
    text: "حساب کاربری",
    icon: <StoreMallDirectoryOutlined />,
    to: "/profile",
  },
  {
    text: "ویرایش",
    icon: <AccountBoxRounded />,
    to: "/profile/me",
  },
];
export const adminProfileNavItems = [
  {
    text: "صفحه اصلی",
    icon: <HomeRounded />,
    to: "/",
  },
  {
    text: "داشبورد",
    icon: <AdminPanelSettings />,
    to: "/admin",
  },
  {
    text: "کاربران",
    icon: <Group />,
    to: "/admin/users",
  },
  {
    text: "محصولات",
    icon: <ShoppingCart />,
    to: "/admin/products",
  },
  {
    text: "مقالات",
    icon: <Article />,
    to: "/admin/blogs",
  },
  {
    text: "دسته‌بندی",
    icon: <Category />,
    to: "/admin/categories",
  },
  {
    text: "صفحات",
    icon: <Pages />,
    to: "/admin/pages-data",
  },
  {
    text: "سفارشات",
    icon: <Checklist />,
    to: "/admin/payments",
  },
  {
    text: "کد تخفیف",
    icon: <Discount />,
    to: "/admin/coupons",
  },
  {
    text: "خبرنامه",
    icon: <Email />,
    to: "/admin/newsletter",
  },
  {
    text: "نظرات عمومی",
    icon: <Reviews />,
    to: "/admin/reviews/public",
  },
  {
    text: "نظرات محصول",
    icon: <Reviews />,
    to: "/admin/reviews/product",
  },
];
