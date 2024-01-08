"use client";

import Slider from "react-slick";
import {
  Avatar,
  Box,
  CardContent,
  Rating,
  Typography,
  Chip,
} from "@mui/material";
import Image from "next/image";
import { settings } from "@/constants/review/reviewSliderSetting";
import Loading from "@/common/loading";
import HoverCard from "@/common/hoverCard";
import { useGetAcceptedProductReviews } from "@/hooks/useProductReviews";

const ReviewSlider = ({ pId }) => {
  const { data, isLoading } = useGetAcceptedProductReviews(pId);
  const { acceptedReviews } = data || {};

  if (isLoading) return <Loading />;
  return (
    <>
      {acceptedReviews && acceptedReviews.length > 1 ? (
        <Slider {...settings}>
          {acceptedReviews.map(({ message, rating, user }, index) => (
            <Box
              component="div"
              dir="rtl"
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "350px",
                mt: 2,
              }}
            >
              <Box>
                <HoverCard
                  defaultElevation={4}
                  hoveredElevation={10}
                  square={true}
                  sx={{
                    position: "relative",
                    overflow: "visible",
                    mb: 3.5,
                    mx: 1.5,
                    minHeight: "300px",
                    borderRadius: 3,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            sx={{
                              mr: 1,
                            }}
                            alt={user ? user.name : "کاربر ناشناس"}
                          />
                          <Typography variant="body1">
                            {user ? user.name : "کاربر ناشناس"}
                          </Typography>
                        </Box>
                        <Image
                          alt="verified logo"
                          width="110"
                          height="45"
                          src="https://cdn.workfolio.ir/images/svg/misc/verified.svg"
                        />
                      </Box>

                      <Box>
                        <Rating
                          sx={{
                            mt: 2,
                          }}
                          name="read-only"
                          value={rating}
                          readOnly
                        />
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: "15px",
                        fontSize: "1rem",
                        lineHeight: "2rem",
                        display: "-webkit-box",
                        "-webkit-line-clamp": "3",
                        "-webkit-box-orient": "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {message}
                    </Typography>
                  </CardContent>
                </HoverCard>
              </Box>
            </Box>
          ))}
        </Slider>
      ) : (
        <Box
          sx={{
            mt: 3,
            textAlign: "center",
          }}
        >
          <Chip label="اولین نفری باشید که نظر خود را به اشتراک می‌گذارد." />
        </Box>
      )}
    </>
  );
};

export default ReviewSlider;
