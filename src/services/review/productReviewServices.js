import http from "../httpService";

export async function addProductReview({ productId, data }) {
  return http
    .post(`/product-review/add/${productId}`, data)
    .then(({ data }) => data.data);
}

export async function removeProductReview(id) {
  return http
    .delete(`/admin/product-review/remove/${id}`)
    .then(({ data }) => data.data);
}

export async function updateProductReview({ reviewId, data }) {
  return http
    .patch(`/admin/product-review/update/${reviewId}`, data)
    .then(({ data }) => data.data);
}

export async function getProductReviewsByAdmin() {
  return http.get("/admin/product-review/list").then(({ data }) => data.data);
}

export async function getAcceptedProductReviews(id) {
  return http
    .get(`/product-review/accepted/list/${id}`)
    .then(({ data }) => data.data);
}

export async function getProductReviewById(id) {
  return http
    .get(`/admin/product-review/review-id/${id}`)
    .then(({ data }) => data.data);
}

export async function getProductReviewCaptcha() {
  return http.get("/product-review/review-captcha");
}
