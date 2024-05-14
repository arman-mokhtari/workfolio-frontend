import SidebarSort from "./sidebarSort";
import SidebarFilter from "./sidebarFilter";
import HoverCard from "@/common/hoverCard";
import XsUpCategoryLayout from "./XsUpCategoryLayout";
import { Skeleton, Stack } from "@mui/material";

const XsUpCategorySidebar = ({ categories, isLoading }) => {
  return isLoading ? (
    <XsUpCategoryLayout>
      <HoverCard sx={{ p: 1.5 }} defaultElevation={3}>
        <Skeleton width="40%" sx={{ fontSize: "1rem", mb: 2 }} variant="text" />
        {Array.from({ length: 5 }, (_, i) => (
          <Stack
            key={i}
            sx={{ mb: 2.2 }}
            alignItems="center"
            spacing={1}
            direction="row"
          >
            <Skeleton variant="rectangular" width={20} height={20} />
            <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
          </Stack>
        ))}
      </HoverCard>
      <HoverCard sx={{ p: 1.5 }} defaultElevation={3}>
        <Skeleton width="40%" sx={{ fontSize: "1rem", mb: 2 }} variant="text" />
        {Array.from({ length: 3 }, (_, i) => (
          <Stack
            key={i}
            sx={{ mb: 2.2 }}
            alignItems="center"
            spacing={1}
            direction="row"
          >
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
          </Stack>
        ))}
      </HoverCard>
    </XsUpCategoryLayout>
  ) : (
    <XsUpCategoryLayout>
      <HoverCard defaultElevation={3} hoveredElevation={7}>
        <SidebarFilter categories={categories} />
      </HoverCard>
      <HoverCard defaultElevation={3} hoveredElevation={7}>
        <SidebarSort />
      </HoverCard>
    </XsUpCategoryLayout>
  );
};

export default XsUpCategorySidebar;
