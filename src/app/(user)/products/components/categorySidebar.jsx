"use client";

import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Skeleton
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarFilter from "./sidebarFilter";
import SidebarSort from "./sidebarSort";
import HoverCard from "@/common/hoverCard";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import { useGetUser } from "@/hooks/useAuth";

const CategorySidebar = ({ categories }) => {
  const isMobile = useIsOnlyXs();
  const { isLoading } = useGetUser();
  return (
    <>
      {isMobile ? (
        <HoverCard defaultElevation={3} hoveredElevation={7}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
             {isLoading ? (
                <Skeleton width={80} />
              ) : (
                <Typography>فیلتر و مرتب‌سازی</Typography>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <SidebarFilter isLoading={isLoading} categories={categories} />
              <SidebarSort isLoading={isLoading} />
            </AccordionDetails>
          </Accordion>
        </HoverCard>
      ) : (
        <Stack
          spacing={2}
          direction="column"
          sx={{
            width: 1,
          }}
        >
          <HoverCard defaultElevation={3} hoveredElevation={7}>
            <SidebarFilter isLoading={isLoading} categories={categories} />
          </HoverCard>
          <HoverCard defaultElevation={3} hoveredElevation={7}>
            <SidebarSort isLoading={isLoading} />
          </HoverCard>
        </Stack>
      )}
    </>
  );
};

export default CategorySidebar;
