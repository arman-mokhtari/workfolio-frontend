import http from "../httpService";

export async function addToCart(productId) {
  return http.post("/cart/add", { productId }).then(({ data }) => data.data);
}

export async function removeFromCart(productId) {
  return http.post("/cart/remove", { productId }).then(({ data }) => data.data);
}

export async function addCouponToCart(couponCode) {
  return http.post("/cart/coupon", couponCode).then(({ data }) => data.data);
}
