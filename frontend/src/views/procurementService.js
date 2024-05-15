import axios from "axios";
class ProcurementService {
  async addProcurementProduct(data) {
    return await axios({
      method: "post",
      url: "http://89.116.121.36:5000/api/Procurement",
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
      url: `http://89.116.121.36:5000/api/Procurement/${userId}`,
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
    });
  }
  async addProcurementProductImg(data) {
    return await axios({
      method: "post",
      url: "http://89.116.121.36:5000/api/Procurement/images",
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
        url: `http://89.116.121.36:5000/api/Procurement/images/${productId}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
  async getAllProcurementProduct() {
    try {
      return await axios({
        method: "get",
        url: `http://89.116.121.36:5000/api/Procurement`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
  async updateProcurementProductStatus(productid) {
    try {
      return await axios({
        method: "put",
        url: `http://89.116.121.36:5000/api/Procurement/${productid}`,
        headers: { accepts: "*/*", "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("Cannot find cart item");
    }
  }
}
export default new ProcurementService();
