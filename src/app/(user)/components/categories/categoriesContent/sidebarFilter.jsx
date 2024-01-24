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

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);

      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategories([...selectedCategories, value]);

      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategories, value])
      );
    }
  };

  useEffect(() => {
    setSelectedCategories(searchParams.get("category")?.split(",") || []);
  }, [searchParams]);

  const typeMapping = {
    "/blogs": "post",
    "/products": "product",
  };

  const filterCategories = (type) =>
    categories?.filter((category) => category.type === type) || [];

  const modifiedCategories =
    filterCategories(typeMapping[pathname]) || categories;

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
        {modifiedCategories?.map(({ _id, englishTitle, title }, index) => {
          return (
            <CommonCheckBox
              key={index}
              id={_id}
              value={englishTitle}
              name="product-type"
              label={title}
              onChange={categoryHandler}
              checked={selectedCategories.includes(englishTitle)}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default SidebarFilter;
