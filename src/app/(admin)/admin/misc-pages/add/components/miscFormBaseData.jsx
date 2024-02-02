import { Grid, TextField } from "@mui/material";
import { miscPageFormData } from "@/constants/miscPage/miscPageFormData";

const MiscFormBaseData = ({ miscPageData, miscPageDataOnChange }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
      {miscPageFormData.map((item, i) => {
        const value =
        miscPageData && miscPageData[item?.name] ? miscPageData[item.name] : "";
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

export default MiscFormBaseData;
