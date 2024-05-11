import axios from "axios";
class CollectService {
  async addCollectProduct(data) {
    return await axios({
      method: "post",
      url: "http://localhost:5196/api/CollectProduct",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async addCollectProductImg(data) {
    return await axios({
      method: "post",
      url: "http://localhost:5196/api/CollectProduct/images",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getCollectProductByUserId(userId) {
    try {
      return await axios({
        method: "get",
        url: `http://localhost:5196/api/CollectProduct/collectProduct/${userId}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
  async getCollectProductImg(productId) {
    try {
      return await axios({
        method: "get",
        url: `http://localhost:5196/api/CollectProduct/images/${productId}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
}
export default new CollectService();
