<template>
  <div style="background-color: #f5f5f5">
    <Navbar></Navbar>
    <div class="grid-12">
      <div class="home-cate flex-column" style="gap: 30px">
        <div class="buy-info">
          <h3>Thông tin nhận hàng</h3>
          <div class="flex-row gap-20">
            <div class="flex-column" style="flex: 1; gap: 40px">
              <Textfield
                isV2="true"
                label="Tên người nhận"
                height="50"
              ></Textfield>
              <div class="flex-row gap-20">
                <Textfield
                  isV2="true"
                  label="Tỉnh/Thành phố"
                  height="50"
                ></Textfield>
                <Textfield
                  isV2="true"
                  label="Quận/Huyện"
                  height="50"
                ></Textfield>
              </div>
            </div>
            <div class="flex-column" style="flex: 1; gap: 40px">
              <Textfield
                isV2="true"
                label="Số điện thoại"
                height="50"
              ></Textfield>
              <Textfield isV2="true" label="Phường/Xã" height="50"></Textfield>
            </div>
          </div>
          <Textfield isV2="true" label="Địa chỉ cụ thể" height="50"></Textfield>
        </div>
        <div class="buy-product-list">
          <table>
            <thead>
              <tr>
                <th style="font-size: 23px; color: #4d6939; font-weight: 500">
                  Sản phẩm
                </th>
                <th style="text-align: center">Đơn giá (VNĐ)</th>
                <th style="text-align: center">Số lượng</th>
                <th style="text-align: end">Thành tiền (VNĐ)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="product-list-item flex-column">
                    <div class="product-seller-name">[Tên người bán]</div>
                    <div
                      class="flex-row"
                      style="justify-content: center; gap: 12px"
                    >
                      <div class="product-sell-img"></div>
                      <div
                        class="flex-column"
                        style="
                          justify-content: space-between;
                          align-items: start;
                        "
                      >
                        <div class="product-name">[Tên sản phẩm]</div>
                        <div class="product-addr">Thanh Xuân, Hà Nội</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td style="text-align: center">150,000</td>
                <td style="text-align: center">2</td>
                <td style="text-align: end">300,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colspan="3"
                  style="
                    text-align: end;
                    font-size: 16px;
                    color: #777777;
                    font-weight: 400;
                  "
                >
                  Tổng số tiền
                </td>
                <td
                  style="
                    text-align: end;
                    font-size: 20px;
                    color: #28a24f;
                    font-weight: 500;
                    height: 70px;
                  "
                >
                  900,000
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="home-cate flex-column" style="background-color: white">
          <div class="product-pay-method flex-column">
            <h3>Phương thức thanh toán</h3>
            <div class="flex-column" style="gap: 12px">
              <div class="flex-row" style="gap: 8px">
                <input type="radio" name="paymethod" />Thanh toán khi nhận hàng
              </div>
              <div class="flex-row" style="gap: 8px">
                <input type="radio" name="paymethod" checked />Chuyển khoản ngân
                hàng
              </div>
            </div>
            <div class="textfield-bank-acc" style="width: 50%">
              <label class="textfield-label-v2">Tài khoản ngân hàng</label>
              <input type="text" class="textfield-input-v2" />
              <div
                class="flex-row bank-input-contain"
                style="transform: translateY(-50%)"
              >
                <div class="bank-logo icon"></div>
                <div class="flex-column">
                  <div class="bank-name">[Tên tài khoản]</div>
                  <div class="bank-number">[Số tài khoản]</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex-row"
            style="border-bottom: 1px solid var(--border-color)"
          >
            <div class="flex-column" style="flex: 1"></div>
            <div
              class="flex-column"
              style="flex: 1; gap: 24px; padding: 24px 40px"
            >
              <div class="flex-row jc-sb">
                <div class="product-price-title">Tổng tiền hàng</div>
                {{ formatCurrency(productPrice) }}
              </div>
              <div class="flex-row jc-sb">
                <div class="product-price-title">Phí vận chuyển</div>
                {{ formatCurrency(shipPrice) }}
              </div>
              <div class="flex-row jc-sb">
                <div class="product-price-title">Tổng số tiền</div>
                <div class="product-total-price">
                  {{ formatCurrency(totalPrice) }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="home-cate flex-row"
            style="
              justify-content: end;
              padding-bottom: 38px;
              padding-right: 40px;
            "
          >
            <button class="product-order-btn">ĐẶT HÀNG</button>
          </div>
        </div>
      </div>
    </div>
    <Footer style="background-color: #f5f5f5; padding-bottom: 128px"></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Textfield from "@/components/TextField/index.vue";
import Footer from "@/components/Footer/index.vue";
export default {
  name: "BuyInfo",
  props: {
    productPrice: {
      type: Number,
      default: 0,
    },
    shipPrice: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Navbar,
    Footer,
    Textfield,
  },
  methods: {
    formatCurrency(number) {
      const formattedNumber = number
        .toFixed(0)
        .replace(/\d(?=(\d{3})+$)/g, "$&,");
      // Thêm đơn vị tiền tệ
      return formattedNumber + " VNĐ";
    },
  },
};
</script>
