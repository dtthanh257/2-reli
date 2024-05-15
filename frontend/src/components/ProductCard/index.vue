<template>
  <div class="product-card flex-column">
    <div class="product-card-code">Mã đơn hàng {{ order_id }}</div>

    <div class="flex-column">
      <h3>{{ seller_name }}</h3>

      <div
        class="flex-row gap-20"
        style="padding-left: 40px; padding-bottom: 45px"
      >
        <div
          class="product-card-img"
          :style="{ 'background-image': 'url(' + imgUrl + ')' }"
        ></div>
        <div class="product-card-info flex-column">
          <div class="product-card-name">{{ product_name }}</div>
          <div class="product-card-quantity">x {{ quantity }}</div>
          <div class="product-card-status" v-if="collect_product == true">
            Trạng thái:
            <span v-if="product_status == 0">Đã gửi yêu cầu</span>
            <span v-if="product_status == 1">Đang xử lý</span>
            <span v-if="product_status == 2">Đã hoàn thành</span>
          </div>
          <div
            class="product-card-status"
            v-else-if="procurement_product == true"
          >
            Trạng thái:
            <span v-if="product_status == 0">Đã gửi yêu cầu</span>
            <span v-if="product_status == 1">Đã kiểm định, chờ xác nhận</span>
            <span v-if="product_status == 2">Đã hoàn thành</span>
          </div>
          <div class="product-card-status" v-else>
            Trạng thái:
            <span v-if="product_status == 0">Đang chờ xác nhận</span>
            <span v-if="product_status == 1">Đang chuẩn bị</span>
            <span v-if="product_status == 2">Giao hàng thành công</span>
          </div>

          <div class="product-card-price" v-if="collect_product == true">
            <span v-if="collect_way == 0">Quyên góp</span>
            <span v-if="collect_way == 1">Tái chế</span>
            <span v-if="collect_way == 2">2Reli xử lý</span>
          </div>
          <div
            class="product-card-price"
            v-if="procurement_product == true"
          ></div>
          <div class="product-card-price" v-if="single_price == true">
            {{ product_price }}
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
          <div class="product-card-pay">{{ product_price }}</div>
        </div>
        <button
          class="product-card-btn nor-btn"
          v-if="buttonLabel != ''"
          @click="changeProductStatus"
        >
          {{ buttonLabel }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    buttonLabel: {
      type: String,
      default: "",
    },
    product_name: String,
    product_price: String,
    product_status: Number,
    quantity: Number,
    seller_name: String,
    order_id: Number,
    imgUrl: String,
    collect_product: {
      type: Boolean,
      default: false,
    },
    procurement_product: {
      type: Boolean,
      default: false,
    },
    single_price: {
      type: Boolean,
      default: true,
    },
    collect_way: Number,
  },
  methods: {
    changeProductStatus() {
      this.$emit("updateCollectProductStatus");
    },
  },
};
</script>
