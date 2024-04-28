import axios from "axios";
class CollectService {
  async addCollectProduct(data) {
    return await axios({
      method: "post",
      url: "https://localhost:44385/api/CollectProduct",
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
      url: "https://localhost:44385/api/CollectProduct/images",
      headers: {
        accepts: "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
}
export default new CollectService();
