import { Telegram, Twitter, WhatsApp } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";
import {
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";

const ShareButtons = ({ url }) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{
        mt: 0.5,
        "& .MuiSvgIcon-root": {
          fontSize: "1.8rem",
        },
      }}
    >
      <Tooltip title="اشتراک گذاری در تلگرام">
        <TelegramShareButton url={url}>
          <Telegram
            sx={{
              color: "#29A9EB",
            }}
          />
        </TelegramShareButton>
      </Tooltip>
      <Tooltip title="اشتراک گذاری در واتس اپ">
        <WhatsappShareButton url={url}>
          <WhatsApp
            sx={{
              color: "#2AB318",
              mx: 0.75,
            }}
          />
        </WhatsappShareButton>
      </Tooltip>

      <Tooltip title="اشتراک گذاری در ایکس">
        <TwitterShareButton url={url}>
          <Twitter
            sx={{
              color: "#1D9BF0",
            }}
          />
        </TwitterShareButton>
      </Tooltip>
    </Stack>
  );
};
export default ShareButtons;
