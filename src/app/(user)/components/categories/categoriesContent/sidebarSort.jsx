"use client";
import CommonRadio from "@/common/commonRadio";
import { sortOptions } from "@/constants/sidebarSortData";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const SidebarSort = () => {
  const [sort, setSort] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isMobile = useIsOnlyXs();

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
        مرتب سازی:
      </FormLabel>
      <RadioGroup
        row={isMobile}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {sortOptions.map(({ id, value, label }, index) => (
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
