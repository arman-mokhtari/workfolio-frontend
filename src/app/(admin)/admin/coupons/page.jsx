"use client";

import { useGetCoupons } from "@/hooks/useCoupons";
import Loading from "@/common/loading";
import CouponsTable from "../../../../components/admin/coupons/main/couponsTable";
import HeadStack from "../../../../common/admin/headStack";

const CouponPage = () => {
  const { isLoading, data } = useGetCoupons();
  const { coupons } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <HeadStack href="/admin/coupons/add" title="کد تخفیف" />
      <CouponsTable coupons={coupons} />
    </>
  );
};

export default CouponPage;
