"use client";

import { Box, Divider, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@mui/material/styles";

import CountUp from "react-countup";
import Fade from "react-reveal/Fade";

import { countingCardData } from "@/constants/countingCardDetail";
import { Fragment } from "react";
import HoverCard from "@/common/hoverCard";

const CountingCard = () => {
  const theme = useTheme();

  //* جهت دیوایدر
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerWidth >= 600 ? "vertical" : "horizontal");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //* جهت دیوایدر

  //* شروع شمارش بعد از اسکرول
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView();
  const countRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (visible && countRef.current !== null) {
      countRef.current.start();
    }
  }, [visible]);
  //* شروع شمارش بعد از اسکرول

  //* تعداد دیوایدر ها
  const numCards = countingCardData.length;
  const numDividers = numCards <= 2 ? numCards - 1 : 2;

  return (
    <Grid
      container
      component="section"
      sx={{
        mb: 5,
        mt: 4,
      }}
    >
      <Grid item xs={12}>
        <Fade left>
          <Box ref={ref}>
            <HoverCard
              defaultElevation={4}
              hoveredElevation={10}
              sx={{
                display: "flex",
                borderRadius: 3,
                [theme.breakpoints.between("xs", "sm")]: {
                  flexDirection: "column",
                },
              }}
            >
              {countingCardData.map(({ total, string, title, icon }, index) => (
                <Fragment key={index}>
                  <Grid item xs={12}>
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h3"
                        component="div"
                        sx={{
                          fontWeight: "700",
                          color: "#037fff",
                          fontSize: "1.5rem",
                          my: 2,
                          [theme.breakpoints.between("md", "xl")]: {
                            fontSize: "2rem",
                          },
                        }}
                      >
                        {string}
                        <CountUp
                          start={0}
                          end={visible ? total : 0}
                          duration={5}
                          ref={countRef}
                        />
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          whiteSpace: "nowrap",
                          mb: 2,
                        }}
                      >
                        {title}
                        {icon}
                      </Typography>
                    </CardContent>
                  </Grid>
                  {index < numDividers && (
                    <Divider
                      orientation={orientation}
                      variant="middle"
                      flexItem
                    />
                  )}
                </Fragment>
              ))}
            </HoverCard>
          </Box>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default CountingCard;
