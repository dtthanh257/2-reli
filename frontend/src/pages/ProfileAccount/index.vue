<template>
  <div>
    <Navbar></Navbar>
    <div class="grid-12">
      <div class="home-cate flex-row" style="padding: 70px 0; gap: 8%">
        <div class="flex-row" style="flex: 1">
          <div class="flex-row" style="gap: 30px; width: 100%">
            <div
              class="account-ava"
              :style="{
                backgroundImage:
                  'url(' +
                  (sellerAva ||
                    require('/public/img/assets/ava-acc-icon.png')) +
                  ')',
              }"
            ></div>
            <div class="profile-accout-content">
              <div class="profile-account-name">{{ this.userInfo.name }}</div>
              <div class="profile-account-nickname">
                @{{ this.userInfo.nickname }}
              </div>
              <div class="profile-account-type">Cá nhân</div>
              <div class="flex-row w-100 gap-12">
                <button class="profile-account-btn">Theo dõi</button>
                <button class="profile-account-btn">Chat ngay</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row" style="flex: 1">
          <div class="profile-accout-content">
            <div class="profile-account-product flex-row gap-8">
              Sản phẩm:
              <div class="c-28a">{{ this.totalProduct }}</div>
            </div>
            <div class="profile-account-follower gap-8 flex-row">
              Người theo dõi:
              <div class="c-28">0</div>
            </div>
            <div class="profile-account-rate flex-row gap-8">
              Đánh giá:
              <div style="color: #5c5d5c">Chưa có lượt đánh giá</div>
            </div>
            <div class="profile-account-reliable">Reliable: 0</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid-12"
      style="background-color: #f3f2f2; padding-bottom: 60px"
    >
      <div class="home-cate product-list flex-row">
        <Product
          v-for="product in productDemo"
          :key="product.id"
          :productId="product.id"
          :name="product.product_name"
          :price="formatPrice(product.product_price)"
        ></Product>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import UserService from "@/views/userServices.js";
import Footer from "@/components/Footer/index.vue";
import Navbar from "@/components/Navbar/index.vue";
import Product from "@/components/Product/index.vue";
import ProductService from "@/views/productServices";

export default {
  name: "ProfileAccount",
  data() {
    return {
      userInfo: {
        name: "",
        nickname: "",
        email: "",
      },
      sellerAva: "",
      totalProduct: "",
      productDemo: [],
    };
  },

  props: {
    userId: {
      type: Number,
    },
  },
  components: {
    Footer,
    Navbar,
    Product,
  },
  async mounted() {
    const userid = this.userId;
    await this.getUserInfo(userid);
    this.fetchUserAva(userid);
  },
  methods: {
    async getUserInfo(userid) {
      const res = await UserService.getUserById(userid);
      console.log(res.data);
      this.userInfo.name = res.data.name;
      this.userInfo.nickname = res.data.nickname;

      const ProductRes = await ProductService.getAllProductByUserId(userid);
      this.totalProduct = ProductRes.data.length;
      this.productDemo = ProductRes.data;
      console.log(ProductRes.data);
    },
    formatPrice(price) {
      const formattedPrice = price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return formattedPrice + " VNĐ";
    },
    async fetchUserAva(userid) {
      const sellerAvaRes = await UserService.getUserAva(userid);
      this.sellerAva = sellerAvaRes.data;
    },
  },
};
</script>
