import Box from "@mui/material/Box";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { ChevronLeft, ExpandMore } from "@mui/icons-material";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const ProductTree = ({ cart }) => {
  return (
    <Box sx={{ flexGrow: 1, mt: 1 }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronLeft />}
      >
        <TreeItem nodeId="1" label="اقلام فاکتور">
          {cart?.productDetail?.map(
            ({ price, quantity, offPrice, title }, index) => (
              <TreeItem
                sx={{
                  "& li .MuiTreeItem-label": {
                    fontSize: "0.95rem",
                  },
                }}
                key={index}
                nodeId={`product-${index}`}
                label={title}
              >
                <TreeItem
                  nodeId={`quantity-${index}`}
                  label={`تعداد: ${toPersianNumbersWithComma(quantity)} عدد`}
                />
                <TreeItem
                  nodeId={`price-${index}`}
                  label={`قیمت: ${toPersianNumbersWithComma(price)} تومان`}
                />
                <TreeItem
                  nodeId={`discount-${index}`}
                  label={`تخفیف: ${
                    toPersianNumbersWithComma(offPrice) || 0
                  } تومان`}
                />
                <TreeItem
                  sx={{
                    color: "primary.main",
                  }}
                  nodeId={`total-${index}`}
                  label={`مبلغ نهایی: ${
                    toPersianNumbersWithComma(price - offPrice) ||
                    toPersianNumbersWithComma(price)
                  } تومان`}
                />
              </TreeItem>
            )
          )}
        </TreeItem>
      </TreeView>
    </Box>
  );
};
export default ProductTree;
