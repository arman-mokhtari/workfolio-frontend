"use client";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import PaymentDataCard from "./components/PaymentDataCard";
import { useGetPaymentById } from "@/hooks/usePayments";

const PaymentPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentById(id);
  const { payment } = data || {};

  if (isLoading) return <Loading />;
  const paymentData = payment && payment[0];
  if (paymentData?._id !== id || !paymentData) return router.push("/404");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <PaymentDataCard payment={paymentData} />
      </Grid>
    </Grid>
  );
};

export default PaymentPage;
