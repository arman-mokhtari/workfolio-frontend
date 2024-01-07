"use client";
import Loading from "@/common/loading";
import { useQueryClient } from "@tanstack/react-query";

import { useGetCategories } from "@/hooks/useCategories";
import { includeObj } from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useGetBlogById, useUpdateBlog } from "@/hooks/useBlogs";
import BlogEditForm from "./components/blogEditForm";

const includesBlogKey = [
  "title",
  "description",
  "slug",
  "faSlug",
  "imageLink",
  "metaDescription",
  "metaTitle",
  "faqs",
  "articleBody",
  "headline",
  "wordCount",
];

const EditPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading: isLoadingBlog } = useGetBlogById(id);
  const { blog } = data || {};

  const { data: categoryData } = useGetCategories();
  const { categories } = categoryData || {};
  const [formData, setFormData] = useState({});

  const [tags, setTags] = useState(blog?.tags || []);

  const [selectedCategory, setSelectedCategory] = useState("");

  const { isLoading, mutateAsync } = useUpdateBlog();

  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (
      e.target.name.startsWith("question") ||
      e.target.name.startsWith("answer")
    ) {
      const faqIndex = e.target.name.slice(-1) - 1;
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
        blogId: blog._id,
        data: {
          ...formData,
          tags,
          category: selectedCategory,
        },
      });

      queryClient.invalidateQueries({ queryKey: ["get-blog"] });
      router.push("/admin/blogs");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (blog) {
      setTags(blog.tags);
      setSelectedCategory(blog.category._id);
      setFormData(includeObj(blog, includesBlogKey));
    }
  }, [data, blog]);

  const handleTagsChange = (event, value) => {
    setTags(value);
  };

  const handleSetCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (isLoadingBlog) return <Loading />;
  if (blog?._id !== id || !blog) return router.push("/404");
  return (
    <BlogEditForm
      onSubmit={handleSubmit}
      categories={categories}
      handleSetCategory={handleSetCategory}
      selectedCategory={blog?.category._id}
      tags={tags}
      handleTagsChange={handleTagsChange}
      isLoading={isLoading}
      blogData={formData}
      blogDataOnChange={handleChange}
    />
  );
};

export default EditPage;
