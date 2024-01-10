"use client";
import CommonRadio from "@/common/commonRadio";
import { sortOptions } from "@/constants/sidebarSortData";
import { FormControl, FormLabel, RadioGroup, Skeleton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import { useGetCategories } from "@/hooks/useCategories";

const SidebarSort = () => {
  const [sort, setSort] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isMobile = useMediaQuery("(max-width:600px)");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);

  const { isLoading } = useGetCategories();

  return (
    <FormControl component="fieldset" variant="standard" sx={{ m: 1.5 }}>
      <FormLabel
        sx={{
          mb: 1,
          fontWeight: "800",
        }}
        component="legend"
        id="demo-radio-buttons-group-label"
      >
        {isLoading ? (
          <Skeleton
            sx={{
              mb: !isMobile && 1.5,
            }}
            width={100}
          />
        ) : (
          "مرتب سازی:"
        )}
      </FormLabel>
      <RadioGroup
        row={isMobile}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {isLoading
          ? Array.from({ length: 3 }, (_, i) => (
              <Skeleton
                sx={{
                  mr: isMobile && 0.5,
                  mb: !isMobile && 2,
                }}
                key={i}
                width={70}
              />
            ))
          : sortOptions.map(({ id, value, label }, index) => (
              <CommonRadio
                id={id}
                key={index}
                label={label}
                name="product-sort"
                value={value}
                checked={sort === value}
                onChange={sortHandler}
              />
            ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SidebarSort;
