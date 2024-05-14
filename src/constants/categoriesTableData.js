import OperationStack from "@/common/admin/operationStack";

export const categoriesTableColumns = (
  isSmallScreen,
  removeCategoryHandler
) => {
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
              viewHref={`/admin/categories/${params.row._id}`}
              editHref={`/admin/categories/edit/${params.row._id}`}
              removeHandler={() => removeCategoryHandler(params.row._id)}
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
          field: "_id",
          headerName: "آیدی",
          flex: 1,
        },
        {
          field: "description",
          headerName: "توضیحات",
          flex: 1,
        },
        {
          field: "englishTitle",
          headerName: "عنوان انگلیسی",
          flex: 1,
        },
        {
          field: "type",
          headerName: "نوع",
          flex: 1,
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <OperationStack
              viewHref={`/admin/categories/${params.row._id}`}
              editHref={`/admin/categories/edit/${params.row._id}`}
              removeHandler={() => removeCategoryHandler(params.row._id)}
            />
          ),
        },
      ];
};
