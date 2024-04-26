<template>
  <div class="flex-column">
    <div class="login-header flex-row">
      <div class="header-logo"></div>
    </div>
    <div class="login-page r-flex">
      <div class="login-container">
        <div class="login-logo"></div>
        <div class="login-put flex-column" style="gap: 24px">
          <h2>Đăng ký</h2>
          <div class="login-textfield flex-column" style="margin: 0; gap: 12px">
            <div class="register-title">Số điện thoại (*)</div>
            <input
              type="text"
              placeholder=""
              v-model="this.formRegis.PhoneNumber"
            />
          </div>
          <div class="login-textfield flex-column" style="margin: 0; gap: 12px">
            <div class="register-title">Họ và tên (*)</div>
            <input type="text" placeholder="" v-model="this.formRegis.Name" />
          </div>
          <div class="login-textfield flex-column" style="margin: 0; gap: 12px">
            <div class="register-title">Tên đăng nhập (*)</div>
            <input
              type="text"
              placeholder=""
              v-model="this.formRegis.Nickname"
            />
          </div>
          <div class="login-textfield flex-column" style="margin: 0; gap: 12px">
            <div class="register-title">Mật khẩu (*)</div>
            <input
              type="password"
              style="padding-right: 12px"
              placeholder=""
              v-model="this.formRegis.Password"
            />
          </div>
          <button class="login-button flex-row" @click="registerUser()">
            TẠO TÀI KHOẢN
          </button>
          <!-- <div class="flex-row login-way">
          <a href="">Quên mật khẩu</a>
          <a href="">Đăng nhập với SMS</a>
        </div> -->
          <!-- <div class="flex-row login-devider">
            <div class="hr-line"></div>
            <span>HOẶC</span>
            <div class="hr-line"></div>
          </div>
          <div class="flex-row login-with">
            <button class="login-with-fb"></button>
            <button class="login-with-gg"></button>
          </div> -->
          <div class="link-to-policy" style="margin-top: 12px">
            Bằng việc đăng kí, bạn đã đồng ý với 2Reli về
            <a href="">Điều khoản & Chính sách</a>
          </div>
          <div class="link-to-login" style="margin: 42px; margin-top: 8px">
            Bạn mới biết đến 2Reli? <a href="/login">Đăng nhập</a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer/index.vue";
import UserService from "@/views/userServices.js";
const Register = {
  data() {
    return {
      formRegis: {
        Name: "",
        Nickname: "",
        PhoneNumber: "",
        Password: "",
      },
    };
  },
  components: {
    Footer,
  },
  methods: {
    async registerUser() {
      const userRegis = {
        name: this.formRegis.Name,
        nickname: this.formRegis.Nickname,
        phone_number: this.formRegis.PhoneNumber,
        password: this.formRegis.Password,
        email: "",
        province: "",
        district: "",
        ward: "",
        address: "",
        dob: "2024-04-24T22:11:55.552Z",
        gender: 0,
      };
      console.log("Ấn tạo tài khoản");
      var raw = JSON.stringify(userRegis);
      console.log(raw);
      // console.log(UserService.getUser());
      await UserService.registerUser(raw).then(() => {
        console.log("Đăng ký thành công");
      });
    },
  },
};
export default Register;
</script>
<style></style>
