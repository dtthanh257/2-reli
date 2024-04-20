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
            <h3>Lựa chọn hình thức thu gom</h3>
            <div class="collect-method-radio">
              <div class="flex-row gap-8">
                <input type="radio" name="collect-method" id="" />Quyên góp vào
                quỹ 2Reli
              </div>
              <div class="flex-row gap-8">
                <input type="radio" name="collect-method" id="" />Sử dụng vào
                mục đích tái chế
              </div>
              <div class="flex-row gap-8">
                <input type="radio" name="collect-method" id="" />Giao toàn
                quyền cho 2Reli xử lý
              </div>
            </div>
            <h3>THÊM HÌNH ẢNH TÚI HÀNG</h3>
            <SPAN>Đăng từ 1 - 4 ảnh</SPAN>
            <div class="flex-row jc-sb">
              <ImgSelect ref="imgSelect" @click="openFileInput"></ImgSelect>
              <ImgSelect ref="imgSelect" @click="openFileInput"></ImgSelect>
              <ImgSelect ref="imgSelect" @click="openFileInput"></ImgSelect>
              <ImgSelect ref="imgSelect" @click="openFileInput"></ImgSelect>
            </div>
            <div class="flex-column collect-weight">
              <h3>KHỐI LƯỢNG TÚI ĐỒ</h3>
              <div class="flex-row jc-sb">
                <div
                  class="collect-weight-choice"
                  @click="addGreenBorder($event)"
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
            </div>
            <h3>THÔNG TIN CÁ NHÂN</h3>
            <div class="flex-column" style="gap: 30px">
              <Textfield isV2="true" height="40" label="Họ và tên"></Textfield>
              <div class="flex-row gap-20">
                <Textfield
                  isV2="true"
                  height="40"
                  label="Tỉnh/Thành phố"
                ></Textfield>
                <Textfield
                  isV2="true"
                  height="40"
                  label="Quận/Huyện"
                ></Textfield>
              </div>
              <Textfield isV2="true" height="40" label="Phường/Xã"></Textfield>
              <Textfield
                isV2="true"
                height="40"
                label="Địa chỉ cụ thể"
              ></Textfield>
              <Textfield
                isV2="true"
                height="40"
                label="Số điện thoại"
              ></Textfield>
              <Textfield
                isV2="true"
                label="Thời gian lấy hàng"
                height="40"
              ></Textfield>
            </div>
          </div>
          <div class="flex-colum" style="flex: 1">
            <div class="collect-img"></div>
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
const Collect = {
  components: {
    Navbar,
    ImgSelect,
    Footer,
    Textfield,
  },
  methods: {
    openFileInput() {
      this.$refs.imgSelect.$refs.fileInput.click();
    },
    addGreenBorder(event) {
      const choices = document.querySelectorAll(".collect-weight-choice");
      choices.forEach((choice) => {
        choice.style.border = "1px solid var(--border-color)"; // Remove border from all choices
      });
      event.target.style.border = "3px solid green"; // Add border to clicked choice
    },
  },
};
export default Collect;
</script>
