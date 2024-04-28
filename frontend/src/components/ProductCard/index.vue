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
          <div class="product-card-status">
            Trạng thái:
            <span v-if="product_status == 0">Đang chờ xác nhận</span>
            <span v-if="product_status == 1">Đang chuẩn bị</span>
            <span v-if="product_status == 2">Giao hàng thành công</span>
          </div>
          <div class="product-card-price">{{ product_price }}</div>
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
        <button class="product-card-btn nor-btn" v-if="buttonLabel">
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
    buttonLabel: String,
    product_name: String,
    product_price: String,
    product_status: Number,
    quantity: Number,
    seller_name: String,
    order_id: Number,
    imgUrl: String,
  },
};
</script>
