import axios from "axios";
class UserService {
  async registerUser(data) {
    return await axios({
      method: "post",
      url: "https://localhost:44385/api/Users",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json-patch+json",
      },
      data: data,
    });
  }
}

export default new UserService();
