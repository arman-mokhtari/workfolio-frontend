"use client";

import Loading from "@/common/loading";
import UsersTable from "./components/usersTable";
import { useGetUsers } from "@/hooks/useAuth";

const UserPage = () => {
  const { isLoading, data } = useGetUsers();
  const { users } = data || {};

  if (isLoading) return <Loading />;
  return <UsersTable users={users} />;
};

export default UserPage;
