import OperationStack from "@/pages/(admin)/admin/common/operationStack";

export const miscPageTableColumns = (removeMiscPageHandler) => {
  return [
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
          viewHref={`/admin/misc-pages/${params.row._id}`}
          editHref={`/admin/misc-pages/edit/${params.row._id}`}
          removeHandler={() => removeMiscPageHandler(params.row._id)}
        />
      ),
    },
  ];
};
