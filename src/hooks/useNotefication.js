import {
  addNewNotification,
  getNotificationsByAdmin,
  getUserNotifications,
  removeOneNotification,
  updateAllNotifications,
  updateOneNotification,
} from "@/services/notification/notificationServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRemoveOneNotification = () =>
  useMutation({
    mutationFn: removeOneNotification,
  });

export const useUpdateNotification = () =>
  useMutation({
    mutationFn: updateOneNotification,
  });

export const useUpdateAllNotifications = () =>
  useMutation({
    mutationFn: updateAllNotifications,
  });

export const useGetNotifications = () =>
  useQuery({
    queryKey: ["get-Notifications"],
    queryFn: getUserNotifications,
    retry: false,
    refetchOnWindowFocus: true,
  });

// Admin cms
export const useAddProduct = () => {
  return useMutation({ mutationFn: addNewNotification });
};

export const useGetNotificationsByAdmin = () =>
  useQuery({
    queryKey: ["get-Notifications-Admin"],
    queryFn: getNotificationsByAdmin,
    retry: false,
    refetchOnWindowFocus: true,
  });
