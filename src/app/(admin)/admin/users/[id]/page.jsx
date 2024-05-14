"use client";

import { useGetUserById } from "@/hooks/useAuth";
import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import UserDataCard from "../../../../../components/admin/users/id/userDataCard";
import UserShoppingData from "../../../../../components/admin/users/id/userShoppingData";

const AdminPanel = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading } = useGetUserById(id);
  const { user, payments } = data || {};

  if (isLoading) return <Loading />;
  const modifiedPayments = payments?.filter(
    (payment) => payment.status === "COMPLETED"
  );
  if (user?._id !== id || !user) return router.push("/404");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <UserDataCard user={user} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <UserShoppingData
          isLoading={isLoading}
          payments={modifiedPayments}
          user={user}
        />
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
