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
  Container,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Undo, AddTask, ExpandMore } from "@mui/icons-material";
import Loading from "@/common/loading";
import CustomEditor from "@/components/main/custom-editor";
import ProductFormBaseData from "./productFormBaseData";
import FaqsEdit from "./faqsEdit";

const ProductEditForm = ({
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
        <Box sx={{ width: 1 }} component="form" onSubmit={onSubmit}>
          <FormLabel>ویرایش محصول</FormLabel>
          <Container
            fixed
            disableGutters
            sx={{
              mt: 2,
            }}
          >
            <CustomEditor
              initialData={productData.description}
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
                <Typography variant="body2">ویرایش سوالات متداول</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FaqsEdit
                  productData={productData}
                  productDataOnChange={productDataOnChange}
                />
              </AccordionDetails>
            </Accordion>
          </Box>

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
              component={Link}
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

export default ProductEditForm;
