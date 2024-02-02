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
import CustomEditor from "@/components/main/custom-editor";
import MiscEditFormBaseData from "./miscFormBaseData";
import { useEffect, useState } from "react";

const MiscEditForm = ({
  onSubmit,
  miscPageData,
  miscPageDataOnChange,
  isLoading,
}) => {
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    setEditorContent(miscPageData.description || "");
  }, [miscPageData.description]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorContent(data);
    miscPageDataOnChange({ target: { name: "description", value: data } });
  };
  return (
    <Card>
      <CardContent>
        <Box sx={{ width: 1 }} component="form" onSubmit={onSubmit}>
          <FormLabel>ویرایش صفحه متفرقه</FormLabel>
          <Container
            fixed
            disableGutters
            sx={{
              mt: 2,
            }}
          >
            <CustomEditor
              initialData={editorContent}
              onChange={handleEditorChange}
            />
          </Container>

          <Box sx={{ my: 2 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body2">جزئیات فرم صفحه متفرقه</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MiscEditFormBaseData
                  miscPageData={miscPageData}
                  miscPageDataOnChange={miscPageDataOnChange}
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
              href="/admin/misc-pages"
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

export default MiscEditForm;
