"use client";

import Loading from "@/common/loading";
import { Typography, Box } from "@mui/material";
import { useGetNewsletterUsers } from "@/hooks/useNewsletterUsers";
import NewsletterUsersTable from "../../../../components/admin/newsletter/newsletterUsersTable";

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
        <Typography
          sx={{
            fontSize: "1.5rem",
          }}
          noWrap
          component="h1"
        >
          اعضای خبرنامه
        </Typography>
      </Box>

      <NewsletterUsersTable newsletterUsers={newsletterUsers} />
    </>
  );
};

export default BlogsPage;
