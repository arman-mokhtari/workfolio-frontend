import { Skeleton, Grid, CardContent, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fragment } from "react";

const CountingSkeleton = ({ orientation, countingCardData }) => {
  const theme = useTheme();
  const numCards = countingCardData.length;
  const numDividers = numCards <= 2 ? numCards - 1 : 2;
  return Array.from({ length: 3 }, (_, i) => (
    <Fragment key={i}>
      <Grid item xs={12}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skeleton
            width={50}
            variant="h3"
            sx={{
                borderRadius:1,
              fontSize: "1.5rem",
              fontWeight: "700",
              my: 2,
              [theme.breakpoints.between("md", "xl")]: {
                fontSize: "2rem",
              },
            }}
          />
          <Skeleton
            variant="text"
            width={120}
            sx={{
              mb: 2,
            }}
          />
        </CardContent>
      </Grid>
      {i < numDividers && (
        <Divider orientation={orientation} variant="middle" flexItem />
      )}
    </Fragment>
  ));
};

export default CountingSkeleton;
