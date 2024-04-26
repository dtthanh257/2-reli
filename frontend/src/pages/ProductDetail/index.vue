<template>
  <div class="product-detail">
    <Navbar></Navbar>
    <div class="grid-12">
      <div class="home-cate">
        <div class="product-detail-container flex-row gap-30">
          <div class="product-detail-img flex-column gap-30" style="flex: 1">
            <div
              class="product-detail-img-main"
              :style="{ 'background-image': 'url(' + mainImg + ')' }"
            ></div>
            <div class="flex-row" style="gap: 5%">
              <div
                class="product-detail-img-small"
                @click="this.changeMainImage(imageUrl)"
                v-for="(imageUrl, index) in smallImageUrls"
                :key="index"
                :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
              ></div>
            </div>
          </div>
          <div class="product-detail-list gap-30 flex-column" style="flex: 1">
            <div class="product-detail-item product-detail-name">
              {{ this.productName }}
            </div>
            <div class="product-detail-item product-detail-price">
              {{ this.productPrice }}
            </div>
            <div class="product-detail-item">
              Mô tả sản phẩm: {{ this.productDescr }}
            </div>
            <div class="product-detail-item">
              Tình trạng: {{ this.productStatus }}
            </div>
            <div class="product-detail-item">
              Loại sản phẩm: {{ this.productType }}
            </div>
            <div class="product-detail-item">
              Thương hiệu: {{ this.productBrand }}
            </div>
            <div class="product-detail-item">
              Kích cỡ: {{ this.productSize }}
            </div>
            <div class="product-detail-item">
              Vận chuyển từ: {{ this.productAddress }}
            </div>
            <div class="product-detail-item gap-12">
              <span>Số lượng</span>
              <div class="quantity-box">
                <div class="quantity-less" @click="minusQuantity()">-</div>
                <div class="quantity">{{ this.buyQuantity }}</div>
                <div class="quantity-more" @click="plusQuantity()">+</div>
              </div>
              <div class="quantity-left">
                Còn {{ this.productQuantity }} sản phẩm
              </div>
            </div>
            <div class="product-detail-button flex-row gap-20">
              <button class="product-detail-cart gap-8">
                <i class="fa-solid fa-cart-shopping"></i
                ><span>Thêm vào giỏ hàng</span>
              </button>
              <button class="product-detail-buy">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-12">
      <div class="home-cate">
        <div class="seller-account flex-row gap-20">
          <div class="seller-ava"></div>
          <div class="flex-column jc-sb gap-12">
            <div class="seller-name">{{ this.sellerName }}</div>
            <div class="seller-nickname">@{{ this.sellerNickname }}</div>
            <button class="seller-message">Chat ngay</button>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin-bottom: 0; padding-bottom: 128px"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer/index.vue";
import Navbar from "@/components/Navbar/index.vue";
import ProductService from "@/views/productServices";
import UserService from "@/views/userServices";
export default {
  name: "ProductDetail",
  data() {
    return {
      sellerName: "Tên người bán",
      sellerNickname: "nickname",
      productName: "",
      productPrice: "",
      productDescr: "",
      productStatus: "",
      productType: "",
      productSize: "",
      productAddress: "",
      productBrand: "",
      productQuantity: "",
      buyQuantity: 1,
      smallImageUrls: [],
      mainImg: "",
    };
  },
  props: {
    id: {
      type: Number,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    const productId = this.id;
    this.getProductInfo(productId);
    this.getProductImage(productId);
  },
  components: {
    Footer,
    Navbar,
  },
  methods: {
    //Lấy thông tin của sản phẩm
    async getProductInfo(productId) {
      const res = await ProductService.getProductById(productId);
      console.log(res);
      var userId = res.user_id;
      const res2 = await UserService.getUserById(userId);
      console.log(res2.data);
      this.sellerName = res2.data.name;
      this.sellerNickname = res2.data.nickname;
      this.productName = res.product_name;
      this.productPrice = this.formatCurrency(parseInt(res.product_price));
      this.productDescr = res.product_descr;
      this.productStatus = res.product_status;
      this.productBrand = res.product_brand;
      this.productSize = res.product_size;
      this.productAddress = res.product_addr;
      this.productQuantity = parseInt(res.product_quantity) - this.buyQuantity;
    },
    // Lấy thông tin về ảnh của sản phẩm
    async getProductImage(productId) {
      const res = await ProductService.getProductImg(productId);
      this.smallImageUrls = res.data;
      this.mainImg = res.data[0];
    },
    plusQuantity() {
      if (this.productQuantity > 0) {
        this.buyQuantity += 1;
        this.productQuantity -= 1;
      }
    },
    minusQuantity() {
      if (this.buyQuantity > 1) {
        this.buyQuantity -= 1;
        this.productQuantity += 1;
      }
    },
    formatCurrency(number) {
      // Chuyển số thành chuỗi
      const strNumber = String(number);
      // Tách phần nguyên và phần thập phân (nếu có)
      const parts = strNumber.split(".");
      // Phần nguyên (số tiền chính)
      let integerPart = parts[0];
      let decimalPart = parts.length > 1 ? parts[1] : "";
      integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      let formattedNumber = integerPart;
      if (decimalPart !== "") {
        formattedNumber += "," + decimalPart;
      }
      // Thêm đơn vị tiền tệ
      formattedNumber += " VNĐ";
      return formattedNumber;
    },
    changeMainImage(imageUrl) {
      this.mainImg = imageUrl;
    },
  },
};
</script>
