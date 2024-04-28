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
  async getByOrderBySellerName(sellerName) {
    const res = await axios.get(
      `https://localhost:44385/api/BuyOrder/seller/${sellerName}`
    );
    return res;
  }
  async updateStatus(id) {
    try {
      const response = await axios.put(
        `https://localhost:44385/api/BuyOrder/${id}/update-status`
      );
      return response.data;
    } catch (error) {
      console.error("Error updating buy order status:", error);
      throw error;
    }
  }
}
export default new BuyOrderService();
