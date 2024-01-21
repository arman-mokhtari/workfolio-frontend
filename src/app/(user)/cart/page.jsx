"use client";
import { useGetUser } from "@/hooks/useAuth";
import { Grid } from "@mui/material";
import Loading from "@/common/loading";
import CartSummary from "./components/cartSummary";
import { useTheme } from "@mui/material/styles";

import EmptyCart from "./components/emptyCart";
import HoverCard from "@/common/hoverCard";
import CartItemTable from "./components/cartTable";

const CartPage = () => {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  const theme = useTheme();

  if (isLoading) return <Loading />;

  if (!user?.cart?.products || user?.cart?.products?.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Grid
      spacing={3}
      sx={{
        minHeight: "calc(100vh - 128px)",
        display: "flex",
        justifyContent: "center",
        p: 3,
        pt: 4,
        "& .MuiTypography-root": {
          [theme.breakpoints.only("xs")]: {
            fontSize: "0.8rem",
          },
        },
      }}
      container
    >
      <Grid item xs={12} md={8}>
        <HoverCard defaultElevation={4} hoveredElevation={10}>
          <CartItemTable />
        </HoverCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <CartSummary payDetail={cart.payDetail} />
      </Grid>
    </Grid>
  );
};

export default CartPage;
