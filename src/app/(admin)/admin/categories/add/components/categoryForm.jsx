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
import { Undo, AddTask } from "@mui/icons-material";
import Loading from "@/common/loading";
import { categoryFormData } from "@/constants/categoryFormData";
import SelectCategories from "./selectCategory";
import HoverCard from "@/common/hoverCard";

const CategoryForm = ({
  onSubmit,
  category,
  handleChange,
  selectedType = "",
  setSelectedType,
  isLoading,
  categories,
}) => {
  return (
    <HoverCard defaultElevation={4} hoveredElevation={10}>
      <CardContent>
        <Box component="form" onSubmit={onSubmit}>
          <FormLabel>اضافه کردن دسته‌بندی جدید</FormLabel>
          <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            {categoryFormData.map((item, index) => {
              const value =
                category && category[item?.name] ? category[item.name] : "";
              return (
                <Grid item key={index} xs={12} sm={6}>
                  <TextField
                    label={item.label}
                    name={item.name}
                    value={value}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              );
            })}
            <Grid item xs={12} sm={6}>
              <SelectCategories
                setSelectedType={setSelectedType}
                selectedType={selectedType}
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
    </HoverCard>
  );
};

export default CategoryForm;
