import Link from "next/link";

import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import OperationStack from "@/common/admin/operationStack";

export const couponsTableColumns = (isSmallScreen, removeCouponHandler) => {
  return isSmallScreen
    ? [
        {
          field: "code",
          headerName: "کد",
          flex: 1,
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <OperationStack
              viewHref={`/admin/coupons/${params.row._id}`}
              editHref={`/admin/coupons/edit/${params.row._id}`}
              removeHandler={() => removeCouponHandler(params.row._id)}
            />
          ),
        },
      ]
    : [
        {
          field: "code",
          headerName: "کد",
          flex: 1,
        },
        {
          field: "type",
          headerName: "نوع",
          flex: 1,
        },
        {
          field: "amount",
          headerName: "مقدار",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.amount),
        },
        {
          field: "productIds",
          headerName: "شامل محصولات",
          flex: 1,
          valueGetter: (params) => {
            return (
              params.row.productIds
                ?.map((product) => product.title)
                .join(", ") || ""
            );
          },
        },
        {
          field: "usageCount",
          headerName: "مقدار مصرفی",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.usageCount),
        },
        {
          field: "usageLimit",
          headerName: "ظرفیت",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.usageLimit),
        },
        {
          field: "expireDate",
          headerName: "تاریخ انقضا",
          flex: 1,
          valueGetter: (params) =>
            toLocalDateStringShort(params.row.expireDate),
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <OperationStack
              viewHref={`/admin/coupons/${params.row._id}`}
              editHref={`/admin/coupons/edit/${params.row._id}`}
              removeHandler={() => removeCouponHandler(params.row._id)}
            />
          ),
        },
      ];
};
