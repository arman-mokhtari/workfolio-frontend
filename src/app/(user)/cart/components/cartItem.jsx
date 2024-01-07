"use client";
import {
  IconButton,
  TableCell,
  TableRow,
  Typography,
  Badge,
} from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useRemoveFromCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const CartItem = ({ cartItem }) => {
  const { _id, price, discount, quantity, title } = cartItem;
  const queryClient = useQueryClient();
  const { mutateAsync: remFromCartAsync } = useRemoveFromCart();

  const removeHandler = async () => {
    try {
      const { message } = await remFromCartAsync(_id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <TableRow
      sx={{
        "& .MuiTableCell-root": {
          fontWeight: "bold",
        },
      }}
    >
      <TableCell>
        <Typography
          sx={{
            ml: 1,
            whiteSpace: "nowrap",
          }}
          variant="span"
        >
          {title}
        </Typography>
      </TableCell>
      <TableCell>{toPersianNumbersWithComma(quantity)}</TableCell>
      <TableCell
        sx={{
          textDecoration: discount ? "line-through" : "unset",
        }}
        align="right"
      >
        {discount ? (
          <Badge
            sx={{
              "& .MuiBadge-badge": {
                right: -20,
                top: "50%",
              },
            }}
            badgeContent={"%" + toPersianNumbersWithComma(discount)}
            color="primary"
          >
            {toPersianNumbersWithComma(price)}
          </Badge>
        ) : (
          <> {toPersianNumbersWithComma(price)}</>
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={removeHandler} color="error">
          <DeleteOutlineOutlined />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
