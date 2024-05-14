"use client";
import Loading from "@/common/loading";
import { useQueryClient } from "@tanstack/react-query";

import {
  useGetCategoryById,
  useUpdateCategory,
} from "@/hooks/useCategories";
import { includeObj } from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import CategoryEditForm from "../../../../../../components/admin/categories/edit/categoryEditForm";
import { categoryTypes } from "@/constants/categoryTypesData";

const includesCategoryKey = ["title", "englishTitle", "description"];

const EditPage = () => {
  const { id } = useParams();

  const { data, isLoading: isLoadingCategory } = useGetCategoryById(id);
  const { category } = data || {};

  const [formData, setFormData] = useState({});
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("");
  const { isLoading, mutateAsync } = useUpdateCategory();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSetCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    if (category) {
      setSelectedCategory(category.type);
      setFormData(includeObj(category, includesCategoryKey));
    }
  }, [data, category]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        data: {
          ...formData,
          type: selectedCategory,
        },
        id: category._id,
      });

      queryClient.invalidateQueries({ queryKey: ["get-category"] });
      router.push("/admin/categories");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoadingCategory) return <Loading />;
  if (category?._id !== id || !category) return router.push("/404");
  return (
    <CategoryEditForm
      onSubmit={handleSubmit}
      handleSetCategory={handleSetCategory}
      selectedCategory={categoryTypes.find((c) => c.value === category.type)}
      isLoading={isLoading}
      productData={formData}
      productDataOnChange={handleChange}
    />
  );
};

export default EditPage;
