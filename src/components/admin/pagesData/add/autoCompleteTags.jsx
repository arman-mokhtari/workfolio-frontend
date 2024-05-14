import { TextField, Autocomplete, Chip } from "@mui/material";

const AutocompleteTags = ({tags,handleTagsChange}) => {
 
  return (
    <Autocomplete
      multiple
      id="tags"
      value={tags}
      onChange={handleTagsChange}
      freeSolo
      limitTags={2}
      options={tags}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} label="تگ‌ها" placeholder="تگ" />
      )}
    />
  );
};

export default AutocompleteTags;
