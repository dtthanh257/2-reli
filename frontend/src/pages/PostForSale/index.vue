<template>
  <div>
    <Navbar></Navbar>
    <Popup
      style="z-index: 100"
      v-if="this.validate == true"
      :title="this.popup.title"
      :content="this.popup.content"
      :btn="this.popup.btn"
      :success="this.popup.success"
      @close="this.closePopup"
      @action="this.reloadPage"
    ></Popup>
    <div class="grid-12">
      <div class="home-cate flex-row gap-20">
        <div class="post-for-sale-title">
          <h2>ĐĂNG BÁN SẢN PHẨM</h2>
          <h3>THÊM HÌNH ẢNH SẢN PHẨM</h3>
          <p>Đăng từ 1 - 6 ảnh</p>
          <div class="flex-column post-for-sale-img">
            <div class="flex-row" style="gap: 30px">
              <ImgSelect
                v-for="(imgSelectIndex, index) in imgSelects.slice(0, 3)"
                :key="index"
                :ref="'imgSelect' + imgSelectIndex"
                @click="openFileInput(imgSelectIndex)"
                @image-selected="addImageUrl"
                size="120"
              ></ImgSelect>
            </div>
            <div class="flex-row" style="gap: 30px">
              <ImgSelect
                v-for="(imgSelectIndex, index) in imgSelects.slice(3, 6)"
                :key="index"
                :ref="'imgSelect' + imgSelectIndex"
                @image-selected="addImageUrl"
                @click="openFileInput(imgSelectIndex)"
                size="120"
              ></ImgSelect>
            </div>
          </div>
        </div>
        <div class="pfs-product-form flex-column">
          <Textfield
            v-model:input="this.productForm.product_name"
            label="TÊN SẢN PHẨM"
            placeholder="Giới thiệu ngắn gọn về sản phẩm"
            height="40"
          ></Textfield>
          <Textfield
            v-model:input="this.productForm.product_descr"
            label="MÔ TẢ SẢN PHẨM"
            placeholder="Mô tả ngắn gọn về sản phẩm"
            height="64"
            pb="20"
          ></Textfield>
          <Textfield
            v-model:input="this.productForm.product_status"
            label="TÌNH TRẠNG SẢN PHẨM"
            placeholder="Sản phẩm mới sử dụng một lần..."
            height="78"
            pb="30"
          >
          </Textfield>
          <div class="flex-row gap-20">
            <Combobox
              label="PHÂN LOẠI SẢN PHẨM"
              :options="options"
              :items="classify"
              @input-value-changed="handleProductType"
            ></Combobox>
            <Combobox
              label="KÍCH CỠ SẢN PHẨM"
              :options="options"
              :items="size"
              @input-value-changed="handleProductSize"
            ></Combobox>
          </div>
          <div class="flex-row gap-20">
            <Textfield
              v-model:input="this.productForm.product_quantity"
              label="SỐ LƯỢNG SẢN PHẨM"
              placeholder="Nhập số lượng sản phẩm"
              height="40"
            ></Textfield>
            <Textfield
              v-model:input="this.productForm.product_brand"
              label="THƯƠNG HIỆU  "
              placeholder="Nhập thương hiệu (nếu có)"
              height="40"
            ></Textfield>
          </div>
          <div class="flex-row gap-20">
            <Textfield
              v-model:input="this.productForm.product_price"
              label="GIÁ BÁN SẢN PHẨM"
              placeholder="Nhập giá bán"
              height="40"
            ></Textfield>
            <div style="flex: 1">
              <div for="" style="height: 32px"></div>
              <div class="flex-row" style="align-items: center">
                <b
                  style="
                    display: flex;
                    align-items: center;
                    height: 40px;
                    color: #28a24f;
                  "
                >
                  VNĐ</b
                >
              </div>
            </div>
          </div>
          <div class="flex-column" style="align-items: center">
            <div class="divider"></div>
          </div>
          <h2>Thông tin người bán</h2>
          <Textfield
            v-model:input="this.userInfo.userName"
            label="Tên người bán"
            isReadOnly="true"
            height="40"
            isV2="true"
          ></Textfield>
          <div class="flex-row gap-20">
            <Textfield
              v-model:input="this.userInfo.province"
              height="40"
              label="Tỉnh/Thành phố"
              isV2="true"
            ></Textfield>
            <Textfield
              v-model:input="this.userInfo.district"
              height="40"
              label="Quận/Huyện"
              isV2="true"
            ></Textfield>
          </div>
          <Textfield
            v-model:input="this.userInfo.address"
            label="Địa chỉ cụ thể"
            height="40"
            isV2="true"
          ></Textfield>
          <Textfield
            isReadOnly="true"
            v-model:input="this.userInfo.phone_number"
            label="Số điện thoại"
            height="40"
            isV2="true"
          ></Textfield>
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
        <button class="pfs-button" @click="addProduct()">
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
// import Textarea from "@/components/Textarea/index.vue";
import Combobox from "@/components/Combobox/index.vue";
import ImgSelect from "@/components/ImgSellect/index.vue";
import ProductService from "@/views/productServices.js";
import UserService from "@/views/userServices.js";
import Popup from "../../components/Popup/index.vue";

