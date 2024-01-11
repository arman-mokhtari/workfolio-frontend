import { useMediaQuery } from "@mui/material";

// Down
export const useIsDownXs = () =>
  useMediaQuery((theme) => theme.breakpoints.down("xs"));
export const useIsDownSm = () =>
  useMediaQuery((theme) => theme.breakpoints.down("sm"));
export const useIsDownMd = () =>
  useMediaQuery((theme) => theme.breakpoints.down("md"));
export const useIsDownLg = () =>
  useMediaQuery((theme) => theme.breakpoints.down("lg"));
export const useIsDownXl = () =>
  useMediaQuery((theme) => theme.breakpoints.down("xl"));

// Up
export const useIsUpXs = () =>
  useMediaQuery((theme) => theme.breakpoints.up("xs"));
export const useIsUpSm = () =>
  useMediaQuery((theme) => theme.breakpoints.up("sm"));
export const useIsUpMd = () =>
  useMediaQuery((theme) => theme.breakpoints.up("md"));
export const useIsUpLg = () =>
  useMediaQuery((theme) => theme.breakpoints.up("lg"));
export const useIsUpXl = () =>
  useMediaQuery((theme) => theme.breakpoints.up("xl"));

// Only
export const useIsOnlyXs = () =>
  useMediaQuery((theme) => theme.breakpoints.only("xs"));
export const useIsOnlySm = () =>
  useMediaQuery((theme) => theme.breakpoints.only("sm"));
export const useIsOnlyMd = () =>
  useMediaQuery((theme) => theme.breakpoints.only("md"));
export const useIsOnlyLg = () =>
  useMediaQuery((theme) => theme.breakpoints.only("lg"));
export const useIsOnlyXl = () =>
  useMediaQuery((theme) => theme.breakpoints.only("xl"));

// Between
export const useIsBetweenXsSm = () =>
  useMediaQuery((theme) => theme.breakpoints.between("xs", "sm"));
export const useIsBetweenXsMd = () =>
  useMediaQuery((theme) => theme.breakpoints.between("xs", "md"));
export const useIsBetweenXsLg = () =>
  useMediaQuery((theme) => theme.breakpoints.between("xs", "lg"));
export const useIsBetweenXsXl = () =>
  useMediaQuery((theme) => theme.breakpoints.between("xs", "xl"));
export const useIsBetweenSmMd = () =>
  useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
export const useIsBetweenSmLg = () =>
  useMediaQuery((theme) => theme.breakpoints.between("sm", "lg"));
export const useIsBetweenSmXl = () =>
  useMediaQuery((theme) => theme.breakpoints.between("sm", "xl"));
export const useIsBetweenMdLg = () =>
  useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
export const useIsBetweenMdXl = () =>
  useMediaQuery((theme) => theme.breakpoints.between("md", "xl"));
export const useIsBetweenLgXl = () =>
  useMediaQuery((theme) => theme.breakpoints.between("lg", "xl"));
