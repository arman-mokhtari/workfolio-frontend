"use client";

import Loading from "@/common/loading";
import { useGetUser } from "@/hooks/useAuth";
import { Grid } from "@mui/material";
import UserDataCard from "./components/userDataCard";
import UserShoppingData from "./components/userShoppingData";
import PaymentTable from "./components/paymentTable";

const UserProfile = () => {
  const { isLoading, data } = useGetUser();
  const { user, payments } = data || {};

  if (isLoading) return <Loading />;

 const modifiedPayments= payments?.filter((payment) => payment.status === "COMPLETED")

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <UserDataCard user={user} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <UserShoppingData payments={modifiedPayments} user={user} />
      </Grid>
      <Grid item xs={12}>
        <PaymentTable payments={modifiedPayments} />
      </Grid>
    </Grid>
  );
};

export default UserProfile;
