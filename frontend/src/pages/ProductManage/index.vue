<template>
  <div style="background-color: #f2f2f3">
    <Navbar> </Navbar>
    <div class="grid-12" style="background-color: #f2f2f3">
      <div class="product-manage-contain home-cate">
        <div class="product-manage-acti flex-row">
          <div
            class="product-manage-acti-buy flex-row"
            :class="{ 'product-manage-acti--istrue': actiBuy }"
            @click="toggleActiBuy"
            style="color: black"
          >
            Đơn mua
          </div>
          <div
            class="product-manage-acti-sell flex-row"
            :class="{ 'product-manage-acti--istrue': actiSell }"
            @click="toggleActiSell"
            style="color: black"
          >
            Đơn bán
          </div>
        </div>
      </div>
      <div
        id="donmuaTrue"
        class="flex-column home-cate gap-20"
        style="margin-bottom: 40px"
      >
        <div
          class="flex-row"
          v-if="this.buyOderItem.length == 0"
          style="display: flex; justify-content: center; padding: 100px 0"
        >
          Bạn chưa có mua đơn nào
        </div>
        <ProductCard
          v-else
          v-for="(index, i) in buyOderItem"
          :key="index"
          :order_id="index.id"
          :product_name="index.product_name"
          :seller_name="index.sell_name"
          :quantity="index.product_quantity"
          :product_status="index.product_status"
          :product_price="this.formatCurrency(index.product_price)"
          :imgUrl="this.imgUrl[i]"
        ></ProductCard>
      </div>
      <div id="donbanTrue" class="flex-column home-cate gap-20">
        <div class="flex-row reli-acti">
          <button
            class="reli-acti-dangban"
            :class="{ isTrue: dangban }"
            @click="toggleDanBan"
          >
            Đăng bán
          </button>
          <button
            class="reli-acti-thumua"
            :class="{ isTrue: thumua }"
            @click="toggleThumuaAdmin"
            v-if="this.user_name == '2reli'"
          >
            Thu mua
          </button>
          <button
            v-else
            class="reli-acti-thumua"
            :class="{ isTrue: thumua }"
            @click="toggleThuMua"
          >
            Thu mua
          </button>
          <button
            v-if="this.user_name == '2reli'"
            class="reli-acti-thugom"
            :class="{ isTrue: thugom }"
            @click="toggleThuGomAdmin"
          >
            Thu gom
          </button>
          <button
            v-else
            class="reli-acti-thugom"
            :class="{ isTrue: thugom }"
            @click="toggleThuGom"
          >
            Thu gom
          </button>
        </div>
        <div id="dangbanTrue">
          <div
            class="flex-row"
            v-if="this.sellOrderItem.length == 0"
            style="display: flex; justify-content: center; padding: 100px 0"
          >
            Bạn chưa có đơn hàng nào được mua
          </div>

          <div
            v-else
            class="product-card flex-column"
            style="margin-top: 30px"
            v-for="(index, i) in sellOrderItem"
            :key="index"
          >
            <div class="product-card-code">Mã đơn hàng {{ index.id }}</div>

            <div class="flex-column">
              <div
                class="flex-row gap-20"
                style="padding-left: 40px; padding: 45px 40px"
              >
                <div
                  class="product-card-img"
                  :style="{ 'background-image': 'url(' + sellImgUrl[i] + ')' }"
                ></div>
                <div class="product-card-info flex-column">
                  <div class="product-card-name">{{ index.product_name }}</div>
                  <div class="product-card-quantity">
                    x {{ index.product_quantity }}
                  </div>
                  <div class="product-card-status">
                    Trạng thái:
                    <span v-if="index.product_status == 0">Đang đăng bán</span>
                    <span v-if="index.product_status != 0">Đã bán</span>
                  </div>
                  <div class="product-card-price">
                    Đơn giá: {{ index.product_price }}
                  </div>
                </div>
              </div>
              <div
                class="flex-row"
                style="
                  border-top: 1px solid var(--border-color);
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <div class="product-card-payload gap-8">
                  <p style="padding: 0">Thành tiền:</p>
                  <div class="product-card-pay">
                    {{
                      formatCurrency(
                        parseInt(index.product_price) *
                          index.product_quantity *
                          0.85
                      )
                    }}
                  </div>
                </div>
                <button
                  class="product-card-btn nor-btn"
                  v-if="index.product_status == 0"
                  @click="this.updateProductStatus(index.id)"
                >
                  XÁC NHẬN
                </button>
                <button
                  class="product-card-btn nor-btn"
                  v-if="index.product_status == 1"
                  @click="this.updateProductStatus(index.id)"
                >
                  ĐÃ CHUẨN BỊ HÀNG
                </button>
                <button
                  class="product-card-btn nor-btn"
                  v-if="index.product_status == 2"
                  @click="this.updateProductStatus(index.id)"
                >
                  GIAO HÀNG THÀNH CÔNG
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="thumuaTrue" v-if="this.user_name == '2reli' && thumua == true">
          <div
            class="flex-row"
            v-if="this.allProcurementProduct.length == 0"
            style="display: flex; justify-content: center; padding: 100px 0"
          >
            Chưa có đơn thu mua nào
          </div>
          <ProductCard
            v-else
            style="margin-top: 30px"
            v-for="(index, i) in allProcurementProduct"
            :key="index"
            :order_id="index.id"
            :product_name="index.product_name"
            :product_status="index.product_handle"
            :quantity="1"
            :product_price="formatCurrency(index.product_price)"
            :imgUrl="this.allProcurementImgUrl[i]"
            :collect_way="index.collect_way"
            :procurement_product="true"
            :single_price="false"
            :buttonLabel="
              index.product_handle === 0
                ? 'Xác nhận'
                : index.product_handle === 2
                ? 'Đã hoàn thành'
                : ''
            "
            @updateCollectProductStatus="
              updateProcurementtProductStatusAdmin(index.id)
            "
          ></ProductCard>
        </div>
        <div id="thumuaTrue" style="display: none" v-else>
          <div
            class="flex-row"
            v-if="this.procurementItem.length == 0"
            style="display: flex; justify-content: center; padding: 100px 0"
          >
            Bạn chưa có đơn thu mua nào
          </div>

          <ProductCard
            v-else
            style="margin-top: 30px"
            v-for="(index, i) in procurementItem"
            :key="index"
            :order_id="index.id"
            :product_name="index.product_name"
            :product_status="index.product_handle"
            :quantity="1"
            :product_price="
              formatCurrency(
                index.product_handle != 0 ? index.product_price : ''
              )
            "
            :imgUrl="this.procurementImgUrl[i]"
            :collect_way="index.collect_way"
            :single_price="false"
            :procurement_product="true"
            :buttonLabel="
              index.product_handle === 0
                ? ''
                : index.product_handle === 1
                ? 'Xác nhận'
                : ''
            "
            @updateCollectProductStatus="
              updateProcurementtProductStatus(index.id)
            "
          ></ProductCard>
        </div>
        <div id="thugomTrue" v-if="this.user_name == '2reli' && thugom">
          <div
            class="flex-row"
            v-if="this.allCollectProduct.length == 0"
            style="display: flex; justify-content: center; padding: 100px 0"
          >
            Bạn chưa có đơn thu gom nào
          </div>
          <ProductCard
            v-else
            style="margin-top: 30px"
            v-for="(index, i) in allCollectProduct"
            :key="index"
            :order_id="index.id"
            :product_name="index.product_name"
            :product_status="index.product_status"
            :quantity="1"
            :product_price="index.price"
            :imgUrl="this.allCollectImgUrl[i]"
            :collect_product="true"
            :collect_way="index.collect_way"
            :single_price="false"
            :buttonLabel="
              index.product_status === 0
                ? 'Xác nhận'
                : index.product_status === 1
                ? 'Đã hoàn thành'
                : ''
            "
            @updateCollectProductStatus="updateCollectProductStatus(index.id)"
          ></ProductCard>
        </div>
        <div id="thugomTrue" style="display: none" v-else>
          <div
            class="flex-row"
            v-if="this.collectItem.length == 0"
            style="display: flex; justify-content: center; padding: 100px 0"
          >
            Bạn chưa có đơn thu gom nào
          </div>
          <ProductCard
            v-else
            style="margin-top: 30px"
            v-for="(index, i) in collectItem"
            :key="index"
            :order_id="index.id"
            :product_name="index.product_name"
            :product_status="index.product_status"
            :quantity="1"
            :product_price="index.price"
            :imgUrl="this.collectImgUrl[i]"
            :collect_product="true"
            :single_price="false"
            :collect_way="index.collect_way"
          ></ProductCard>
        </div>
      </div>
    </div>
    <Footer
      style="background-color: #f2f2f3; margin-bottom: 0; padding-bottom: 128px"
    ></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Footer from "@/components/Footer/index.vue";
