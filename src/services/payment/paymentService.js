import http from "../httpService";

export async function createPayment(data) {
  return http.post("/payment/create", data).then(({ data }) => data.data);
}

export async function getAllPayments() {
  return http.get("/admin/payment/list").then(({ data }) => data.data);
}

export async function getPaymentById(id) {
  return http.get(`/admin/payment/${id}`).then(({ data }) => data.data);
}
