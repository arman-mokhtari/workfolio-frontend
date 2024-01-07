"use client"

import Loading from "@/common/loading";
import AdminPaymentsTable from "./components/paymentsTable";
import { useGetPayments } from "@/hooks/usePayments";

const PaymentsPage=()=>{
    const { isLoading, data } = useGetPayments();
    const { payments } = data || {};
  
    if (isLoading) return <Loading />;


return (
    <AdminPaymentsTable payments={payments} />
)
}
export default PaymentsPage;