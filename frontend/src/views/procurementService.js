import axios from "axios";
class ProcurementService {
  async addProcurementProduct(data) {
    return await axios({
      method: "post",
      url: "http://localhost:5196/api/Procurement",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getProcurementProduct(userId) {
    return await axios({
      method: "get",
      url: `http://localhost:5196/api/Procurement/${userId}`,
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
    });
  }
  async addProcurementProductImg(data) {
    return await axios({
      method: "post",
      url: "http://localhost:5196/api/Procurement/images",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
  async getProcurementProductImg(productId) {
    try {
      return await axios({
        method: "get",
        url: `http://localhost:5196/api/Procurement/images/${productId}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
}
export default new ProcurementService();
