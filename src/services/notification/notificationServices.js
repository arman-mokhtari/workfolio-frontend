import http from "../httpService";

export async function removeOneNotification(id) {
  return http
    .post("/notification/remove", { id })
    .then(({ data }) => data.data);
}


export async function updateOneNotification(id) {
  return http
    .patch("/notification/update-one", { id })
    .then(({ data }) => data.data);
}

export async function updateAllNotifications() {
  return http.patch("/notification/update-all").then(({ data }) => data.data);
}

export async function getUserNotifications() {
  return http.get("/notification/v1/list").then(({ data }) => data.data);
}

// admin cms

export async function addNewNotification(data) {
  return http
    .post("/admin/notification/add", data)
    .then(({ data }) => data.data);
}

export async function getNotificationsByAdmin(userId) {
  return http
    .get("/notification/v1/list", userId)
    .then(({ data }) => data.data);
}
