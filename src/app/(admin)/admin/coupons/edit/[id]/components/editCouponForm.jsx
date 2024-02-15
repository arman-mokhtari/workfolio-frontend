import Link from "next/link";

import {
  Box,
  Grid,
  TextField,
  CardContent,
  Card,
  Stack,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Undo, AddTask } from "@mui/icons-material";
import Loading from "@/common/loading";
import { couponsFormData } from "@/constants/couponsFieldsData";
import CouponTimePicker from "./timePicker";
import EditSelectCoupons from "./selectCoupons";

const EditCouponForm = ({
  formData,
  onSubmit,
  onFormChange,
  type,
  setType,
  products,
  onChangeSelect,
  expireDate,
  setExpireDate,
  isLoading,
  defaultValue = [],
}) => {
  return (
    <Card>
      <CardContent>
        <Box component="form" onSubmit={onSubmit}>
          <FormLabel>ویرایش کد تخفیف</FormLabel>
          <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            {couponsFormData.map((item, index) => {
              const value =
                formData && formData[item?.name] ? formData[item.name] : "";
              return (
                <Grid item key={index} xs={12} sm={6}>
                  <TextField
                    key={index}
                    label={item.label}
                    name={item.name}
                    type={item.type}
                    value={value}
                    onChange={onFormChange}
                    fullWidth
                  />
                </Grid>
              );
            })}

            <Grid item xs={12} sm={6}>
              <EditSelectCoupons
                defaultValue={defaultValue}
                onChangeSelect={onChangeSelect}
                products={products}
              />
            </Grid>
            <Grid column item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormLabel
                  sx={{
                    mb: 1,
                  }}
                >
                  تاریخ انقضا
                </FormLabel>
                <CouponTimePicker
                  expireDate={expireDate}
                  setExpireDate={setExpireDate}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                نوع کد تخفیف
              </FormLabel>
              <RadioGroup row name="row-radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      value="percent"
                      checked={type === "percent"}
                      onChange={(e) => setType(e.target.value)}
                    />
                  }
                  label="درصد"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      value="fixedProduct"
                      checked={type === "fixedProduct"}
                      onChange={(e) => setType(e.target.value)}
                    />
                  }
                  label="قیمت ثابت"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Stack spacing={2} direction="row" alignItems="center">
            {isLoading ? (
              <Loading />
            ) : (
              <Button
                type="submit"
                color="success"
                variant="contained"
                endIcon={<AddTask />}
              >
                تایید
              </Button>
            )}

            <Button
              component={Link}
              role="link"
               
              href="/admin/coupons"
              variant="outlined"
              aria-label="بازگشت"
              endIcon={<Undo />}
            >
              بازگشت به قبل
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EditCouponForm;
