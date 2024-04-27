import axios from "axios";
class BuyOrderService {
  async addItemToBuyOder(data) {
    return await axios({
      method: "post",
      url: "https://localhost:44385/api/BuyOrder",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getByOrderById(userId) {
    const res = await axios.get(
      `https://localhost:44385/api/BuyOrder/user/${userId}`
    );
    return res;
  }
}
export default new BuyOrderService();
