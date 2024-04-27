<template>
  <div style="background-color: #f5f5f5" class="flex-column">
    <Navbar></Navbar>
    <div class="grid-12" style="background-color: white">
      <div class="home-cate" style="padding: 0">
        <div class="flex-row" style="align-items: center; padding: 30px 0">
          <div
            class="flex-row gap-8"
            style="
              flex: 4;
              font-size: 20px;
              line-height: 40px;
              font-weight: 500;
              display: flex;
              align-items: center;
            "
          >
            Sản phẩm
          </div>
          <span style="flex: 1">Đơn giá</span>
          <span style="flex: 1">Số lượng</span>
          <span style="flex: 1">Thành tiền</span>
          <span style="flex: 1">Thao tác</span>
        </div>
      </div>
    </div>
    <div
      class="grid-12"
      v-for="(item, index) in cartItem"
      :key="index"
      style="background-color: white; margin-top: 30px"
    >
      <div class="home-cate" style="padding: 30px 0">
        <div class="flex-column gap-30" style="text-align: start">
          <div class="flex-row gap-8">
            <input
              type="checkbox"
              name=""
              id=""
              style="
                height: 25px;
                width: 25px;
                accent-color: var(--primary-color);
              "
              v-model="item.selected"
            />
            <!-- Thêm logic hiển thị thông tin sản phẩm -->
            <div style="font-size: 20px; font-weight: 500">
              {{ item.product_seller }}
            </div>
          </div>
          <div class="flex-row">
            <div class="flex-row gap-30" style="flex: 1">
              <div
                style="width: 30%; aspect-ratio: 1 / 1"
                class="product-img"
                :style="{
                  'background-image': 'url(' + productImg[index] + ')',
                }"
              ></div>
              <div style="font-size: 16px; font-weight: 600">
                {{ item.product_name }}
              </div>
              <div>{{ item.product_type }}</div>
            </div>
            <div class="flex-row" style="flex: 1">
              <div
                class="flex-row"
                style="flex: 1; justify-content: center; align-items: center"
              >
                {{ item.product_price }}
              </div>
              <div
                style="
                  flex: 1;
                  justify-content: center;
                  align-items: center;
                  display: flex;
                "
              >
                {{ item.quantity }}
              </div>
              <!-- Thêm logic tính toán thành tiền -->
              <div
                style="
                  flex: 1;
                  justify-content: center;
                  align-items: center;
                  display: flex;
                  color: #28a24f;
                "
              >
                {{ item.product_price * item.quantity }}
              </div>
              <div
                style="
                  flex: 1;
                  justify-content: center;
                  align-items: center;
                  display: flex;
                "
              >
                <button
                  @click="removeItem(index)"
                  style="background-color: white; color: #28a24f"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>

          <!-- Thêm các thao tác -->
        </div>
      </div>
    </div>
    <div
      class="grid-12"
      style="margin-top: 30px; background-color: white; padding: 30px 0"
    >
      <div class="home-cate" style="padding: 0">
        <div
          class="flex-row"
          style="
            display: flex;
            align-items: center;
            width: 100%;
            flex: 1;
            justify-content: space-between;
          "
        >
          <div
            class="check-all gap-8"
            style="display: flex; align-items: center; font-size: 20px"
          >
            <input
              type="checkbox"
              name=""
              id=""
              style="
                height: 25px;
                width: 25px;
                font-size: 20px;
                accent-color: var(--primary-color);
              "
              v-model="selectAll"
              @change="toggleSelectAll"
            />
            Chọn tất cả
          </div>
          <div class="" style="font-size: 20px">
            Tổng thanh toán {{ this.totalchecked }} sản phẩm
          </div>
          <div class="cart-total-price" style="font-size: 20px; color: #28a24f">
            {{ this.totalPrice }}
          </div>
          <button
            style="
              height: 44px;
              width: 160px;
              font-size: 20px;
              background-color: var(--primary-color);
              color: white;
              font-weight: 500;
            "
          >
            Mua hàng
          </button>
        </div>
      </div>
    </div>
    <Footer style="margin-bottom: 0; padding-bottom: 128px"></Footer>
  </div>
</template>
<script>
import Footer from "../../components/Footer/index.vue";
import Navbar from "../../components/Navbar/index.vue";
import CartService from "@/views/cartServices.js";
import ProductService from "@/views/productServices";
const Cart = {
  components: {
    Footer,
    Navbar,
  },
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      cartItem: [],
      productImg: [],
      selectAll: false,
      totalchecked: 0,
      totalPrice: "",
    };
  },
  mounted() {
    const userId = this.id;
    this.getCartInfo(userId);
    console.log(this.getCartInfo(userId));
  },
  watch: {
    cartItem: {
      handler() {
        this.calculateTotalPrice();
        this.totalchecked = this.cartItem.filter(
          (item) => item.selected
        ).length;
        this.updateSelectAll();
      },
      deep: true,
    },
  },
  computed: {
    totalMoney() {
      let total = this.cartItem.reduce((total, item) => {
        if (item.selected) {
          total += parseInt(item.product_price) * item.quantity;
        }
        return total;
      }, 0);

      // Biến đổi total thành chuỗi tiền tệ và gán cho totalPrice
      this.totalPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total);
      console.log(total);
      return total;
    },
    computed: {
      allItemsSelected() {
        return (
          this.cartItem.length > 0 &&
          this.cartItem.every((item) => item.selected)
        );
      },
    },
  },
  methods: {
    async getCartInfo(userId) {
      userId = this.id;
      const res = await CartService.getCartInfo(userId);
      this.cartItem = res.data;
      console.log(this.cartItem);
      for (let i = 0; i < this.cartItem.length; i++) {
        this.getProductImg(this.cartItem[i].product_id);
      }
      console.log(this.productImg);
    },
    async getProductImg(productId) {
      const res = await ProductService.getProductImg(productId);
      console.log(res.data);
      this.productImg.push(res.data[0]);
    },
    async removeItem(index) {
      const cartId = this.cartItem[index].id;
      try {
        await CartService.deleteCartItem(cartId);
        this.cartItem.splice(index, 1);
      } catch (error) {
        console.log("Error deleting cart item:", error);
      }
    },
    toggleSelectAll() {
      this.cartItem.forEach((item) => {
        item.selected = this.selectAll;
      });
    },
    calculateTotalPrice() {
      let total = this.cartItem.reduce((total, item) => {
        if (item.selected) {
          total += parseInt(item.product_price) * item.quantity;
        }
        return total;
      }, 0);

      this.totalPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(total);
    },
    updateSelectAll() {
      this.selectAll = this.allItemsSelected;
    },
  },
};
export default Cart;
</script>