import ProductCard from "@/components/ProductCard/index.vue";
import BuyOrderService from "@/views/buyOderService";
import ProductService from "@/views/productServices";
import UserService from "@/views/userServices";
import CollectService from "@/views/collectServices";
import ProcurementService from "@/views/procurementService.js";

// import Vue from "vue";

export default {
  name: "ProductManage",
  data() {
    return {
      actiBuy: true,
      actiSell: false,
      dangban: true,
      thumua: false,
      thugom: false,
      donmua: null,
      donban: null,
      dangbanTrue: null,
      thumuaTrue: null,
      thugomTrue: null,
      buyOderItem: [],
      imgUrl: [],
      user_name: "2reli",
      sellOrderItem: [],
      procurementItem: [],
      collectItem: [],
      sellImgUrl: [],
      collectImgUrl: [],
      allCollectImgUrl: [],
      procurementImgUrl: [],
      allProcurementImgUrl: [],
      allCollectProduct: [],
      allProcurementProduct: [],
      user_id: 0,
    };
  },
  components: {
    Navbar,
    Footer,
    ProductCard,
  },
  async mounted() {
    this.donmua = document.querySelector("#donmuaTrue");
    this.donban = document.querySelector("#donbanTrue");
    this.dangbanTrue = document.querySelector("#dangbanTrue");
    this.thumuaTrue = document.querySelector("#thumuaTrue");
    this.thugomTrue = document.querySelector("#thugomTrue");
    await this.getOrderList();
    await this.getUserInfo();
    console.log(this.user_name);
  },
  methods: {
    toggleActiBuy() {
      this.actiBuy = !this.actiBuy;
      this.actiSell = false;
      if (this.actiBuy == true) {
        console.log(this.donmua);
        this.donmua.style.display = "flex";
        this.donban.style.display = "none";
      } else {
        this.donmua.style.display = "none";
        this.donban.style.display = "flex";
      }
    },
    toggleActiSell() {
      this.actiSell = !this.actiSell;
      this.actiBuy = false;
      console.log(this.dangban);
      if (this.actiBuy == true) {
        this.donmua.style.display = "flex";
        this.donban.style.display = "none";
      } else {
        this.donmua.style.display = "none";
        this.donban.style.display = "flex";
      }
      this.getSellOrder();
    },
    toggleDanBan() {
      this.dangban = true;
      this.thumua = false;
      this.thugom = false;
      if (this.dangban == true) {
        this.dangbanTrue.style.display = "block";
        this.thumuaTrue.style.display = "none";
        this.thugomTrue.style.display = "none";
      }
    },
    toggleThuMua() {
      this.thumua = true;
      this.dangban = false;
      this.thugom = false;
      if (this.thumua == true) {
        this.dangbanTrue.style.display = "none";
        this.thumuaTrue.style.display = "block";
        this.thugomTrue.style.display = "none";
      }
      this.getProcurementProduct();
    },
    toggleThuGom() {
      this.thugom = true;
      this.dangban = false;
      this.thumua = false;
      if (this.thugom == true) {
        this.dangbanTrue.style.display = "none";
        this.thumuaTrue.style.display = "none";
        this.thugomTrue.style.display = "block";
      }
      this.getCollectProductById();
      console.log(this.user_name == "2reli");
    },
    async getOrderList(userId) {
      userId = localStorage.getItem("id");
      const res = await BuyOrderService.getByOrderById(userId);
      this.buyOderItem = res.data;
      console.log(res.data);
      for (let i = 0; i < this.buyOderItem.length; i++) {
        await this.getProductImgUrl(this.buyOderItem[i].product_id);
      }
    },
    async getProductImgUrl(productId) {
      const res = await ProductService.getProductImg(productId);
      this.imgUrl.push(res.data[0]);
      return res.data[0];
    },
    formatCurrency(amount) {
      amount = amount.toString();
      if (amount != "") {
        let parts = amount.split(".");
        let currency = parts[0];
        // Định dạng số tiền
        currency = currency.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Thêm dấu chấm phân cách giữa mỗi hàng nghìn

        if (parts.length === 2) {
          currency += "," + parts[1];
        }
        return currency + " VNĐ";
      }
    },
    async getUserInfo() {
      const userId = localStorage.getItem("id");
      const res = await UserService.getUserById(userId);
      console.log(res.data.nickname);
      this.user_name = res.data.nickname;
      console.log(this.user_name);
      this.user_id = userId;
      return res.data;
    },
    async getSellOrder() {
      const res = await BuyOrderService.getByOrderBySellerName(this.user_name);
      console.log(res.data);
      this.sellOrderItem = res.data;
      for (let i = 0; i < this.sellOrderItem.length; i++) {
        await this.getSellOrderImg(this.sellOrderItem[i].product_id);
      }
    },
    async getSellOrderImg(productId) {
      const res = await ProductService.getProductImg(productId);
      this.sellImgUrl.push(res.data[0]);
      return res.data[0];
    },
    async updateProductStatus(id) {
      await BuyOrderService.updateStatus(id);
      this.getSellOrder();
    },
    async getCollectProductById() {
      const id = localStorage.getItem("id");
      const res = await CollectService.getCollectProductByUserId(id);
      this.collectItem = res.data;
      console.log(res.data);
      for (let i = 0; i < this.collectItem.length; i++) {
        await this.getCollectProductImgUrl(this.collectItem[i].id);
      }
    },
    async getCollectProductImgUrl(productId) {
      const res = await CollectService.getCollectProductImg(productId);
      console.log(productId);
      console.log(res.data[0]);
      this.collectImgUrl.push(res.data[0]);
    },
    async getProcurementProduct() {
      const id = localStorage.getItem("id");
      const res = await ProcurementService.getProcurementProduct(id);
      this.procurementItem = res.data;
      console.log(this.procurementItem);
      for (let i = 0; i < this.procurementItem.length; i++) {
        await this.getProcurementProductImgUrl(this.procurementItem[i].id);
      }
    },
    async getProcurementProductImgUrl(productId) {
      const res = await ProcurementService.getProcurementProductImg(productId);
      console.log(productId);
      console.log(res.data[0]);
      this.procurementImgUrl.push(res.data[0]);
    },
    toggleThuGomAdmin() {
      this.thugom = true;
      this.dangban = false;
      this.thumua = false;
      if (this.thugom == true) {
        this.dangbanTrue.style.display = "none";
        this.thumuaTrue.style.display = "none";
        this.thugomTrue.style.display = "block";
      }
      this.getAllCollectProduct();
      console.log("Tài khoản admin");
      console.log(this.user_name == "2reli");
    },
    toggleThumuaAdmin() {
      this.thumua = true;
      this.dangban = false;
      this.thugom = false;
      if (this.thumua == true) {
        this.dangbanTrue.style.display = "none";
        this.thumuaTrue.style.display = "block";
        this.thugomTrue.style.display = "none";
      }
      this.getAllProcurementProduct();
    },
    async getAllCollectProduct() {
      const res = await CollectService.getAllCollectProduct();
      this.allCollectProduct = res.data;
      console.log(this.allCollectProduct);
      for (let i = 0; i < this.allCollectProduct.length; i++) {
        await this.getAllCollectProductImgUrl(this.allCollectProduct[i].id);
      }
      console.log(this.user_name == "2reli");
    },

    async getAllCollectProductImgUrl(productId) {
      const res = await CollectService.getCollectProductImg(productId);

      this.allCollectImgUrl.push(res.data[0]);
    },
    async updateCollectProductStatus(collect_product_id) {
      await CollectService.updateCollecProductStatus(collect_product_id);
      const res = await CollectService.getAllCollectProduct();
      this.allCollectProduct = res.data;
    },
    async getAllProcurementProduct() {
      const res = await ProcurementService.getAllProcurementProduct();
      this.allProcurementProduct = res.data;
      console.log(this.allProcurementProduct);
      for (let i = 0; i < this.allProcurementProduct.length; i++) {
        await this.getAllProcurementProductImg(
          this.allProcurementProduct[i].id
        );
      }
    },
    async getAllProcurementProductImg(productId) {
      const res = await ProcurementService.getProcurementProductImg(productId);
      this.allProcurementImgUrl.push(res.data[0]);
    },
    async updateProcurementtProductStatusAdmin(procurementid) {
      await ProcurementService.updateProcurementProductStatus(procurementid);
      const res = await ProcurementService.getAllProcurementProduct();
      this.allProcurementProduct = res.data;
    },
    async updateProcurementtProductStatus(procurementid) {
      await ProcurementService.updateProcurementProductStatus(procurementid);
      const id = localStorage.getItem("id");
      const res2 = await ProcurementService.getProcurementProduct(id);
      this.procurementItem = res2.data;
    },
  },
};
</script>
