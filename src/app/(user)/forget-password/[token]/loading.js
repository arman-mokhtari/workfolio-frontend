import CommonLoading from "@/common/loading";
import { Box } from "@mui/material";

export default function Loading() {

    return (
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CommonLoading />
      </Box>
    )
  }