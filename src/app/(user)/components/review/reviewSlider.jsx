"use client";
import Slider from "react-slick";

import {
  Avatar,
  Box,
  Chip,
  CardContent,
  Rating,
  Typography,
  Skeleton,
  Stack,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { useGetAcceptedReviews } from "@/hooks/useReviews";
import { settings } from "@/constants/review/reviewSliderSetting";
import HoverCard from "@/common/hoverCard";
import { toLocalDateString } from "@/utils/toLocalDate";

const ReviewSlider = () => {
  const { data, isLoading } = useGetAcceptedReviews();
  const { acceptedReviews } = data || {};

  return (
    <>
      {isLoading ? (
        <Slider {...settings}>
          {Array.from({ length: 5 }, (_, i) => (
            <Box
              component="div"
              dir="rtl"
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box>
                <HoverCard
                  defaultElevation={4}
                  hoveredElevation={4}
                  square={true}
                    sx={{
                      position: "relative",
                      overflow: "visible",
                      mb: 3.5,
                      mx: 1,
                      borderRadius: 3,
                      p:2
                    }}
                >
                  <Stack>
                    <Stack
                      alignItems="center"
                      justifyContent="space-between"
                      direction="row"
                    >
                      <Skeleton height={30} width={120} />
                      <Skeleton height={50} width={80} />
                    </Stack>

                    <Stack
                      sx={{ mb: 2 }}
                      spacing={1}
                      alignItems="center"
                      direction="row"
                    >
                      <Skeleton variant="circular" width={40} height={40} />
                      <Stack direction="column">
                        <Skeleton
                          variant="text"
                          width={60}
                          sx={{ fontSize: "1rem" }}
                        />
                        <Skeleton
                          variant="text"
                          width={40}
                          sx={{ fontSize: "1rem" }}
                        />
                      </Stack>
                    </Stack>

                    <Skeleton
                      sx={{ borderRadius: 3 }}
                      variant="rectangular"
                      height={130}
                    />
                  </Stack>
                </HoverCard>
              </Box>
            </Box>
          ))}
        </Slider>
      ) : acceptedReviews?.length > 2 ? (
        <Slider {...settings}>
          {acceptedReviews.map(
            ({ message, rating, user, createdAt }, index) => (
              <Box
                component="div"
                dir="rtl"
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "310px",
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
                      mx: 1,
                      borderRadius: 3,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        height: 280,
                        flexDirection: "column",
                      }}
                    >
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
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Rating
                              name="read-only"
                              size="large"
                              value={rating}
                              readOnly
                            />
                          </Box>
                          <Image
                            alt="verified logo"
                            width="110"
                            height="45"
                            src="https://cdn.workfolio.ir/images/svg/misc/verified.svg"
                          />
                        </Box>
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
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography variant="body2">
                              {user ? user.name : "کاربر ناشناس"}
                            </Typography>
                            <Typography variant="body2">
                              {toLocalDateString(createdAt)}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flex: 1,
                          alignItems: "center",
                        }}
                      >
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
                      </Box>
                    </CardContent>
                  </HoverCard>
                </Box>
              </Box>
            )
          )}
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
