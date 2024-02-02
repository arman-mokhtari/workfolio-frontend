"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Box } from "@mui/material";
import { useAddMiscPage } from "@/hooks/useMiscPage";
import MiscPageForm from "./components/miscPageForm";

const AddBlogPage = () => {
  const { isLoading, mutateAsync } = useAddMiscPage();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
  });
  const router = useRouter();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { message } = await mutateAsync({
        ...formData,
      });
      router.push("/admin/misc-pages");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Box
      sx={{
        width: 1,
        overflowX: "hidden",
      }}
    >
      <MiscPageForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        miscPageData={formData}
        miscPageDataOnChange={handleChange}
      />
    </Box>
  );
};

export default AddBlogPage;
