<template>
  <div class="flex-column" style="position: relative">
    <Popup
      v-if="this.regisErr == true"
      :title="this.popup.title"
      :content="this.popup.content"
      :btn="this.popup.btn"
      :success="this.popup.success"
      @close="this.closePopup"
      @action="this.loginUser"
    ></Popup>
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
          <div
            class="login-textfield flex-column"
            style="margin: 0; gap: 12px; width: 340px"
          >
            <div class="register-title">Bạn là (*)</div>
            <div class="flex-row" style="gap: 80px">
              <div class="input-radio" style="color: #787878">
                <input type="radio" name="account-type" id="" checked /> Cá nhân
              </div>
              <div class="input-radio" style="color: #787878">
                <input type="radio" name="account-type" id="" /> Shop
              </div>
            </div>
          </div>
          <button class="login-button flex-row" @click="registerUser()">
            TẠO TÀI KHOẢN
          </button>
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
import Popup from "@/components/Popup/index.vue";
import LoginService from "@/views/loginServices.js";
import { useRouter } from "vue-router";

const Register = {
  data() {
    return {
      formRegis: {
        Name: "",
        Nickname: "",
        PhoneNumber: "",
        Password: "",
      },
      popup: {
        title: "",
        content: "",
        btn: "",
        success: false,
      },
      regisErr: false,
    };
  },
  components: {
    Popup,
    Footer,
  },
  setup() {
    const router = useRouter();
    const redirectToProfile = () => {
      router.push({ path: "/profile" });
    };
    return {
      redirectToProfile,
    };
  },
  methods: {
    async registerUser() {
      if (
        this.formRegis.Name == "" ||
        this.formRegis.Nickname == "" ||
        this.formRegis.PhoneNumber == "" ||
        this.formRegis.Password == "" ||
        this.formRegis.Name == null ||
        this.formRegis.Nickname == null ||
        this.formRegis.PhoneNumber == null ||
        this.formRegis.Password == null
      ) {
        this.popup.btn = "Đóng";
        this.popup.title = "Thất bại";
        this.popup.content = "Thông tin đăng ký không được để trống.";
        this.popup.success = false;
        this.regisErr = true;
      } else {
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
        var raw = JSON.stringify(userRegis);
        console.log(raw);
        // console.log(UserService.getUser());
        await UserService.registerUser(raw).then(() => {
          this.popup.btn = "Tiếp tục";
          this.popup.title = "Thành công";
          this.popup.content =
            "Đăng kí tài khoản thành công. Chào mừng đến với 2Reli.";
          this.popup.success = true;
          this.regisErr = true;
        });
      }
    },
    closePopup() {
      this.regisErr = false;
    },
    async loginUser() {
      const loginDataSubmit = {
        nickname: this.formRegis.Nickname,
        password: this.formRegis.Password,
      };
      const res = await LoginService.loginSubmit(loginDataSubmit);
      console.log("Đăng nhập thành công");
      console.log(res.data);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("nickname", res.data.nickname);
      localStorage.setItem("jwt", res.data.jwt);
      this.redirectToProfile();
    },
  },
};
export default Register;
</script>
<style></style>
