import { externalLinks } from "@/constants/friendlyLinks";
import FooterGridLayout from "./footerLayout";
import { Link, List, ListItem, ListItemText } from "@mui/material";

const ThirdGrid = () => {
  return (
    <FooterGridLayout title="لینک‌های دوستانه">
      <List component="nav">
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
    </FooterGridLayout>
  );
};

export default ThirdGrid;
