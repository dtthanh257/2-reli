<template>
  <div>
    <Navbar :account="this.account"></Navbar>
    <div class="home-container">
      <div class="home-intro flex-row justify-content-center">
        <div class="flex-column justify-content-center">
          <div class="home-title flex-column justify-content-center">
            <div class="flex-row justify-content-center">
              <h2>GIẢI PHÁP</h2>
              <h2 class="reli">&nbsp;"ALL-IN-ONE"</h2>
            </div>
            <h2>CHO TỦ ĐỒ CỦA BẠN</h2>
          </div>
          <a href="/about" class="italic">Tìm hiểu thêm...</a>
          <div class="flex-row justify-content-center gap-28">
            <button class="pri-btn home-btn"><b>MUA SẮM</b></button>
            <button class="sec-btn home-btn"><b>DỌN TỦ</b></button>
          </div>
        </div>
        <div class="home-intro-img"></div>
      </div>
      <div class="grid-12" style="background-color: #f3f2f2">
        <div class="home-cate flex-column align-items-start">
          <h2>Danh mục</h2>
          <div class="flex-row home-cate-list">
            <a href="" class="flex-column home-cate-item gap-16">
              <div
                class="cate-item flex-row justify-content-center align-items-center"
              >
                <div class="cate-icon-ao icon"></div>
              </div>
              <span>Áo</span>
            </a>
            <a href="" class="flex-column home-cate-item gap-16">
              <div
                class="cate-item flex-row justify-content-center align-items-center"
              >
                <div class="cate-icon-giay icon"></div>
              </div>
              <span>Giày dép</span>
            </a>
            <a href="" class="flex-column home-cate-item gap-16">
              <div
                class="cate-item flex-row justify-content-center align-items-center"
              >
                <div class="cate-icon-quan icon"></div>
              </div>
              <span>Quần</span>
            </a>
            <a href="" class="flex-column home-cate-item gap-16">
              <div
                class="cate-item flex-row justify-content-center align-items-center"
              >
                <div class="cate-icon-vay icon"></div>
              </div>
              <span>Váy</span>
            </a>
            <a href="" class="flex-column home-cate-item gap-16">
              <div
                class="cate-item flex-row justify-content-center align-items-center"
              >
                <div class="cate-icon-mua icon"></div>
              </div>
              <span>2Reli thu mua</span>
            </a>
            <a href="" class="flex-column home-cate-item gap-16">
              <div
                class="cate-item flex-row justify-content-center align-items-center"
              >
                <div class="cate-icon-shop icon"></div>
              </div>
              <span>Top shop</span>
            </a>
          </div>
        </div>
      </div>
      <div class="grid-12">
        <div class="home-cate flex-column align-items-start">
          <div class="flex-row w-100 jc-sb">
            <h2>Yêu thích</h2>
            <div class="show-more flex-row" @click="toggleArrowShowFavo()">
              <a>Xem tất cả</a>
              <div
                :class="{
                  'icon show-arrow-icon': true,
                  'rotate-90': showArrowIconFavo,
                }"
              ></div>
            </div>
          </div>
          <div class="flex-row product-list">
            <Product
              thumbnail="/img/icons/apple-touch-icon-60x60.png"
              v-for="product in productDemo"
              :key="product.id"
              :productId="product.id"
              :name="product.product_name"
              :price="formatPrice(product.product_price)"
            ></Product>
          </div>
        </div>
      </div>
      <div
        class="grid-12"
        style="
          background-color: #f3f2f2;
          margin-top: 64px;
          padding-bottom: 64px;
        "
      >
        <div class="home-cate flex-column align-items-start">
          <div class="flex-row w-100 jc-sb">
            <h2>Đề xuất hôm nay</h2>
            <div class="show-more flex-row" @click="toggleArrorShowRecom()">
              <a>Xem tất cả</a>
              <div
                :class="{
                  'icon show-arrow-icon': true,
                  'rotate-90': showArrowIconRecom,
                }"
              ></div>
            </div>
          </div>
          <div class="flex-row product-list">
            <Product
              thumbnail="/img/icons/apple-touch-icon-60x60.png"
              v-for="product in productDemo"
              :key="product.id"
              :name="product.product_name"
              :price="formatPrice(product.product_price)"
            ></Product>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar/index.vue";
import Footer from "../../components/Footer/index.vue";
import Product from "../../components/Product/index.vue";
import ProductService from "@/views/productServices";
// import { useRouter } from "vue-router";
const Home = {
  components: {
    Navbar,
    Footer,
    Product,
  },
  data() {
    return {
      productDemo: [],
      allProduct: [],
      showArrowIconFavo: false, // Trạng thái mặc định, không xoay
      showArrowIconRecom: false,
      account: "",
    };
  },
  setup() {
    // const router = useRouter();

    // Kiểm tra xem có JWT trong localStorage hay không
    const checkJWT = () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        const username = localStorage.getItem("nickname");
        return username;
      }
    };

    return {
      checkJWT,
    };
  },
  mounted() {
    this.getProductToDemo(1, 6);
    this.getAllProduct(1, 12);
    this.account = this.checkJWT();
  },
  methods: {
    toggleArrowShowFavo() {
      this.showArrowIconFavo = !this.showArrowIconFavo;
      if (this.showArrowIconFavo == false) {
        this.getProductToDemo(1, 6); // Gọi lại hàm getProductToDemo với tham số 1, 6
      } else {
        this.getProductToDemo(1, 12); // Gọi lại hàm getProductToDemo với tham số 1, 12
      }
      // Đảo trạng thái khi ấn vào
    },
    toggleArrorShowRecom() {
      this.showArrowIconRecom = !this.showArrowIconRecom;
      if (this.showArrowIconRecom == false) {
        this.getProductToDemo(1, 6); // Gọi lại hàm getProductToDemo với tham số 1, 6
      } else {
        this.getProductToDemo(1, 12); // Gọi lại hàm getProductToDemo với tham số 1, 12
      }
    },
    async getProductToDemo(startRecord, count) {
      this.productDemo = await ProductService.getProductToDemo(
        startRecord,
        count
      );
      console.log(this.productDemo);
    },
    async getAllProduct(startRecord, count) {
      this.allProduct = await ProductService.getProductToDemo(
        startRecord,
        count
      );
    },
    formatPrice(price) {
      return price.toLocaleString("vi-VN") + " VNĐ"; // Format giá tiền với đơn vị "VNĐ"
    },
  },
};

export default Home;
</script>
<style>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
