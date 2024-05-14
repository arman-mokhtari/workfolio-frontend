"use client";

import Link from "next/link";

import {
  Box,
  CardContent,
  Card,
  Stack,
  Button,
  FormLabel,
  Container,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import { Undo, AddTask, ExpandMore } from "@mui/icons-material";
import Loading from "@/common/loading";
import dynamic from "next/dynamic";
import ProductFormBaseData from "./productFormBaseData";
import AddFaqs from "./addFaqs";

const CustomEditor = dynamic(() => import("../../../main/custom-editor"), {
  loading: () => <Loading />,
  ssr: false,
});

const ProductForm = ({
  onSubmit,
  tags,
  handleTagsChange,
  productData,
  productDataOnChange,
  categories,
  handleSetCategory,
  isLoading,
  selectedCategory = "",
}) => {
  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={onSubmit}>
          <FormLabel>اضافه کردن محصول جدید</FormLabel>
          <Container
            fixed
            disableGutters
            sx={{
              mt: 2,
            }}
          >
            <CustomEditor
              onChange={(event, editor) => {
                const data = editor.getData();
                productDataOnChange({
                  target: { name: "description", value: data },
                });
              }}
            />
          </Container>

          <Box sx={{ my: 2 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body2">جزئیات فرم محصول</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ProductFormBaseData
                  tags={tags}
                  handleTagsChange={handleTagsChange}
                  productData={productData}
                  productDataOnChange={productDataOnChange}
                  categories={categories}
                  handleSetCategory={handleSetCategory}
                  selectedCategory={selectedCategory}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="body2">سوالات متداول</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AddFaqs productDataOnChange={productDataOnChange} />
              </AccordionDetails>
            </Accordion>
          </Box>

          <Stack spacing={2} direction="row" alignItems="center">
            {isLoading ? (
              <Loading />
            ) : (
              <Button
                type="submit"
                aria-label="submit"
                color="success"
                variant="contained"
                endIcon={<AddTask />}
              >
                تایید
              </Button>
            )}

            <Button
              component={Link}
              role="link"
              aria-label="بازگشت"
              href="/admin/products"
              variant="outlined"
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

export default ProductForm;
