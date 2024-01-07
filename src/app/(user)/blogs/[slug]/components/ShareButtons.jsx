"use client";
import { Telegram, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import {
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";

const ShareButtons = ({ url, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mt: 0.5,
        "& .MuiSvgIcon-root": {
          fontSize: "1.8rem",
        },
      }}
    >
      <Tooltip title="اشتراک گذاری در تلگرام">
        <TelegramShareButton url={url} title={title}>
          <Telegram
            sx={{
              color: "#29A9EB",
            }}
          />
        </TelegramShareButton>
      </Tooltip>
      <Tooltip title="اشتراک گذاری در واتس اپ">
  <WhatsappShareButton url={url} title={title}>
        <WhatsApp
          sx={{
            color: "#2AB318",
            mx: 0.75,
          }}
        />
      </WhatsappShareButton>
      </Tooltip>
    
      <Tooltip title="اشتراک گذاری در ایکس">
         <TwitterShareButton url={url} title={title}>
        <Twitter
          sx={{
            color: "#1D9BF0",
          }}
        />
      </TwitterShareButton>
      </Tooltip>
     
    </Box>
  );
};
export default ShareButtons;
