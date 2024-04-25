<template>
  <div>
    <Navbar></Navbar>
    <div class="grid-12" style="background-color: #f5f5f5">
      <div class="home-cate profile-page">
        <h2>Hồ sơ của tôi</h2>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        <div class="divider" style="margin-bottom: 48px"></div>
        <div class="flex-column align-items-center gap-28">
          <Textfield
            label="Tên đăng nhập"
            :isReadOnly="isReadonly"
            :readOnlyValue="this.userInfo.nickname"
            isV3="true"
            height="40"
          ></Textfield>
          <Textfield
            :inputValue="this.userInfo.name"
            label="Họ và tên"
            isV3="true"
            height="40"
          ></Textfield>
          <Textfield
            v-model="this.userInfo.email"
            label="Email"
            isV3="true"
            height="40"
          ></Textfield>
          <Textfield
            :readOnlyValue="this.userInfo.phone_number"
            label="Số điện thoại"
            isV3="true"
            height="40"
          ></Textfield>
          <Combobox label="Tỉnh/Thành phố" isV3="true" :items="date"></Combobox>
          <Combobox label="Quận/Huyện" isV3="true"></Combobox>
          <Combobox label="Phường/Xã" isV3="true"></Combobox>
          <Textfield
            :readOnlyValue="this.userInfo.address"
            label="Địa chỉ cụ thể"
            isV3="true"
            height="40"
          ></Textfield>
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
            <button class="pri-btn nor-btn" @click="updateProfile(this.userId)">
              Lưu
            </button>
          </div>
          <div class="flex-row jc-sb w-100">
            <h2>Tài khoản ngân hàng của tôi</h2>
            <a href="/profile">
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
import UserService from "@/views/userServices";
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
      userInfo: {
        name: "",
        nickname: "",
        email: "",
        phone_number: "",
        province: "",
        district: "",
        ward: "",
        address: "",
        dob: "2024-04-24T23:33:27.609Z",
      },
      isReadonly: true,
      userId: "",
    };
  },
  mounted() {
    // Gọi hàm fetchUserInfo khi component được mounted
    this.fetchUserInfo();
    this.userId = localStorage.getItem("id");
  },
  methods: {
    openFileInput() {
      // Khi người dùng nhấp vào nút 'Chọn ảnh', kích hoạt input type="file"
      this.$refs.fileInput.click();
    },
    handleImageChange(event) {
      var avaDef = document.getElementById("avaDefault");
      var newAva = document.getElementById("newAva");
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
    async fetchUserInfo() {
      // Kiểm tra xem có jwt trong localStorage không
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        const id = localStorage.getItem("id");
        const res = await UserService.getUserById(id);
        console.log(res);
        this.userInfo.name = res.data.name;
        this.userInfo.nickname = res.data.nickname;
        this.userInfo.email = res.data.email;
        this.userInfo.phone_number = res.data.phone_Number;
        this.userInfo.province = res.data.province;
        this.userInfo.ward = res.data.ward;
        this.userInfo.address = res.data.address;
        this.userInfo.dob = res.data.dob;
      }
    },
    updateProfile(userId) {
      const updatedUser = {
        name: this.userInfo.name,
        nickname: this.userInfo.nickname,
        email: this.userInfo.email,
        phone_number: this.userInfo.phone_number,
        province: this.userInfo.province,
        district: this.userInfo.district,
        ward: this.userInfo.ward,
        address: this.userInfo.address,
        dob: "2024-04-24T23:36:35.207Z",
        gender: this.userInfo.gender,
      };
      UserService.updateUser(userId, updatedUser)
        .then((response) => {
          console.log(response.data);
          console.log("Cập nhật thông tin thành công");
          console.log(this.userInfo);
        })
        .catch((error) => {
          console.error(error);
          // Xử lý khi có lỗi xảy ra
        });
    },
  },
};
</script>
