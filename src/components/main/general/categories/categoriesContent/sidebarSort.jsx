"use client";
import CommonRadio from "@/common/commonRadio";
import { sortOptions } from "@/constants/sidebarSortData";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const SidebarSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useIsOnlyXs();

  // به جای استفاده از useState می‌توانیم از value استفاده کنیم
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const path = `${pathname}?${createQueryString("sort", sort)}`;
    router.push(path);
  }, [createQueryString, pathname, router, sort]);

  // نام تابع را بهتر توضیح دهیم
  const handleSortChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSort(value);
    },
    []
  );

  return (
    <FormControl component="fieldset" variant="standard" sx={{ m: 1.5 }}>
      <FormLabel
        sx={{
          mb: 1,
          fontWeight: "800",
        }}
        component="legend"
        id="sort-radio-buttons-group-label"
      >
        مرتب سازی:
      </FormLabel>
      <RadioGroup
        row={isMobile}
        aria-labelledby="sort-radio-buttons-group-label"
        value={sort} // استفاده از value به جای defaultValue
        name="sort-radio-buttons-group"
        onChange={handleSortChange}
      >
        {sortOptions.map(({ id, value, label }) => (
          <CommonRadio
            key={id}
            id={id}
            label={label}
            value={value}
            checked={sort === value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SidebarSort;
