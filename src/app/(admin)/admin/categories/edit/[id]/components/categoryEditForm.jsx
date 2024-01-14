import Link from "next/link";

import {
  Box,
  Grid,
  TextField,
  CardContent,
  Card,
  Stack,
  Button,
  FormLabel,
} from "@mui/material";
import AdminSelectCategoriesEdit from "./selectCategory";
import { Undo, AddTask } from "@mui/icons-material";
import Loading from "@/common/loading";
import { categoryFormData } from "@/constants/categoryFormData";

const CategoryEditForm = ({
  onSubmit,
  productData,
  productDataOnChange,
  handleSetCategory,
  isLoading,
  selectedCategory = "",
}) => {
  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={onSubmit}>
          <FormLabel>ویرایش دسته‌بندی</FormLabel>
          <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            {categoryFormData.map((item, i) => {
              const value =
                productData && productData[item?.name]
                  ? productData[item.name]
                  : "";
              return (
                <Grid item key={i} xs={12} sm={6}>
                  <TextField
                    label={item.label}
                    name={item.name}
                    value={value}
                    onChange={productDataOnChange}
                    fullWidth
                  />
                </Grid>
              );
            })}
            <Grid item xs={12} sm={6}>
              <AdminSelectCategoriesEdit
                handleSetCategory={handleSetCategory}
                selectedCategory={selectedCategory}
              />
            </Grid>
          </Grid>
          <Stack spacing={2} direction="row" alignItems="center">
            {isLoading ? (
              <Loading />
            ) : (
              <Button
                type="submit"
                color="success"
                variant="contained"
                endIcon={<AddTask />}
              >
                تایید
              </Button>
            )}

            <Button
              role="link"
               
              component={Link}
              href="/admin/categories"
              variant="outlined"
              aria-label="بازگشت"
              endIcon={<Undo />}
            >
              بازگشت به قبل
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CategoryEditForm;
