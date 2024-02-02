import { Grid, TextField } from "@mui/material";
import { miscPageFormData } from "@/constants/miscPage/miscPageFormData";

const MiscEditFormBaseData = ({ miscPageData, miscPageDataOnChange }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={11.9} md={12}></Grid>
      {miscPageFormData.map((item, i) => {
        const value =
          miscPageData && miscPageData[item?.name]
            ? miscPageData[item.name]
            : "";
        return (
          <Grid item key={i} xs={12} sm={6}>
            <TextField
              label={item.label}
              name={item.name}
              value={value}
              onChange={miscPageDataOnChange}
              fullWidth
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MiscEditFormBaseData;
