"use client";

import { Box, Button, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { toast } from "react-hot-toast";
import HoverCard from "@/common/hoverCard";

import ShopNow from "@/components/buttons/shopNow";
import { useCreatePayment } from "@/hooks/usePayments";
import AddCouponForm from "./addCouponForm";
import PaymentTextarea from "./paymentTextarea";
import { useState } from "react";

const CartSummary = ({ payDetail }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setMessage(newValue);
  };

  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useCreatePayment();

  const ItemsPriceDetail = [
    { label: "جمع کل:", value: totalGrossPrice },
    { label: "تخفیف:", value: totalOffAmount },
    { label: "مبلغ قابل پرداخت:", value: totalPrice },
  ];

  const filteredItemsPriceDetail = ItemsPriceDetail.filter(
    (detail) => detail.value > 0
  );
  
  const createPaymentHandler = async () => {
    try {
      const { gatewayURL } = await mutateAsync({
        additionalInformation: message,
      });

      window.location.href = gatewayURL;
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <HoverCard defaultElevation={4} hoveredElevation={10}>
      <Box
        sx={{
          m: 2,
        }}
      >
        <AddCouponForm />
        {filteredItemsPriceDetail.map((detail, index) => (
          <Box
            key={index}
            sx={{
              my: 1.5,
              fontSize: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "primary.main",
              alignItems: "center",
            }}
          >
            <Typography>{detail.label}</Typography>
            <Typography>
              {toPersianNumbersWithComma(detail.value)} تومان
            </Typography>
          </Box>
        ))}
        <PaymentTextarea handleInputChange={handleInputChange} />
        <ShopNow variant="outlined" text="ادامه خرید" fullWidth={true} />
        <Box>
          <Button
            disabled={isPending}
            sx={{
              mt: 1.5,
              mb: 0.5,
              whiteSpace: "nowrap",
            }}
            color="error"
            fullWidth
            variant="contained"
            onClick={createPaymentHandler}
          >
            {isPending ? "در حال انتقال به درگاه پرداخت..." : "پرداخت"}
          </Button>
        </Box>
      </Box>
    </HoverCard>
  );
};

export default CartSummary;
