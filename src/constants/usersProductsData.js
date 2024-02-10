import { toPersianNumbers } from "@/utils/toPersianNumbers";
import OperationStack from "@/pages/(admin)/admin/common/operationStack";

export const productsTableColumns = (isSmallScreen, removeProductHandler) => {
  return isSmallScreen
    ? [
        {
          field: "title",
          headerName: "عنوان",
          flex: 1,
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <OperationStack
              viewHref={`/admin/products/${params.row._id}`}
              editHref={`/admin/products/edit/${params.row._id}`}
              removeHandler={() => removeProductHandler(params.row._id)}
            />
          ),
        },
      ]
    : [
        {
          field: "title",
          headerName: "عنوان",
          flex: 1,
        },
        {
          field: "category",
          headerName: "دسته بندی",
          flex: 1,
          valueGetter: (params) => params.row.category?.title,
        },
        {
          field: "price",
          headerName: "قیمت",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.price),
        },
        {
          field: "offPrice",
          headerName: "تخفیف",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.offPrice),
        },
        {
          field: "countInStock",
          headerName: "موجودی",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.countInStock),
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <OperationStack
              viewHref={`/admin/products/${params.row._id}`}
              editHref={`/admin/products/edit/${params.row._id}`}
              removeHandler={() => removeProductHandler(params.row._id)}
            />
          ),
        },
      ];
};
