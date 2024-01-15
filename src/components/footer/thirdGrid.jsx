import { externalLinks } from "@/constants/friendlyLinks";
import FooterGridLayout from "./footerLayout";
import { Link, List, ListItem, ListItemText, Box } from "@mui/material";

const ThirdGrid = () => {
  return (
    <FooterGridLayout title="لینک‌های دوستانه">
      <Box component="nav">
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
      </Box>
    </FooterGridLayout>
  );
};

export default ThirdGrid;
