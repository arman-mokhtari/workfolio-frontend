import http from "../httpService";


export async function sendContactUsEmail(data) {
  return http.post("/contact/email", data).then(({ data }) => data.data);
}

export async function getContactUsCaptcha() {
  return http.get("/contact/v6/captcha");
}
