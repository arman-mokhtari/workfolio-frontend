"use client";
import Link from "next/link";

import Loading from "@/common/loading";
import { Typography, Box } from "@mui/material";
import { useGetNewsletterUsers } from "@/hooks/useNewsletterUsers";
import NewsletterUsersTable from "./components/newsletterUsersTable";

const BlogsPage = () => {
  const { isLoading, data: newsletterUsers } = useGetNewsletterUsers();
  if (isLoading) return <Loading />;

  return (
    <>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Typography variant="h5">اعضای خبرنامه</Typography>
      </Box>

      <NewsletterUsersTable newsletterUsers={newsletterUsers} />
    </>
  );
};

export default BlogsPage;
