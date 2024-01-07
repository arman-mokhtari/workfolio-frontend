import http from "../httpService";

export async function addReview(data) {
  return http.post("/review/add", data).then(({ data }) => data.data);
}

export async function removeReview(id) {
  return http
    .delete(`/admin/review/remove/${id}`)
    .then(({ data }) => data.data);
}

export async function updateReview({ reviewId, data }) {
  return http
    .patch(`/admin/review/update/${reviewId}`, data)
    .then(({ data }) => data.data);
}

export async function getAllReviewsByAdmin() {
  return http.get("/admin/review/list").then(({ data }) => data.data);
}

export async function getAcceptedReviews() {
  return http.get("/review/v1/list").then(({ data }) => data.data);
}

export async function getReviewById(id) {
  return http.get(`/admin/review/v2/${id}`).then(({ data }) => data.data);
}

export async function getReviewCaptcha() {
  return http.get("/review/v3/captcha");
}
