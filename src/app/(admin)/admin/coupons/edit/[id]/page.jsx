"use client";

import Loading from "@/common/loading";
import { useGetOneCoupon, useUpdateCoupon } from "@/hooks/useCoupons";
import { useGetAllProducts } from "@/hooks/useProducts";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import EditCouponForm from "./components/editCouponForm";
import { useQueryClient } from "@tanstack/react-query";

const EditCouponPage = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetOneCoupon(id);
  const { coupon } = data || {};

  const { data: productsData } = useGetAllProducts();
  const { products } = productsData || {};

  const [formData, setFormData] = useState({});
  const [type, setType] = useState("");

  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());

  const { isLoading: isUpdatingCoupon, mutateAsync } = useUpdateCoupon();
  
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        id: coupon._id,
        data: {
          ...formData,
          type,
          expireDate: new Date(expireDate).toISOString(),
          productIds: productIds,
        },
      });
      toast.success(message);
      router.push("/admin/coupons");
      queryClient.invalidateQueries({ queryKey: ["get-coupon"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (coupon) {
      setType(coupon.type);
      setProductIds(coupon.productIds);
      setFormData({
        code: coupon.code,
        amount: coupon.amount,
        usageLimit: coupon.usageLimit,
      });
      setExpireDate(new Date(coupon.expireDate));
    }
  }, [coupon]);

  const handleSetProductIds = (event) => {
    setProductIds(event.target.value);
  };

  if (isLoading) return <Loading />;
  if (coupon?._id !== id || !coupon) return router.push("/404");
  return (
    <EditCouponForm
      expireDate={expireDate}
      setExpireDate={setExpireDate}
      type={type}
      setType={setType}
      formData={formData}
      isLoading={isUpdatingCoupon}
      onChangeSelect={handleSetProductIds}
      onFormChange={handleFormChange}
      onSubmit={handleSubmit}
      products={products}
      defaultValue={coupon.productIds}
    />
  );
};

export default EditCouponPage;
