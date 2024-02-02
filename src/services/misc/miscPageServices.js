import http from "../httpService";

export async function getAllMiscPages() {
    return http.get("/misc-page/list").then(({ data }) => data.data);
  }

export async function getMiscPageBySlug(slug) {
  return http.get(`/misc-page/slug/${slug}`).then(({ data }) => data.data);
}

export async function getMiscPageById(id) {
  return http.get(`/misc-page/${id}`).then(({ data }) => data.data);
}

// admin functions

export async function addMiscPage(data) {
  return http.post(`/admin/misc-page/add`, data).then(({ data }) => data.data);
}

export async function removeMiscPage(id) {
  return http.delete(`/admin/misc-page/remove/${id}`).then(({ data }) => data.data);
}

export async function updateMiscPage({ miscPageId, data }) {
  return http
    .patch(`/admin/misc-page/update/${miscPageId}`, data)
    .then(({ data }) => data.data);
}
