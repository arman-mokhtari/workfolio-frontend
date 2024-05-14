"use client";
import Loading from "@/common/loading";
import { useQueryClient } from "@tanstack/react-query";

import { useGetProductById, useUpdateProduct } from "@/hooks/useProducts";
import { useGetCategories } from "@/hooks/useCategories";
import { includeObj } from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductEditForm from "./components/productEditForm";

const includesProductKey = [
  "title",
  "description",
  "slug",
  "faSlug",
  "brand",
  "price",
  "offPrice",
  "discount",
  "countInStock",
  "imageLink",
  "metaDescription",
  "metaTitle",
  "faqs",
  "demo",
];

const EditPage = () => {
  const router = useRouter();

  const { id } = useParams();

  const { data, isLoading: isLoadingProduct } = useGetProductById(id);
  const { product } = data || {};

  const { data: categoryData } = useGetCategories();
  const { categories } = categoryData || {};

  const [formData, setFormData] = useState({});

  const [tags, setTags] = useState(product?.tags || []);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { isLoading, mutateAsync } = useUpdateProduct();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    if (e.target.type === "number") {
      setFormData({
        ...formData,
        [e.target.name]: parseInt(e.target.value, 10),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
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
        productId: product._id,
        data: {
          ...formData,
          tags,
          category: selectedCategory,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["get-product"] });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (product) {
      setTags(product.tags);
      setSelectedCategory(product.category._id);
      setFormData(includeObj(product, includesProductKey));
    }
  }, [data, product]);

  const handleTagsChange = (event, value) => {
    setTags(value);
  };

  const handleSetCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  
  if (isLoadingProduct) return <Loading />;
  if (product?._id !== id || !product) return router.push("/404");
  return (
    <ProductEditForm
      onSubmit={handleSubmit}
      categories={categories}
      handleSetCategory={handleSetCategory}
      selectedCategory={product?.category._id}
      tags={tags}
      handleTagsChange={handleTagsChange}
      isLoading={isLoading}
      productData={formData}
      productDataOnChange={handleChange}
    />
  );
};

export default EditPage;
