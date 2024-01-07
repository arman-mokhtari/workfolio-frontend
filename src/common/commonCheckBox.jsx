import { Checkbox, FormControlLabel } from "@mui/material";

const CommonCheckBox = ({ name, id, checked, value, onChange, label }) => {
  return (
    <FormControlLabel
      sx={{
        "& .MuiTypography-root": {
          fontSize: "0.92rem",
        },
        "& .MuiButtonBase-root:hover": {
          backgroundColor: "transparent",
        },
        whiteSpace:"nowrap",
      }}
      control={
        <Checkbox
          name={name}
          id={id}
          checked={checked}
          value={value}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
};

export default CommonCheckBox;
