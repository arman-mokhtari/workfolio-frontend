"use client";
import { useGetUser } from "@/hooks/useAuth";
import {
  Card,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Loading from "@/common/loading";
import CartSummary from "./components/cartSummary";
import { useTheme } from "@mui/material/styles";

import CartItem from "./components/cartItem";
import EmptyCart from "./components/emptyCart";
import HoverCard from "@/common/hoverCard";

const CartPage = () => {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  const theme = useTheme();

  if (isLoading) return <Loading />;


  if (!user?.cart?.products || user?.cart?.products?.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <Grid
        spacing={3}
        sx={{
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
            <TableContainer component={Paper}>
              <Table
                sx={{
                  minWidth: 350,

                  borderCollapse: "separate",
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>نام محصول</TableCell>
                    <TableCell>تعداد</TableCell>
                    <TableCell align="right">قیمت</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {cart &&
                    cart.map(
                      (cartItem, i) =>
                        cartItem.productDetail &&
                        cartItem.productDetail.map((item, j) => (
                          <CartItem key={`${i}-${j}`} cartItem={item} />
                        ))
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          </HoverCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <CartSummary cart={cart} />
        </Grid>
      </Grid>
    </>
  );
};

export default CartPage;
