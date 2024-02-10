"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useAddPageData } from "@/hooks/UsePagesData";
import PageDataForm from "./components/pageDataForm";

const AddProductPage = () => {
  const { isLoading, mutateAsync } = useAddPageData();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    englishTitle: "",
    metaTitle: "",
    metaDescription: "",
    imageLink: "",
    tags: "",
  });
  const router = useRouter();

  const [tags, setTags] = useState([]);

  const handleTagsChange = (event, value) => {
    setTags(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const queryClient = useQueryClient();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
      });
      queryClient.invalidateQueries({ queryKey: ["pages-data"] });
      router.push("/admin/pages-data");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <PageDataForm
      onSubmit={handleSubmit}
      tags={tags}
      handleTagsChange={handleTagsChange}
      isLoading={isLoading}
      pageData={formData}
      pageDataOnChange={handleChange}
    />
  );
};

export default AddProductPage;
