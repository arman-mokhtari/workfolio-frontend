"use client";
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
import dynamic from "next/dynamic";
import AddFaqs from "./addFaqs";
import BlogFormBaseData from "./blogFormBaseData";

const CustomEditor = dynamic(
  () => import("../../../../../../components/main/custom-editor"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const BlogForm = ({
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
        <Box component="form" onSubmit={onSubmit}>
          <FormLabel>اضافه کردن بلاگ جدید</FormLabel>
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
                blogDataOnChange({
                  target: { name: "description", value: data },
                });
                console.log({ event, editor, data });
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
                <BlogFormBaseData
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
                <Typography variant="body2">سوالات متداول</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AddFaqs blogDataOnChange={blogDataOnChange} />
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
              href="/admin/blogs"
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

export default BlogForm;
