import axios from "axios";
class UserService {
  async registerUser(data) {
    return await axios({
      method: "post",
      url: "https://localhost:44385/api/Users",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getUser() {
    return await axios({
      method: "get",
      url: "https://localhost:44385/api/Users",
    });
  }
  async getUserById(userId) {
    const res = await axios.get(`https://localhost:44385/api/Users/${userId}`);
    return res;
  }
}

export default new UserService();
