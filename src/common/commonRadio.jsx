import { FormControlLabel, Radio } from "@mui/material";

const CommonRadio = ({ id, name, value, onChange, checked, label }) => {
  return (
    <FormControlLabel
      sx={{
        "& .MuiTypography-root": {
          fontSize: "0.92rem",
        },
        "& .MuiButtonBase-root:hover": {
          backgroundColor:"transparent"
        },
      }}
      value={value}
      control={
        <Radio name={name} id={id} checked={checked} onChange={onChange} />
      }
      label={label}
    />
  );
};

export default CommonRadio;
