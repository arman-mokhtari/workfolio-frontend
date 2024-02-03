import OperationStack from "@/pages/(admin)/admin/common/operationStack";

export const blogsTableColumns = (isSmallScreen, removeBlogHandler) => {
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
              editHref={`/admin/blogs/edit/${params.row._id}`}
              viewHref={`/admin/blogs/${params.row._id}`}
              removeHandler={() => removeBlogHandler(params.row._id)}
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
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <OperationStack
              editHref={`/admin/blogs/edit/${params.row._id}`}
              viewHref={`/admin/blogs/${params.row._id}`}
              removeHandler={() => removeBlogHandler(params.row._id)}
            />
          ),
        },
      ];
};
