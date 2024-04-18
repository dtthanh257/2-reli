<template>
  <div class="product-card flex-column">
    <div class="product-card-code">Mã đơn hàng</div>

    <div class="flex-column">
      <h3>[Tên đăng nhập người bán]</h3>

      <div
        class="flex-row gap-20"
        style="padding-left: 40px; padding-bottom: 45px"
      >
        <div class="product-card-img"></div>
        <div class="product-card-info flex-column">
          <div class="product-card-name">[Tên sản phẩm]</div>
          <div class="product-card-quantity">x[Số lượng sản phẩm]</div>
          <div class="product-card-status">Trạng thái:</div>
          <div class="product-card-price">[Giá sản phẩm]</div>
        </div>
      </div>
      <div class="product-cart-payload gap-8">
        <p>Thành tiền:</p>
        <div class="product-cart-pay">[Giá sản phẩm +phí ship]</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
};
</script>
