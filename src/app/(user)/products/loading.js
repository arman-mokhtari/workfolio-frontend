import CategoriesMainSkeleton from "@/components/main/general/categories/skeletons/mainSkeleton";
import { Grid } from "@mui/material";

export default function Loading() {
  return (
    <Grid spacing={3} container>
      <CategoriesMainSkeleton />
    </Grid>
  );
}
