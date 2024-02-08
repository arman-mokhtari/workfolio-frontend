import { Box, Chip, CardHeader } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";
import HoverCard from "@/common/hoverCard";
import LinkAsideSkeleton from "@/pages/(user)/components/slugs/skeletons/linkAsideSkeleton";

const TagsCard = ({ tags, isLoading }) => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <HoverCard sx={{ mt: 2 }} defaultElevation={4} hoveredElevation={10}>
      {isLoading ? (
        <LinkAsideSkeleton />
      ) : (
        <>
          <CardHeader subheader="برچسب‌ها:" />
          <Box sx={{ px: 2,pb:1.5 }}>
            {tags.map((tag, i) => {
              const path = `/products?${createQueryString("search", tag)}`;
              return (
                <Chip
                sx={{
                    m:0.5
                }}
                  key={i}
                  label={tag}
                  component={Link}
                  href={path}
                  clickable
                />
              );
            })}
          </Box>
        </>
      )}
    </HoverCard>
  );
};

export default TagsCard;
