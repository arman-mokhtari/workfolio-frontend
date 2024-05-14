"use client";
import { useGetCategories } from "@/hooks/useCategories";
import { useAddProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import ProductForm from "../../../../../components/admin/products/add/productForm";

const AddProductPage = () => {
  const { isLoading, mutateAsync } = useAddProduct();
  const { data } = useGetCategories();
  const { categories } = data || {};
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    faSlug: "",
    brand: "",
    price: "",
    offPrice: "",
    discount: "",
    countInStock: "",
    imageLink: "",
    demo: "",
    description: "",
    metaDescription: "",
    metaTitle: "",
    faqs: [
      { question: "", answer: "" },
      { question: "", answer: "" },
      { question: "", answer: "" },
      { question: "", answer: "" },
    ],
  });
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSetCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [tags, setTags] = useState([]);

  const handleTagsChange = (event, value) => {
    setTags(value);
  };

  const handleChange = (e) => {
    if (e.target.type === "number") {
      // اگر نوع فیلد عدد باشد، مقدار را به عدد تبدیل کنید
      setFormData({
        ...formData,
        [e.target.name]: parseInt(e.target.value, 10),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // اضافه کردن سوالات متداول و جواب‌ها به formData
    if (
      e.target.name.startsWith("question") ||
      e.target.name.startsWith("answer")
    ) {
      const faqIndex = e.target.name.slice(-1) - 1; // دریافت شماره سوال (0 تا 3)
      const faqs = [...formData.faqs];
      faqs[faqIndex] = {
        ...faqs[faqIndex],
        [e.target.name.startsWith("question") ? "question" : "answer"]:
          e.target.value,
      };
      setFormData({ ...formData, faqs });
    }
  };
  const queryClient = useQueryClient();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory,
      });
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <ProductForm
      onSubmit={handleSubmit}
      categories={categories}
      handleSetCategory={handleSetCategory}
      tags={tags}
      handleTagsChange={handleTagsChange}
      isLoading={isLoading}
      productData={formData}
      productDataOnChange={handleChange}
    />
  );
};

export default AddProductPage;
