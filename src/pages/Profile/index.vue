<template>
  <div>
    <Navbar></Navbar>
    <div class="grid-12" style="background-color: #f5f5f5">
      <div class="home-cate profile-page">
        <h2>Hồ sơ của tôi</h2>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        <div class="divider" style="margin-bottom: 48px"></div>
        <div class="flex-column align-items-center gap-28">
          <Textfield label="Tên đăng nhập" isV3="true" height="40"></Textfield>
          <Textfield label="Họ và tên" isV3="true" height="40"></Textfield>
          <Textfield label="Email" isV3="true" height="40"></Textfield>
          <Textfield label="Số điện thoại" isV3="true" height="40"></Textfield>
          <Combobox label="Tỉnh/Thành phố" isV3="true" :items="date"></Combobox>
          <Combobox label="Quận/Huyện" isV3="true"></Combobox>
          <Combobox label="Phường/Xã" isV3="true"></Combobox>
          <Textfield label="Địa chỉ cụ thể" isV3="true" height="40"></Textfield>
          <div class="flex-row sex-option-container gap-28">
            <label for="">Giới tính</label>
            <div class="flex-row gap-8">
              <input type="radio" name="sex" id="" />
              Nam
            </div>
            <div class="flex-row gap-8">
              <input type="radio" name="sex" id="" />
              Nữ
            </div>
            <div class="flex-row gap-8">
              <input type="radio" name="sex" id="" />
              Khác
            </div>
          </div>
          <div class="profile-dob flex-row">
            <label>Ngày sinh</label>
            <Combobox isV3="true" width="120" :items="date"></Combobox>
            <Combobox isV3="true" width="120"></Combobox>
            <Combobox isV3="true" width="120"></Combobox>
          </div>
          <div class="profile-save-btn">
            <button class="pri-btn nor-btn">Lưu</button>
          </div>
          <div class="flex-row jc-sb w-100">
            <h2>Tài khoản ngân hàng của tôi</h2>
            <a href="/home">
              <button class="pri-btn nor-btn">
                Thêm tài khoản ngân hàng
              </button></a
            >
          </div>
          <div class="divider" style="margin: 0"></div>
          <span>Bạn chưa có tài khoản ngân hàng.</span>
        </div>
        <div class="profile-set-ava">
          <div
            class="flex-column"
            style="
              max-width: 204px;
              justify-content: center;
              align-items: center;
              gap: 20px;
            "
          >
            <div class="profile-ava">
              <img
                id="avaDefault"
                src="../../../public/img/assets/ava-acc-icon.png"
                alt=""
              />
              <img id="newAva" :src="imageUrl" alt="" style="display: none" />
            </div>
            <input
              type="file"
              ref="fileInput"
              style="display: none"
              @change="handleImageChange"
            />
            <button @click="openFileInput">Chọn ảnh</button>
            <div class="flex-column gap-8">
              <label>Dung lượng file tối đa 1MB.</label>
              <label>Định dạng .JPEG, .PNG</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin: 0; background: #f5f5f5; padding: 80px 0"></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Textfield from "@/components/TextField/index.vue";
import Combobox from "@/components/Combobox/index.vue";
import Footer from "@/components/Footer/index.vue";
export default {
  components: {
    Navbar,
    Textfield,
    Combobox,
    Footer,
  },
  name: "ProfilePage",
  data() {
    return {
      imageUrl: "../../../public/img/assets/ava-acc-icon.png",
      date: [
        { id: 1, name: 1 },
        { id: 1, name: 2 },
        { id: 1, name: 3 },
        { id: 1, name: 4 },
        { id: 1, name: 5 },
      ],
    };
  },
  methods: {
    openFileInput() {
      // Khi người dùng nhấp vào nút 'Chọn ảnh', kích hoạt input type="file"
      this.$refs.fileInput.click();
    },
    handleImageChange(event) {
      var avaDef = document.getElementById("avaDefault");
      var newAva = document.getElementById("newAva");
      // Khi người dùng chọn ảnh từ máy tính, cập nhật 'src' của hình ảnh
      const file = event.target.files[0];
      if (file) {
        avaDef.style.display = "none";
        newAva.style.display = "block";
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
          console.log(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
