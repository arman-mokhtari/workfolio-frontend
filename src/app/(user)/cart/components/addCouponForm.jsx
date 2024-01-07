"use client";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { useAddCouponToCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const AddCouponForm = () => {
  const [couponCode, setCouponCode] = useState("");
  const { isPending, mutateAsync } = useAddCouponToCart();

  const queryClient = useQueryClient();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setCouponCode(newValue);
  };

  const handleAddCouponToCart = async () => {
    try {
      const { message } = await mutateAsync({
        couponCode,
      });
      setCouponCode("");
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      setCouponCode("");
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel>کد تخفیف را وارد کنید</InputLabel>
      <OutlinedInput
        value={couponCode}
        label="کد تخفیف را وارد کنید"
        type="text"
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            <Button
              disabled={isPending}
              variant="contained"
              size="small"
              edge="end"
              aria-label="toggle password visibility"
              onClick={handleAddCouponToCart}
            >
              اعمال کد
            </Button>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default AddCouponForm;
