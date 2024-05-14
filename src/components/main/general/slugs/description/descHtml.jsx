import { Box } from "@mui/material";
import ReactHtmlParser from "react-html-parser";

const DescHtml = ({ description }) => {

  return (
    <Box
      className="custom_workfolio_desc"
      sx={{
        lineHeight: 1.7,
        "& h2": {
          fontSize: "1.2rem",
        },
      }}
    >
      {ReactHtmlParser(description)}
      <Box className="clearfix" />
    </Box>
  );
};

export default DescHtml;
