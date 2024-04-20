<template>
  <div>
    <Navbar></Navbar>
    <div class="grid-12">
      <div class="home-cate flex-row gap-20">
        <div class="post-for-sale-title">
          <h2>Đăng bán sản phẩm</h2>
          <h3>Thêm hình ảnh sản phẩm</h3>
          <p>Đăng từ 1 - 6 ảnh</p>
          <div class="flex-column post-for-sale-img">
            <div class="flex-row jc-sb">
              <ImgSelect
                v-for="(imgSelectIndex, index) in imgSelects.slice(0, 3)"
                :key="index"
                :ref="'imgSelect' + imgSelectIndex"
                @click="openFileInput(imgSelectIndex)"
                size="120"
              ></ImgSelect>
            </div>
            <div class="flex-row jc-sb">
              <ImgSelect
                v-for="(imgSelectIndex, index) in imgSelects.slice(3, 6)"
                :key="index"
                :ref="'imgSelect' + imgSelectIndex"
                @click="openFileInput(imgSelectIndex)"
                size="120"
              ></ImgSelect>
            </div>
          </div>
        </div>
        <div class="pfs-product-form flex-column">
          <Textfield
            label="TÊN SẢN PHẨM"
            placeholder="Giới thiệu ngắn gọn về sản phẩm"
            height="40"
          ></Textfield>
          <Textarea
            label="MÔ TẢ SẢN PHẨM"
            placeholder="Mô tả ngắn gọn về sản phẩm"
            height="64"
          ></Textarea>
          <Textarea
            label="TÌNH TRẠNG SẢN PHẨM"
            placeholder="Sản phẩm mới sử dụng một lần..."
            height="78"
          >
          </Textarea>
          <div class="flex-row gap-20">
            <Combobox
              label="PHÂN LOẠI SẢN PHẨM"
              :options="options"
              @input="handleInput"
              :items="classify"
            ></Combobox>
            <Combobox
              label="KÍCH CỠ SẢN PHẨM"
              :options="options"
              @input="handleInput"
              :items="size"
            ></Combobox>
          </div>
          <div class="flex-row gap-20">
            <Textfield
              label="SỐ LƯỢNG SẢN PHẨM"
              placeholder="Nhập số lượng sản phẩm"
              height="40"
            ></Textfield>
            <Textfield
              label="THƯƠNG HIỆU  "
              placeholder="Nhập thương hiệu (nếu có)"
              height="40"
            ></Textfield>
          </div>
          <div class="flex-row gap-20">
            <Textfield
              label="GIÁ BÁN SẢN PHẨM"
              placeholder="Nhập giá bán"
              height="40"
            ></Textfield>
            <div style="flex: 1">
              <div for="" style="height: 32px"></div>
              <div class="flex-row" style="align-items: center">
                <b style="display: flex; align-items: center; height: 40px">
                  VNĐ</b
                >
              </div>
            </div>
          </div>
          <div class="flex-column" style="align-items: center">
            <div class="divider"></div>
          </div>
          <h2>Thông tin người bán</h2>
          <Textfield label="Tên người bán" height="40" isV2="true"></Textfield>
          <div class="flex-row gap-20">
            <Combobox label="Tỉnh/Thành phố" isV2="true"></Combobox>
            <Combobox label="Quận/Huyện" isV2="true"></Combobox>
          </div>
          <Textfield label="Địa chỉ cụ thể" height="40" isV2="true"></Textfield>
          <Textfield label="Số điện thoại" height="40" isV2="true"></Textfield>
          <div class="textfield-bank-acc">
            <label class="textfield-label-v2">Tài khoản ngân hàng</label>
            <input type="text" class="textfield-input-v2" />
            <div class="flex-row bank-input-contain">
              <div class="bank-logo icon"></div>
              <div class="flex-column">
                <div class="bank-name">[Tên tài khoản]</div>
                <div class="bank-number">[Số tài khoản]</div>
              </div>
            </div>
            <div class="pfs-note">
              Lưu ý: 2Reli sẽ thanh toán cho bạn qua Tài khoản ngân hàng và bạn
              sẽ nhận được 85% giá trị đơn hàng.
            </div>
          </div>
        </div>
      </div>
      <div class="home-cate" style="display: flex; justify-content: center">
        <button class="pfs-button">
          <div class="pfs-button-icon icon"></div>
          ĐĂNG BÁN SẢN PHẨM
        </button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar/index.vue";
import Footer from "../../components/Footer/index.vue";
import Product from "../../components/Product/index.vue";
import Textfield from "@/components/TextField/index.vue";
import Textarea from "@/components/Textarea/index.vue";
import Combobox from "@/components/Combobox/index.vue";
import ImgSelect from "@/components/ImgSellect/index.vue";

const Postforsale = {
  data() {
    return {
      imgSelects: [0, 1, 2, 3, 4, 5],
      classify: [
        { id: 1, name: "Áo" },
        { id: 2, name: "Quần" },
        { id: 3, name: "Váy" },
        { id: 4, name: "Túi xách" },
        { id: 4, name: "Giày" },
        { id: 4, name: "Khác" },
      ],
      size: [
        { id: 1, name: "Onesize" },
        { id: 2, name: "XS" },
        { id: 3, name: "S" },
        { id: 4, name: "M" },
        { id: 5, name: "L" },
        { id: 6, name: "XL" },
        { id: 7, name: "XXL" },
        { id: 8, name: "Khác" },
      ],
      options: [
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
        { label: "Option 4", value: "option-4" },
        { label: "Option 5", value: "option-5" },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
    Product,
    Textfield,
    Textarea,
    Combobox,
    ImgSelect,
  },
  methods: {
    openFileInput(imgSelectIndex) {
      const imgSelect = this.$refs["imgSelect" + imgSelectIndex][0];
      if (imgSelect) {
        imgSelect.$refs.fileInput.click();
      }
    },
  },
};
export default Postforsale;
</script>
