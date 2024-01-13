"use client";
import { Skeleton } from "@mui/material";
import { useGetUser } from "@/hooks/useAuth";
import TypedInfo from "./typedInfo";

const TypedInfoSkeleton = () => {
  const { isLoading } = useGetUser();

  return isLoading ? (
    <Skeleton
      variant="text"
      width={250}
      sx={{
        fontSize: "1rem",
        zIndex: "500",
        ml: 1.5,
      }}
    />
  ) : (
    <TypedInfo />
  );
};

export default TypedInfoSkeleton;
