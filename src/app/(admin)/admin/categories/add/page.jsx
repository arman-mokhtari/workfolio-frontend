"use client";
import { useAddCategory } from "@/hooks/useCategories";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

import CategoryForm from "../../../../../components/admin/categories/add/categoryForm";

const AddCategoryPage = () => {
  const [category, setCategory] = useState({
    title: "",
    description: "",
    englishTitle: "",
  });
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("");
  const { isLoading, mutateAsync } = useAddCategory();

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSetCategory = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...category,
        type: selectedType,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <CategoryForm
      category={category}
      handleChange={handleChange}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      selectedType={selectedType}
      setSelectedType={handleSetCategory}
    />
  );
};

export default AddCategoryPage;
