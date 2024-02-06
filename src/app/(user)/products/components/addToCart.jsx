"use client";

import { useGetUser } from "@/hooks/useAuth";
import { useAddToCart } from "@/hooks/useCart";
import { Button, Fade, Tooltip } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useTheme } from "@mui/material/styles";

const AddToCart = ({ product }) => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  const { isPending, mutateAsync } = useAddToCart();

  const theme = useTheme();
  const addToCartHandler = async () => {
    if (!user) {
      toast.error("ابتدا وارد شوید.");
      router.push("/auth");
      return;
    }
    try {
      const { message } = await mutateAsync(product._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const isInCart = (user, product) => {
    if (!user) return false;
    return user.cart?.products.some((p) => p.productId === product._id);
  };

  return (
    <>
      {isInCart(user, product) ? (
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 500 }}
          title="رفتن به صفحه پرداخت"
          placement="top"
        >
          <Button
            color="myRed"
            role="link"
            sx={{
              color: theme.palette.textColor.main,
            }}
            fullWidth
            variant="contained"
            component={Link}
            aria-label="رفتن به صفحه پرداخت"
            href="/cart"
          >
            تکمیل سفارش
          </Button>
        </Tooltip>
      ) : (
        <Button
          disabled={isPending || isLoading}
          onClick={addToCartHandler}
          fullWidth
          variant="contained"
        >
          اضافه به سبد خرید
        </Button>
      )}
    </>
  );
};

export default AddToCart;
