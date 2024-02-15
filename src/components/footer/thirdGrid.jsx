"use client";

import NextLink from "next/link";
import FooterGridLayout from "./footerLayout";
import {
  Link,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
  Skeleton,
} from "@mui/material";
import {
  enamadCode,
  samandehiCode,
  verifyLogos,
  zarinpalCode,
} from "@/constants/verifyLogos";
import { useGetAllMiscPage } from "@/hooks/useMiscPage";

const ThirdGrid = () => {
  const { data, isLoading } = useGetAllMiscPage();
  const { miscPages } = data || {};

  return (
    <FooterGridLayout title="پیوندهای مرتبط">
      <Box sx={{ height: 1 }} component="nav">
        <Stack
          sx={{ height: 1 }}
          direction="column"
          justifyContent="space-between"
        >
          <List>
            {isLoading
              ? Array.from({ length: 2 }, (_, i) => (
                  <ListItem key={i}>
                    <Skeleton
                      variant="text"
                      width={200}
                      sx={{ my: 0.5, fontSize: "1rem", lineHeight: 1.5 }}
                    />
                  </ListItem>
                ))
              : miscPages?.map(({ slug, title }, index) => (
                  <ListItem key={index}>
                    <Link
                      role="link"
                      component={NextLink}
                      aria-label="label"
                      underline="none"
                      href={`/${slug}`}
                      title={`${title} ورکفولیو`}
                    >
                      <ListItemText primary={title} />
                    </Link>
                  </ListItem>
                ))}
          </List>
          <Stack
            component={List}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
            sx={{
              "& img": {
                width: "80px !important",
                height: "auto !important",
                cursor: "pointer",
              },
            }}
          >
            {verifyLogos.map(({ id, code }) => (
              <ListItem sx={{ p: 0, width:"inherit" }} key={id}>
                <Box dangerouslySetInnerHTML={{ __html: code }} />
              </ListItem>
            ))}
          </Stack>
        </Stack>
      </Box>
    </FooterGridLayout>
  );
};

export default ThirdGrid;
