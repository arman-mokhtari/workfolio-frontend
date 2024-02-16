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
import { verifyLogos } from "@/constants/footer/verifyLogos";
import { websiteRelatedLinks } from "@/constants/footer/miscPages";

const ThirdGrid = () => {
  return (
    <FooterGridLayout title="پیوندهای مرتبط">
      <Box sx={{ height: 1 }} component="nav">
        <Stack
          sx={{ height: 1 }}
          direction="column"
          justifyContent="space-between"
        >
          <List>
            {websiteRelatedLinks?.map(({ href, title }, i) => (
              <ListItem key={i}>
                <Link
                  role="link"
                  component={NextLink}
                  aria-label="label"
                  underline="none"
                  href={href}
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
              <ListItem sx={{ p: 0, width: "inherit" }} key={id}>
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
