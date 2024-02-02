"use client";

import Loading from "@/common/loading";
import { useQueryClient } from "@tanstack/react-query";

import { includeObj } from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import MiscEditForm from "./components/miscEditForm";
import { useGetMiscPageById, useUpdateMiscPage } from "@/hooks/useMiscPage";

const includesMiscPageKey = ["title", "description", "slug"];

const EditPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data, isPending } = useGetMiscPageById(id);
  const { miscPage } = data || {};
  const [formData, setFormData] = useState({});
  const { isLoading, mutateAsync } = useUpdateMiscPage();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        miscPageId: miscPage._id,
        data: {
          ...formData,
        },
      });

      queryClient.invalidateQueries({ queryKey: ["get-misc"] });
      router.push("/admin/misc-pages");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (miscPage) {
      setFormData(includeObj(miscPage, includesMiscPageKey));
    }
  }, [data, miscPage]);
console.log(formData)
  if (isPending) return <Loading />;

  if (miscPage?._id !== id || !miscPage) return router.push("/404");
  return (

    <MiscEditForm
      onSubmit={handleSubmit}
      isLoading={isLoading}
      miscPageData={formData}
      miscPageDataOnChange={handleChange}
      setFormData={setFormData}
    />
  );
};

export default EditPage;
