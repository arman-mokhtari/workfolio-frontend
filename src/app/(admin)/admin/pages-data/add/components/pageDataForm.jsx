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

const CustomEditor = dynamic(
  () => import("../../../../../../components/main/custom-editor"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const PageDataForm = ({
  onSubmit,
  tags,
  handleTagsChange,
  pageData,
  pageDataOnChange,
  isLoading,
}) => {
  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={onSubmit}>
          <FormLabel>اضافه کردن</FormLabel>
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
                pageDataOnChange({
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
                <Typography variant="body2">جزئیات فرم</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ProductFormBaseData
                  tags={tags}
                  handleTagsChange={handleTagsChange}
                  pageData={pageData}
                  pageDataOnChange={pageDataOnChange}
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
              role="link"
              href="/admin/pages-data"
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

export default PageDataForm;
