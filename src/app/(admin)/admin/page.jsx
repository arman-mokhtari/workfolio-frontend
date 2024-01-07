"use client";

import Loading from "@/common/loading";
import { useGetUser } from "@/hooks/useAuth";
import { Grid } from "@mui/material";
import UserDataCard from "./components/userDataCard";
import UserShoppingData from "./components/userShoppingData";
import { useGetPayments } from "@/hooks/usePayments";
import SalesChart from "./components/salesChart";
import AverageSales from "./components/averageSales";

const AdminPanel = () => {
  const { isLoading: userLoading, data: userData } = useGetUser();
  const { user } = userData || {};

  const { isLoading: paymentsLoading, data } = useGetPayments();
  const { payments } = data || {};

  if (userLoading) return <Loading />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <UserDataCard user={user} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <UserShoppingData
          isLoading={paymentsLoading}
          payments={payments}
          user={user}
        />
      </Grid>
      <Grid
        item
        xs={12} lg={6}
      >
        <SalesChart isLoading={paymentsLoading} payments={payments} />
      </Grid>
      <Grid
        item
        xs={12} lg={6}
      >
        <AverageSales isLoading={paymentsLoading} payments={payments} />
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
