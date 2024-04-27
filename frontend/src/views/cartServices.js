import axios from "axios";
class CartService {
  async addToCart(data) {
    return await axios({
      method: "post",
      url: "https://localhost:44385/api/Cart/add",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getCartInfo(userId) {
    const res = await axios.get(`https://localhost:44385/api/Cart/${userId}`);
    return res;
  }
  async deleteCartItem(cartId) {
    try {
      return await axios({
        method: "delete",
        url: `https://localhost:44385/api/Cart/${cartId}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
}
export default new CartService();
