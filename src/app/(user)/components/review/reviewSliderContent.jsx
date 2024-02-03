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
import { settings } from "@/constants/review/sliderSetting";
import HoverCard from "@/common/hoverCard";
import { toLocalDateString } from "@/utils/toLocalDate";

const ReviewSliderContent = ({ acceptedReviews }) => {
  const srcImg = "https://cdn.workfolio.ir/images/svg/misc/verified.svg";

  return acceptedReviews?.length > 2 ? (
    <Slider {...settings}>
      {acceptedReviews?.map(({ message, rating, user, createdAt }, index) => (
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
                    }}
                  >
                    <Box>
                      <Rating
                        sx={{
                          mt: 2,
                        }}
                        name="read-only"
                        size="large"
                        value={rating}
                        readOnly
                      />
                    </Box>
                    <Image
                      priority
                      alt="verified logo"
                      width="110"
                      height="45"
                      placeholder="blur"
                      blurDataURL={srcImg}
                      src={srcImg}
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
  );
};

export default ReviewSliderContent;
