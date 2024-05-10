import axios from "axios";
class LoginService {
  async loginSubmit(data) {
    return await axios({
      method: "post",
      url: "http://localhost:5196/api/Login",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
}
export default new LoginService();
