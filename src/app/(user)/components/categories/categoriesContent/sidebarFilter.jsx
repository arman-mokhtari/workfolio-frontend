"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";

import CommonCheckBox from "@/common/commonCheckBox";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const SidebarFilter = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const isMobile = useIsOnlyXs();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      if (value.length > 0) {
        params.set(name, value.join(","));
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setSelectedCategories(searchParams.get("category")?.split(",") || []);
  }, [searchParams]);

  useEffect(() => {
    const path = `${pathname}?${createQueryString("category", selectedCategories)}`;
    router.push(path);
  }, [createQueryString, pathname, router, selectedCategories]);

  const categoryHandler = useCallback(
    (e) => {
      const value = e.target.value;
      const updatedCategories = selectedCategories.includes(value)
        ? selectedCategories.filter((c) => c !== value)
        : [...selectedCategories, value];
      setSelectedCategories(updatedCategories);
    },
    [selectedCategories]
  );

  const typeMapping = {
    "/blogs": "post",
    "/products": "product",
  };

  const filterCategories = (type) =>
    categories?.filter((category) => category.type === type) || [];

  const modifiedCategories =
    filterCategories(typeMapping[pathname]) || categories;

  if (!router || !pathname || !searchParams) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <FormControl sx={{ m: 1.5 }} component="fieldset" variant="standard">
      <FormLabel
        sx={{
          mb: 1,
          fontWeight: "800",
        }}
        component="legend"
      >
        دسته‌بندی‌ها:
      </FormLabel>
      <FormGroup
        row={isMobile}
        sx={{
          "& .MuiFormControlLabel-root": {
            cursor: "default",
          },
        }}
      >
        {modifiedCategories?.map(({ _id, englishTitle, title }) => (
          <CommonCheckBox
            key={_id}
            id={_id}
            value={englishTitle}
            name="product-type"
            label={title}
            onChange={categoryHandler}
            checked={selectedCategories.includes(englishTitle)}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default SidebarFilter;
