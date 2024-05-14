import HoverCard from "@/common/hoverCard";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarFilter from "./sidebarFilter";
import SidebarSort from "./sidebarSort";
const XsCategorySidebar = ({ categories, isLoading }) => {
  return isLoading ? (
    <HoverCard
      sx={{
        width: 1,
        px: 2,
        py: 1.5,
      }}
      defaultElevation={3}
    >
      <Skeleton width="30%" variant="text" sx={{ fontSize: "1rem" }} />
    </HoverCard>
  ) : (
    <HoverCard defaultElevation={3} hoveredElevation={7}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>فیلتر و مرتب‌سازی</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SidebarFilter categories={categories} />
          <SidebarSort />
        </AccordionDetails>
      </Accordion>
    </HoverCard>
  );
};

export default XsCategorySidebar;
