import http from "../httpService";

export async function getBlogs(qs, cookies) {
  return http
    .get(`/blog/list?${qs}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
}

export async function getBlogBySlug(slug) {
  return http.get(`/blog/slug/${slug}`).then(({ data }) => data.data);
}

export async function getBlogById(id) {
  return http.get(`/blog/${id}`).then(({ data }) => data.data);
}

export async function likeBlog(id) {
  return http.post(`/blog/like/${id}`).then(({ data }) => data.data);
}

// admin functions

export async function addBlog(data) {
  return http.post(`/admin/blog/add`, data).then(({ data }) => data.data);
}

export async function removeBlog(id) {
  return http.delete(`/admin/blog/remove/${id}`).then(({ data }) => data.data);
}

export async function updateBlog({ blogId, data }) {
  return http
    .patch(`/admin/blog/update/${blogId}`, data)
    .then(({ data }) => data.data);
}
