"use client";

import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import XsBanner from "./xsBanner";
import UpXsBanner from "./upXsBanner";

const Banner = () => {
  const isOnlyXs = useIsOnlyXs();

  return isOnlyXs ? <XsBanner /> : <UpXsBanner />;
};

export default Banner;
