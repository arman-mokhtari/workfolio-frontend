"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Box } from "@mui/material";
import { useAddBlog } from "@/hooks/useBlogs";
import { useGetCategories } from "@/hooks/useCategories";
import BlogForm from "./components/blogForm";

const AddBlogPage = () => {
  const { isLoading, mutateAsync } = useAddBlog();
  const { data } = useGetCategories();
  const { categories } = data || {};
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    faSlug: "",
    imageLink: "",
    description: "",
    metaDescription:"",
    metaTitle:"",
    articleBody:"",
    headline:"",
    wordCount:"",
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
    // سایر فیلدها
    setFormData({ ...formData, [e.target.name]: e.target.value });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory,
      });
      router.push("/admin/blogs");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Box
      sx={{
        width: 1,
        overflowX:"hidden"
      }}
    >
      <BlogForm
        onSubmit={handleSubmit}
        categories={categories}
        handleSetCategory={handleSetCategory}
        tags={tags}
        handleTagsChange={handleTagsChange}
        isLoading={isLoading}
        blogData={formData}
        blogDataOnChange={handleChange}
      />
    </Box>
  );
};

export default AddBlogPage;
