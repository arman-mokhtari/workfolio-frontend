import http from "../httpService";

export async function getPagesData() {
  return http.get("/pages-data/list").then(({ data }) => data.data);
}

export async function getPageByEnglishTitle(englishTitle) {
  return http
    .get(`/pages-data/page/${englishTitle}`)
    .then(({ data }) => data.data);
}

export async function getPageDataById(id) {
  return http.get(`/pages-data/${id}`).then(({ data }) => data.data);
}

// admin functions

export async function addPageData(data) {
  return http.post(`/admin/pages-data/add`, data).then(({ data }) => data.data);
}

export async function updatePageData({ id, data }) {
  return http
    .patch(`/admin/pages-data/update/${id}`, data)
    .then(({ data }) => data.data);
}
