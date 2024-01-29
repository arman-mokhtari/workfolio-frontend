import { externalLinks } from "@/constants/friendlyLinks";
import FooterGridLayout from "./footerLayout";
import { Link, List, ListItem, ListItemText, Box, Stack } from "@mui/material";

const ThirdGrid = () => {
  const enamadCode = `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=382892&Code=eCXutN3fhP65ENbdy0gZFNzsFVimIVml'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=382892&Code=eCXutN3fhP65ENbdy0gZFNzsFVimIVml' alt='' style='cursor:pointer' Code='eCXutN3fhP65ENbdy0gZFNzsFVimIVml'></a>`;

  const samandehiCode = `<img referrerpolicy='origin' id = 'rgvjfukzapfufukzesgtsizp' style = 'cursor:pointer' onclick = 'window.open("https://logo.samandehi.ir/Verify.aspx?id=365609&p=xlaogvkadshwgvkaobpdpfvl", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")' alt = 'logo-samandehi' src = 'https://logo.samandehi.ir/logo.aspx?id=365609&p=qftiwlbqujynwlbqlymabsiy' />`;

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
            spacing={1}
            sx={{
              "& img": {
                width: "80px !important",
                height: "auto !important",
              },
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: enamadCode }} />
            <Box dangerouslySetInnerHTML={{ __html: samandehiCode }} />
          </Stack>
        </Stack>
      </Box>
    </FooterGridLayout>
  );
};

export default ThirdGrid;
