import axios from "axios";
class UserService {
  async registerUser(data) {
    return await axios({
      method: "post",
      url: "http://89.116.121.36:5000/api/Users",
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
      url: "http://89.116.121.36:5000/api/Users",
    });
  }
  async getUserById(userId) {
    const res = await axios.get(`http://89.116.121.36:5000/api/Users/${userId}`);
    return res;
  }
  async updateUser(userId, userData) {
    try {
      const res = await axios({
        method: "put", // Hoặc "patch" nếu chỉ cập nhật một phần của thông tin người dùng
        url: `http://89.116.121.36:5000/api/Users/${userId}`,
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
  async changeUserAva(data) {
    return await axios({
      method: "post",
      url: "http://89.116.121.36:5000/api/Users/upload-avatar",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  //Trả về ava người dùng
  async getUserAva(userId) {
    return await axios({
      method: "get",
      url: ` http://89.116.121.36:5000/api/Users/${userId}/avatar`,
    });
  }
  //Trả về tổng số sản phẩm đã đăng
  async getTotalProduct(userId) {
    return await axios({
      method: "get",
      url: ` http://89.116.121.36:5000/api/Users/total/${userId}`,
    });
  }
  //Trả về id người dùng theo nickname
  async getUseridByNickname(nickname) {
    return await axios({
      method: "get",
      url: `http://89.116.121.36:5000/api/Users/getIdByNickname/${nickname}`,
    });
  }
}

export default new UserService();
