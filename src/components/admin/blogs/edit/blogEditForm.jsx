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
import CustomEditor from "@/components/main/custom-editor";
import FaqsEdit from "./faqsEdit";
import BlogEditFormBaseData from "./blogFormBaseData";

const BlogEditForm = ({
  onSubmit,
  tags,
  handleTagsChange,
  blogData,
  blogDataOnChange,
  categories,
  handleSetCategory,
  isLoading,
  selectedCategory = "",
}) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ width: 1 }} component="form" onSubmit={onSubmit}>
          <FormLabel>ویرایش بلاگ</FormLabel>
          <Container
            fixed
            disableGutters
            sx={{
              mt: 2,
            }}
          >
            <CustomEditor
              initialData={blogData.description}
              onChange={(event, editor) => {
                const data = editor.getData();
                blogDataOnChange({
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
                <Typography variant="body2">جزئیات فرم بلاگ</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <BlogEditFormBaseData
                  tags={tags}
                  handleTagsChange={handleTagsChange}
                  blogData={blogData}
                  blogDataOnChange={blogDataOnChange}
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
                  blogData={blogData}
                  blogDataOnChange={blogDataOnChange}
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
              href="/admin/blogs"
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

export default BlogEditForm;
