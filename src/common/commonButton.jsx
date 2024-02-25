import { Box, Button } from "@mui/material";
import Loading from "./loading";

const CommonButton = ({ isLoading, text, mt, fullWidth, width,color }) => {
  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <Button
          variant="contained"
          color={color}
          fullWidth={fullWidth}
          sx={{
            mt: mt,
            width: width,
          }}
          type="submit"
          aria-label="submit"
        >
          {text}
        </Button>
      )}
    </Box>
  );
};

export default CommonButton;