const Postforsale = {
  data() {
    return {
      validate: false,
      productForm: {
        product_name: "",
        product_descr: "",
        product_status: "",
        product_type: "",
        product_size: "",
        product_quantity: "",
        product_price: "",
        user_id: "",
        sell_status: 0,
        product_brand: "",
      },
      userInfo: {
        userName: "",
        province: "",
        district: "",
        address: "",
        phone_number: "",
      },
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
      popup: {
        title: "",
        content: "",
        btn: "",
        success: false,
      },
      imageUrls: [],
    };
  },
  components: {
    Navbar,
    Footer,
    Product,
    Textfield,
    // Textarea,
    Combobox,
    ImgSelect,
    Popup,
  },
  created() {
    // Kiểm tra xem có id trong localStorage không
    const userId = localStorage.getItem("id");
    if (userId) {
      // Gọi hàm lấy thông tin người dùng từ id
      this.getUserInfo();
    }
  },
  methods: {
    async getUserInfo() {
      var id = localStorage.getItem("id");
      const res = await UserService.getUserById(id);
      console.log(res);
      this.productForm.user_id = id;
      this.userInfo.userName = res.data.nickname;
      this.userInfo.province = res.data.province;
      this.userInfo.district = res.data.district;
      this.userInfo.address = res.data.address;
      this.userInfo.phone_number = res.data.phone_Number;
      console.log(this.userInfo);
    },
    openFileInput(imgSelectIndex) {
      const imgSelect = this.$refs["imgSelect" + imgSelectIndex][0];
      if (imgSelect) {
        imgSelect.$refs.fileInput.click();
      }
    },
    async addProduct() {
      if (
        !this.productForm.product_name ||
        !this.productForm.product_descr ||
        !this.productForm.product_status ||
        !this.productForm.product_type ||
        !this.productForm.product_size ||
        !this.productForm.product_quantity ||
        !this.productForm.product_price
      ) {
        this.popup.btn = "Đóng";
        this.popup.title = "Thất bại";
        this.popup.content =
          "Hãy điền đầy đủ thông tin cần thiết của sản phẩm!";
        this.popup.success = false;
        this.validate = true;
      } else {
        var raw = JSON.stringify(this.productForm);
        console.log(raw);
        await ProductService.addProduct(raw).then(() => {
          console.log("Đăng sản phẩm thành công");
          this.addProductImg();
          this.popup.btn = "Tiếp tục";
          this.popup.title = "Thành công";
          this.popup.content = "Đăng bán sản phẩm thành công.";
          this.popup.success = true;
          this.validate = true;
        });
      }
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
            await ProductService.addProductImage(this.imageUrls[i]);
          }
        } else console.log("Bạn chưa đăng ảnh nào");
      } catch (error) {
        console.log(error);
      }
    },
    handleProductType(value) {
      this.productForm.product_type = value;
      console.log(this.productForm.product_type);
    },
    handleProductSize(value) {
      this.productForm.product_size = value;
      console.log(this.productForm.product_size);
    },
    closePopup() {
      this.validate = false;
      console.log("Đóng");
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
export default Postforsale;
</script>
