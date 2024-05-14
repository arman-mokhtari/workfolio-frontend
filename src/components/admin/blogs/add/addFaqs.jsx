import { Fragment } from "react"
import {Grid,TextField,} from "@mui/material"

const AddFaqs = ({blogDataOnChange}) => {
    const numberOfFAQs = 4;
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            {[...Array(numberOfFAQs)].map((_, index) => (
              <Fragment key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label={`سوال ${index + 1}`}
                    name={`question${index + 1}`}
                    onChange={blogDataOnChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label={`پاسخ ${index + 1}`}
                    name={`answer${index + 1}`}
                    onChange={blogDataOnChange}
                    fullWidth
                  />
                </Grid>
              </Fragment>
            ))}
          </Grid>
  )
}

export default AddFaqs