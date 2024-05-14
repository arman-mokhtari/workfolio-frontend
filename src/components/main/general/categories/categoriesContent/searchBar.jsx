"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HoverCard from "@/common/hoverCard";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchTerm("");
      const path = `${pathname}`;
      router.push(path);
    }
  }, [createQueryString, pathname, router, searchTerm]);

  const handlePushPathname = () => {
    if (searchTerm) {
      const path = `${pathname}?${createQueryString("search", searchTerm)}`;
      router.push(path);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      handlePushPathname();
    }
  };

  return (
    pathname === "/products" && (
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <HoverCard defaultElevation={3} hoveredElevation={5} position="static">
          <Toolbar>
            <Box
              sx={{
                [theme.breakpoints.only("xs")]: {
                  width: 1,
                },
              }}
            >
              <OutlinedInput
                sx={{
                  width: 1,
                }}
                placeholder="عنوان مورد نظر..."
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyUp={handleKeyPress}
                size="small"
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      edge="start"
                      onClick={handlePushPathname}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          </Toolbar>
        </HoverCard>
      </Box>
    )
  );
};
export default SearchBar;
