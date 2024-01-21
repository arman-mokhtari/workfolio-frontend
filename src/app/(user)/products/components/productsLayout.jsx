import { getCategories } from "@/services/category/categoryService";
import CategorySidebar from "./categorySidebar";
import { Box, Grid } from "@mui/material";


export default async function ProductsLayout({ children }) {
  const categoryPromise = getCategories();

  const [{ categories }] = await Promise.all([categoryPromise]);
  return (
    <Box
      sx={{
        p: 1.5,
        minHeight: "calc(100vh - 128px)",
      }}
    >
      <Grid container spacing={1.5}>
        <Grid
          component="aside"
          item
          xs={12}
          sm={4}
          md={2.5}
          lg={2}
          sx={{
            display: "flex",
          }}
        >
          <CategorySidebar categories={categories} />
        </Grid>
        <Grid component="main" item xs={12} sm={8} md={9.5} lg={10}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
