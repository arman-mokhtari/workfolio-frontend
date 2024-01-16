"use client";

import { useGetUser } from "@/hooks/useAuth";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import XsBanner from "./xsBanner";
import UpXsBanner from "./upXsBanner";

const Banner = () => {
  const { isLoading } = useGetUser();

  const isOnlyXs = useIsOnlyXs();

  return isOnlyXs ? (
    <XsBanner isLoading={isLoading} />
  ) : (
    <UpXsBanner isLoading={isLoading} />
  );
};

export default Banner;
