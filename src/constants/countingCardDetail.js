import {
    BusinessCenter,
    RocketLaunch,
    Star,
  } from "@mui/icons-material";
  
  export const countingCardData = [
    {
      title: "پروژه‌ها",
      icon: (
        <BusinessCenter
          sx={{
            color: "#037fff",
            marginLeft: 0.5,
          }}
        />
      ),
      total: 800,
      string: "+",
    },
    {
      title: "مشتریان وفادار",
      icon: (
        <Star
          sx={{
            color: "#037fff",
            marginLeft: 0.5,
          }}
        />
      ),
      total: 500,
      string: "+",
    },
    {
      title: "بهبود بهره‌وری",
      icon: (
        <RocketLaunch
          sx={{
            color: "#037fff",
            marginLeft: 0.5,
          }}
        />
      ),
      total: 73,
      string: "%",
    },
  ];
  