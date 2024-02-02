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
import MiscFormBaseData from "./miscFormBaseData";

const CustomEditor = dynamic(
  () => import("../../../../../../components/main/custom-editor"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const MiscPageForm = ({
  onSubmit,
  miscPageData,
  miscPageDataOnChange,
  isLoading,
}) => {
  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={onSubmit}>
          <FormLabel>اضافه کردن صفحه متفرقه جدید</FormLabel>
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
                miscPageDataOnChange({
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
                <Typography variant="body2">جزئیات فرم صفحه متفرقه</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MiscFormBaseData
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
               
              aria-label="بازگشت"
              href="/admin/misc-pages"
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

export default MiscPageForm;
