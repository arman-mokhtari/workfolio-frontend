"use client";
import Loading from "@/common/loading";
import { useQueryClient } from "@tanstack/react-query";

import { includeObj } from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useGetPageDataById, useUpdatePageData } from "@/hooks/UsePagesData";
import PageEditForm from "../../../../../../components/admin/pagesData/edit/pageEditForm";

const includesKey = [
  "title",
  "description",
  "englishTitle",
  "imageLink",
  "metaDescription",
  "metaTitle",
];

const EditPage = () => {
  const router = useRouter();

  const { id } = useParams();

  const { data, isLoading } = useGetPageDataById(id);
  const { pageData } = data || {};


  const [formData, setFormData] = useState({});

  const [tags, setTags] = useState(pageData?.tags || []);

  const { isPending, mutateAsync } = useUpdatePageData();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        id: pageData._id,
        data: {
          ...formData,
          tags,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["pages-data"] });
      router.push("/admin/pages-data");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (pageData) {
      setTags(pageData.tags);
      setFormData(includeObj(pageData, includesKey));
    }
  }, [data, pageData]);

  const handleTagsChange = (event, value) => {
    setTags(value);
  };


  if (isLoading) return <Loading />;
  if (pageData?._id !== id || !pageData) return router.push("/404");
  return (
    <PageEditForm
      onSubmit={handleSubmit}
      tags={tags}
      handleTagsChange={handleTagsChange}
      isLoading={isPending}
      pageData={formData}
      pageDataOnChange={handleChange}
    />
  );
};

export default EditPage;
