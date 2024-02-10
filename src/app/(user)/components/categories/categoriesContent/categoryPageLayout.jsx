import { getCategories } from "@/services/category/categoryService";

import { Box, Grid } from "@mui/material";
import CategorySidebar from "./categorySidebar";
import SearchBar from "./searchBar";
import PageDesc from "@/pages/(user)/products/components/main/pageDesk";
import ChipDivider from "@/common/chipDivider";

export default async function CategoryPageLayout({ children }) {
  const categoryPromise = getCategories();

  const [{ categories }] = await Promise.all([categoryPromise]);

  return (
    <Box
      sx={{
        p: 1.5,
        minHeight: "calc(100vh - 128px)",
      }}
    >
      <SearchBar />
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
      <ChipDivider mb={1} mt={6} title="جالب توجه!" />
      <Grid
        container
        justifyContent="center"
        sx={{
          mt: 3,
        }}
      >
        
        <PageDesc />
      </Grid>
    </Box>
  );
}
