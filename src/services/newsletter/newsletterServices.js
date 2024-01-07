import http from "../httpService";

export async function getNewsletterUsers() {
  return http.get("/admin/newsletter/list").then(({ data }) => data.data);
}

export async function getNewsletterCaptcha() {
  return http.get("/newsletter/captcha");
}

export async function addNewsletterUser(data) {
  return http.post("/newsletter/add", data).then(({ data }) => data.data);
}

export async function removeNewsletterUser(id) {
  return http
    .delete(`/admin/newsletter/remove/${id}`)
    .then(({ data }) => data.data);
}
