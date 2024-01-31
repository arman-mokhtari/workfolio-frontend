import { externalLinks } from "@/constants/friendlyLinks";
import FooterGridLayout from "./footerLayout";
import { Link, List, ListItem, ListItemText, Box, Stack } from "@mui/material";
import {
  enamadCode,
  samandehiCode,
  zarinpalCode,
} from "@/constants/verifyLogos";

const ThirdGrid = () => {
  return (
    <FooterGridLayout title="لینک‌های دوستانه">
      <Box sx={{ height: 1 }} component="nav">
        <Stack
          sx={{ height: 1 }}
          direction="column"
          justifyContent="space-between"
        >
          <List>
            {externalLinks.map(({ url, title, label }, index) => (
              <ListItem key={index}>
                <Link
                  role="link"
                  aria-label="label"
                  underline="none"
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title={title}
                >
                  <ListItemText primary={label} />
                </Link>
              </ListItem>
            ))}
          </List>
          <Stack
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
            <Box dangerouslySetInnerHTML={{ __html: enamadCode }} />
            <Box dangerouslySetInnerHTML={{ __html: samandehiCode }} />
            <Box dangerouslySetInnerHTML={{ __html: zarinpalCode }} />
          </Stack>
        </Stack>
      </Box>
    </FooterGridLayout>
  );
};

export default ThirdGrid;
