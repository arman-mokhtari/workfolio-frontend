import { Box, Rating, Typography } from "@mui/material";
import { useState } from "react";

const ReviewRating = ({ onRatingChange,text }) => {
  const [ratingValue, setRatingValue] = useState(4);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">
        {text}
      </Typography>
      <Rating
        name="rating"
        size="large"
        value={ratingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
          onRatingChange(newValue);
        }}
      />
    </Box>
  );
};

export default ReviewRating;
