import http from "../httpService";

export async function getProducts(qs, cookies) {
  return http
    .get(`/product/list?${qs}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
}

export async function getProductBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export async function getProductById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export async function likeProduct(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

// admin functions

export async function addProduct(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export async function removeProduct(id) {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}

export async function updateProduct({ productId, data }) {
  return http
    .patch(`/admin/product/update/${productId}`, data)
    .then(({ data }) => data.data);
}
