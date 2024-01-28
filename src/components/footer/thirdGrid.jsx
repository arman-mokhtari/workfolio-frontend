import { externalLinks } from "@/constants/friendlyLinks";
import FooterGridLayout from "./footerLayout";
import { Link, List, ListItem, ListItemText, Box, Stack } from "@mui/material";

const ThirdGrid = () => {
  const enamadCode = `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=382892&Code=eCXutN3fhP65ENbdy0gZFNzsFVimIVml'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=382892&Code=eCXutN3fhP65ENbdy0gZFNzsFVimIVml' alt='enamad' style='cursor:pointer' Code='eCXutN3fhP65ENbdy0gZFNzsFVimIVml'></a>`;
  return (
    <FooterGridLayout title="لینک‌های دوستانه">
      <Box component="nav">
        <Stack direction="row" justifyContent="space-between">
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
          <Box
            sx={{
              "& img": {
                width: 86,
                height: 100,
              },
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: enamadCode }} />
          </Box>
        </Stack>
      </Box>
    </FooterGridLayout>
  );
};

export default ThirdGrid;
