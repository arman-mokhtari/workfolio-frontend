import { LoadingButton } from "@mui/lab";

const LoadingBtn = ({ text, ...rest }) => {
  return (
    <LoadingButton
      role="link"
      variant="contained"
      color="primary"
      {...rest}
    >
      {text}
    </LoadingButton>
  );
};

export default LoadingBtn;
