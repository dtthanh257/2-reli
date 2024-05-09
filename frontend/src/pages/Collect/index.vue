<template>
  <div class="collect-page">
    <Navbar></Navbar>
    <div class="grid-12">
      <div class="home-cate">
        <h2 style="font-size: 28px; font-weight: 600; margin-bottom: 30px">
          THU GOM SẢN PHẨM
        </h2>
        <div class="flex-row gap-20">
          <div class="flex-column collect-form" style="flex: 1">
            <h3>LỰA CHỌN HÌNH THỨC THU GOM</h3>
            <div class="collect-method-radio">
              <div class="flex-row" style="gap: 8px">
                <input
                  type="radio"
                  name="collect-method"
                  id=""
                  value="0"
                  v-model="this.collectForm.collect_way"
                  checked
                />Quyên góp vào quỹ 2Reli
              </div>
              <div class="flex-row gap-8">
                <input
                  type="radio"
                  v-model="this.collectForm.collect_way"
                  name="collect-method"
                  id=""
                  value="1"
                />Sử dụng vào mục đích tái chế
              </div>
              <div class="flex-row gap-8">
                <input
                  type="radio"
                  v-model="this.collectForm.collect_way"
                  name="collect-method"
                  id=""
                  value="2"
                />Giao toàn quyền cho 2Reli xử lý
              </div>
            </div>
            <h3>THÊM HÌNH ẢNH TÚI HÀNG</h3>
            <SPAN style="c">Đăng từ 1 - 4 ảnh</SPAN>
            <div class="flex-row jc-sb">
              <ImgSelect
                v-for="(index, imgSelectIndex) in imgSelects"
                :key="index"
                :ref="'imgSelect' + imgSelectIndex"
                @image-selected="addImageUrl"
                @click="openFileInput(imgSelectIndex)"
                size="100"
              ></ImgSelect>
            </div>
            <div
              class="flex-column collect-weight gap-16"
              style="margin-top: 30px"
            >
              <h3>KHỐI LƯỢNG TÚI ĐỒ</h3>
              <div class="flex-row jc-sb">
                <div
                  class="collect-weight-choice"
                  @click="addGreenBorder($event)"
                  style="border: 3px solid green"
                >
                  1-5kg
                </div>
                <div
                  class="collect-weight-choice"
                  @click="addGreenBorder($event)"
                >
                  6-10kg
                </div>
                <div
                  class="collect-weight-choice"
                  @click="addGreenBorder($event)"
                >
                  11-15kg
                </div>
                <div
                  class="collect-weight-choice"
                  @click="addGreenBorder($event)"
                >
                  16-20kg
                </div>
              </div>
              <Textfield
                v-model:input="this.collectForm.product_name"
                label="TÊN SẢN PHẨM"
                height="50"
              ></Textfield>
            </div>
            <h3 style="margin: 26px 0">THÔNG TIN CÁ NHÂN</h3>
            <div class="flex-column" style="gap: 30px">
              <Textfield
                :isReadOnly="true"
                isV2="true"
                height="50"
                label="Họ và tên"
                v-model:input="this.userInfo.name"
              ></Textfield>
              <div class="flex-row gap-20">
                <Textfield
                  isV2="true"
                  height="50"
                  label="Tỉnh/Thành phố"
                  v-model:input="this.userInfo.province"
                ></Textfield>
                <Textfield
                  isV2="true"
                  height="50"
                  v-model:input="this.userInfo.district"
                  label="Quận/Huyện"
                ></Textfield>
              </div>
              <Textfield
                v-model:input="this.userInfo.ward"
                isV2="true"
                height="50"
                label="Phường/Xã"
              ></Textfield>
              <Textfield
                isV2="true"
                height="50"
                v-model:input="this.userInfo.address"
                label="Địa chỉ cụ thể"
              ></Textfield>
              <Textfield
                isV2="true"
                v-model:input="this.userInfo.phone_Number"
                :isReadOnly="true"
                height="50"
                label="Số điện thoại"
              ></Textfield>
            </div>
            <div class="flex-column">
              <h3 style="margin-top: 30px">CÁCH THỨC THANH TOÁN</h3>
              <div class="flex-row pay-method">
                <div class="flex-row" style="gap: 8px">
                  <input
                    type="radio"
                    name="paymethod"
                    id="pay-cash"
                    @change="toggleBankAccountDisplay()"
                  />Thanh toán khi nhận hàng
                </div>
                <div class="flex-row" style="gap: 8px">
                  <input
                    type="radio"
                    name="paymethod"
                    id="pay-bank-transfer"
                    @change="toggleBankAccountDisplay()"
                    checked
                  />Chuyển khoản ngân hàng
                </div>
              </div>

              <div class="textfield-bank-acc">
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
              <div class="collect-total-amount flex-column">
                <div class="flex-row jc-sb">
                  <div class="collect-money-title">Phí vận chuyển:</div>
                  <div class="collect-money" style="color: black">
                    {{ shipMoney }}
                  </div>
                </div>
                <div class="flex-row jc-sb">
                  <div class="collect-money-title">Thành tiền:</div>
                  <div class="collect-money-total">{{ totalMoney }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-column" style="flex: 1; gap: 30px">
            <div class="collect-img-1"></div>
            <div class="collect-img-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row" style="justify-content: center">
      <button
        class="procurement-button btn nor-btn"
        @click="this.addCollectProduct"
      >
        <div class="procurement-button-icon icon"></div>
        GỬI YÊU CẦU THU GOM
      </button>
    </div>
    <div
      class="grid-12"
      style="
        background-color: #f3f2f2;
        padding-bottom: 60px;
        padding-top: 12px;
        margin-top: 60px;
      "
    >
      <div class="precurement-produce flex-column home-cate gap-60">
        <h2>QUY TRÌNH THU MUA CÙNG 2RELI</h2>
        <div class="flex-row gap-20" style="width: 70%; align-items: center">
          <img
            class="precurement-produce-img"
            src="../../../public/img/assets/procduce-package.png"
            alt=""
          />
          <div class="flex-column" style="gap: 16px">
            <h3>Đóng gói sản phẩm</h3>
            <p style="line-height: 20px">
              2Reli sẽ đặt đơn vị vận chuyển đến để lấy hàng vào thời gian phù
              hợp. Bạn hãy ghi mã số đơn hàng trên túi hàng để 2Reli có thể nhận
              diện.
            </p>
          </div>
        </div>
        <div class="flex-row gap-20" style="width: 70%; align-items: center">
          <img
            class="precurement-produce-img"
            src="../../../public/img/assets/procduce-glass.png"
            alt=""
          />
          <div class="flex-column" style="gap: 16px">
            <h3>Kiểm định & Báo giá</h3>
            <p style="line-height: 20px">
              2Reli sẽ kiểm định chất lượng và gửi báo giá cho bạn trong vòng 5
              ngày để bạn kiểm tra và xác nhận.
            </p>
          </div>
        </div>
        <div class="flex-row gap-20" style="width: 70%; align-items: center">
          <img
            class="precurement-produce-img"
            src="../../../public/img/assets/procduce-money-bag.png"
            alt=""
          />
          <div class="flex-column" style="gap: 16px">
            <h3>Thanh toán & Đăng bán</h3>
            <p style="line-height: 20px">
              2Reli sẽ thanh toán hoá đơn ngay tức thì kể từ khi nhận được xác
              nhận từ bạn. Sau đó, sản phẩm của bạn sẽ được 2Reli đăng bán với
              tick xanh.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Footer from "@/components/Footer/index.vue";
import ImgSelect from "@/components/ImgSellect/index.vue";
import Textfield from "@/components/TextField/index.vue";
import UserService from "@/views/userServices";
import CollectService from "@/views/collectServices.js";
const Collect = {
  components: {
    Navbar,
    ImgSelect,
    Footer,
    Textfield,
  },
  mounted() {
    this.shipMoney = this.formatCurrency(60000);
    this.totalMoney = this.formatCurrency(60000);
    this.getUserInfo();
  },
  data() {
    return {
      imgSelects: [0, 1, 2, 3],
      shipMoney: 60000,
      totalMoney: 60000,
      weightPrices: {
        "1-5kg": 60000,
        "6-10kg": 120000,
        "11-15kg": 180000,
        "16-20kg": 240000,
      },
      userInfo: {},
      collectForm: {
        collect_way: 0,
        price: "",
        product_name: "",
        user_id: "",
      },
      imageUrls: [],
    };
  },

  methods: {
    openFileInput(index) {
      this.$refs["imgSelect" + index][0].$refs.fileInput.click();
    },
    formatCurrency(amount) {
      return amount.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
    addGreenBorder(event) {
      const choices = document.querySelectorAll(".collect-weight-choice");
      choices.forEach((choice) => {
        choice.style.border = "1px solid var(--border-color)";
      });
      event.target.style.border = "3px solid green";
      const selectedChoice = event.target.textContent.trim();
      // Cập nhật shipMoney tương ứng từ weightPrices
      this.shipMoney = this.formatCurrency(this.weightPrices[selectedChoice]);
      this.totalMoney = this.formatCurrency(
        this.weightPrices[selectedChoice] + 0
      );
    },
    toggleBankAccountDisplay() {
      const bankAcc = document.querySelector(".textfield-bank-acc");
      var payBankTranfer = document.querySelector("#pay-bank-transfer");
      if (payBankTranfer.checked) {
        bankAcc.style.display = "flex";
      } else {
        bankAcc.style.display = "none";
      }
    },
    async getUserInfo() {
      const userId = localStorage.getItem("id");
      const res = await UserService.getUserById(userId);
      this.userInfo = res.data;
    },
    async addCollectProduct() {
      this.collectForm.price = this.totalMoney;
      this.collectForm.user_id = localStorage.getItem("id");
      const raw = JSON.stringify(this.collectForm);
      await CollectService.addCollectProduct(raw);
      console.log("Đăng sản phẩm thu gom thành công");
      this.addProductImg();
    },
    addImageUrl(imageUrl) {
      const imageData = { imageData: imageUrl };
      this.imageUrls.push(imageData);
      console.log(this.imageUrls);
    },
    async addProductImg() {
      try {
        if (this.imageUrls.length != 0) {
          for (let i = 0; i < this.imageUrls.length; i++) {
            await CollectService.addCollectProductImg(this.imageUrls[i]);
          }
          console.log(this.imageUrls);
        } else console.log("Bạn chưa đăng ảnh nào");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
export default Collect;
</script>
