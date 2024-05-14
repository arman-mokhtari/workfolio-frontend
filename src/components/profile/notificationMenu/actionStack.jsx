"use client";

import { Stack, IconButton, Tooltip, Fade } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { DeleteOutlined, MarkChatReadOutlined } from "@mui/icons-material";
import {
  useRemoveOneNotification,
  useUpdateNotification,
} from "@/hooks/useNotefication";

const ActionStack = ({ id, isRead }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncRemove } = useRemoveOneNotification();
  const { mutateAsync: mutateAsyncUpdate } = useUpdateNotification();

  const removeHandler = async () => {
    try {
      await mutateAsyncRemove(id);
      queryClient.invalidateQueries({ queryKey: ["get-Notifications"] });
    } catch (error) {
      console.error(error);
    }
  };

  const updateHandler = async () => {
    try {
      await mutateAsyncUpdate(id);
      queryClient.invalidateQueries({ queryKey: ["get-Notifications"] });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack direction="row">
      <Tooltip
        arrow
        placement="right"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        title="تغییر وضعیت به خوانده‌شده!"
      >
        <IconButton
          disabled={isRead}
          onClick={updateHandler}
          size="small"
          aria-label="marked as read"
        >
          <MarkChatReadOutlined color={isRead ? "disabled" : "info"} />
        </IconButton>
      </Tooltip>
      <Tooltip
        arrow
        placement="top"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        title="حذف"
      >
        <IconButton onClick={removeHandler} size="small" aria-label="remove">
          <DeleteOutlined color="error" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
export default ActionStack;
