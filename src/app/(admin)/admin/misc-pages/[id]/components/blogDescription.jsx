import { CardContent, Typography, CardHeader } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import HoverCard from "@/common/hoverCard";

const MiscPageDescription = ({ miscPage }) => {
  const { description, title } = miscPage;

  return (
    <HoverCard
      defaultElevation={4}
      hoveredElevation={10}
      sx={{
        position: "relative",
      }}
    >
      <CardContent>
        <CardHeader title="توضیحات صفحه متفرقه" subheader={title} />
        <Typography>{ReactHtmlParser(description)}</Typography>
      </CardContent>
    </HoverCard>
  );
};

export default MiscPageDescription;
