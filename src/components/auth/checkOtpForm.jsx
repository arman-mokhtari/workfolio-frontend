import OtpInput from "react-otp-input";
import { Box, Button, Typography } from "@mui/material";
import { ArrowForwardIos, Edit } from "@mui/icons-material";

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
      <Button aria-label="set previous step" onClick={goBack}>
        <ArrowForwardIos />
        بازگشت
      </Button>
      {otpResponse && (
        <Typography>
          {otpResponse.message}
          <Button aria-label="set previous step" onClick={goBack}>
            <Edit />
          </Button>
        </Typography>
      )}

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
          shouldAutoFocus
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "2.5rem",
            padding: "0.7rem 0.2rem",
            border: "1px solid #1769aa",
            borderRadius: "0.2rem",
            outline: "none",
          }}
          containerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            columnGap: 6,
            alignSelf: "center",
          }}
        />
        <Button
          type="submit"
          aria-label="submit"
          disabled={isPending || otp.length !== 6}
          fullWidth
          variant="contained"
          sx={{ my: 1 }}
        >
          تایید
        </Button>
      </Box>
      <Box>
        {time > 0 ? (
          <Typography variant="caption">
            در صورتی که کد تایید را دریافت نکرده‌اید {time} ثانیه دیگر مجددا
            امتحان کنید!
          </Typography>
        ) : (
          <Button
            aria-label="resend"
            variant="outlined"
            size="small"
            onClick={onResendOtp}
            color="inherit"
            sx={{
              color: "text.secondary",
              borderColor: "text.secondary",
            }}
          >
            <Typography variant="caption">ارسال مجدد کد!</Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};
export default CheckOtpForm;
