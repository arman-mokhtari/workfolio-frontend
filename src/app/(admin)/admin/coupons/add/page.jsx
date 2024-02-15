"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

import AddCouponForm from "./components/addCouponForm";
import { useGetAllProducts } from "@/hooks/useProducts";
import { useAddNewCoupon } from "@/hooks/useCoupons";

const AddCoupon = () => {
  const { data } = useGetAllProducts();
  const { products } = data || {};
  const [formData, setFormData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });

  const [type, setType] = useState("percent");
  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const { isLoading, mutateAsync } = useAddNewCoupon();
  const router = useRouter();
  const handleFormChange = (e) => {
    if (e.target.type === "number") {
      setFormData({
        ...formData,
        [e.target.name]: parseInt(e.target.value, 10),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        type,
        expireDate: new Date(expireDate).toISOString(),
        productIds: productIds,
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const handleSetProductIds = (event) => {
    setProductIds(event.target.value);
  };

  return (
    <AddCouponForm
      expireDate={expireDate}
      setExpireDate={setExpireDate}
      type={type}
      setType={setType}
      formData={formData}
      isLoading={isLoading}
      onChangeSelect={handleSetProductIds}
      onFormChange={handleFormChange}
      onSubmit={handleSubmit}
      products={products}
    />
  );
};

export default AddCoupon;
