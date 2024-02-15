import { Typography, Stack } from "@mui/material";
import { toLocalDateString } from "@/utils/toLocalDate";
import MiscCardLayout from "./miscCardLayout";

const MiscCard = ({ miscPage }) => {
  return (
    <MiscCardLayout>
      <Stack
        spacing={1}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          noWrap
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            lineHeight: "1.8rem",
          }}
          variant="h1"
        >
          {miscPage?.title}
        </Typography>
        <Typography
          noWrap
          variant="caption"
          sx={{
            fontSize: "0.90rem",
          }}
        >
          آخرین بروزرسانی : {toLocalDateString(miscPage?.updatedAt)}
        </Typography>
      </Stack>
    </MiscCardLayout>
  );
};

export default MiscCard;
