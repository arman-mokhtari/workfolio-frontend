import OtpInput from "react-otp-input";
import { Box, Button, Typography } from "@mui/material";
import { ArrowForwardIos, Edit } from "@mui/icons-material";
import CommonButton from "@/common/commonButton";
const CheckOtpForm = ({
  otpResponse,
  onSubmit,
  otp,
  setOtp,
  goBack,
  time,
  onResendOtp,
  isPending,
}) => {
  return (
    <Box>
      <Button onClick={goBack}>
        <ArrowForwardIos />
        بازگشت
      </Button>
      {otpResponse && (
        <Typography>
          {otpResponse.message}
          <Button onClick={goBack}>
            <Edit />
          </Button>
        </Typography>
      )}
      <Box>
        {time > 0 ? (
          <Typography
            variant="body2"
            sx={{
              my: 1,
            }}
          >
            {time} ثانیه تا ارسال مجدد کد
          </Typography>
        ) : (
          <Button onClick={onResendOtp}>ارسال مجدد کد!</Button>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
        component="form"
        onSubmit={onSubmit}
      >
        <Typography>کد تایید را وارد کنید:</Typography>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid #1769aa",
            borderRadius: "0.5rem",
            outline: "none",
          }}
          containerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            columnGap: 6,
            alignSelf: "center",
          }}
        />
        <Button  type="submit"
          disabled={isPending}
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}>
          تایید
        </Button>
      </Box>
    </Box>
  );
};
export default CheckOtpForm;
