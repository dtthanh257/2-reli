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
  async updateUser(userId, userData) {
    try {
      const res = await axios({
        method: "put", // Hoặc "patch" nếu chỉ cập nhật một phần của thông tin người dùng
        url: `https://localhost:44385/api/Users/${userId}`,
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        data: userData,
      });
      return res;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
}

export default new UserService();
