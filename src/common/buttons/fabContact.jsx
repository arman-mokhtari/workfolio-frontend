"use client";
import { Telegram } from "@mui/icons-material"
import { Fab, Tooltip } from "@mui/material"

const FabContact = () => {
  return (
    <Tooltip title="برای مشاوره در تلگرام کلیک کنید" placement="top" arrow>
          <Fab
            color="primary"
            component="a"
            href="https://t.me/Arman_Workfolio"
            target="_blank"
            rel="noopener"
            sx={{
              position: "fixed",
              bottom: 16,
              left: 16,
            }}
            size="small"
            aria-label="call"
          >
            <Telegram />
          </Fab>
        </Tooltip>
  )
}

export default FabContact