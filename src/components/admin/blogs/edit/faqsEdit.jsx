import React, { Fragment } from "react";
import { Grid, TextField,FormLabel } from "@mui/material";

const FaqsEdit = ({blogData,blogDataOnChange}) => {
    const numberOfFAQs = blogData.faqs ? blogData.faqs.length : 4;

  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
      {[...Array(numberOfFAQs)].map((_, index) => (
        <Fragment key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`سوال ${index + 1}`}
              name={`question${index + 1}`}
              value={
                blogData && blogData.faqs && blogData.faqs[index]
                  ? blogData.faqs[index].question
                  : ""
              }
              onChange={blogDataOnChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={`پاسخ ${index + 1}`}
              name={`answer${index + 1}`}
              value={
                blogData && blogData.faqs && blogData.faqs[index]
                  ? blogData.faqs[index].answer
                  : ""
              }
              onChange={blogDataOnChange}
              fullWidth
            />
          </Grid>
        </Fragment>
      ))}
    </Grid>

    
  );
};

export default FaqsEdit;
