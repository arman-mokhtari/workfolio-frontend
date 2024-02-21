import { Stack, Box, Typography, Popover, Button } from "@mui/material";
import { MenuItem } from "./dropdownMainContent";
import { toLocalDateCustomized } from "@/utils/toLocalDate";
import ActionStack from "./actionStack";
import EmptyBox from "./EmptyBox";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { AdsClick } from "@mui/icons-material";
import ReactHtmlParser from "react-html-parser";

const DropdownMain = ({ notifications, theme }) => {
  if (notifications.length <= 0) return <EmptyBox />;

  return (
    <Box
      sx={{
        maxHeight: "50vh",
        overflowY: "auto",
      }}
    >
      {notifications.map(({ title, content, createdAt, _id, isRead }, i) => (
        <PopupState key={i} variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <MenuItem>
                <Box
                  sx={{ width: "100%", display: "flex", alignItems: "center" }}
                >
                  <Button
                    {...bindTrigger(popupState)}
                    disableRipple
                    startIcon={
                      <AdsClick
                        sx={{
                          position: "absolute",
                          right: 10,
                          color: "text.secondary",
                          fontSize: "18px !important",
                        }}
                      />
                    }
                    sx={{
                      mx: 4,
                      flex: "1 1",
                      display: "flex",
                      overflow: "hidden",
                      flexDirection: "column",
                      border: "1px dashed",
                      borderRadius: 4,
                      alignItems: "start",
                      p: 1,
                      color: isRead ? "text.disabled" : "inherit",
                    }}
                  >
                    <Box
                      sx={{
                        "& p": {
                          fontWeight: 600,
                          overflow: "hidden",
                          fontSize: "0.875rem",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          m: 0,
                        },
                        flex: "1 1 100%",
                        mb: 0.5,
                      }}
                    >
                      {ReactHtmlParser(title)}
                    </Box>
                    <Box
                      sx={{
                        "& p": {
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          m: 0,
                        },
                        flex: "1 1 100%",
                        maxWidth: "100%",
                      }}
                    >
                      {ReactHtmlParser(content)}
                    </Box>
                  </Button>

                  <Stack alignItems="center">
                    <ActionStack id={_id} isRead={isRead} />
                    <Typography
                      variant="caption"
                      sx={{ color: "text.disabled" }}
                    >
                      {toLocalDateCustomized(createdAt)}
                    </Typography>
                  </Stack>
                </Box>
              </MenuItem>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    width: "40vw",
                    [theme.breakpoints.down("sm")]: {
                      width: "100% !important",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      flex: "1 1 100%",
                      fontSize: "0.875rem",
                      marginBottom: (theme) => theme.spacing(0.75),
                    }}
                  >
                    {ReactHtmlParser(title)}
                  </Typography>
                  <Typography
                    sx={{
                      flex: "1 1 100%",
                    }}
                    variant="body2"
                  >
                    {ReactHtmlParser(content)}
                  </Typography>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      ))}
    </Box>
  );
};

export default DropdownMain;
