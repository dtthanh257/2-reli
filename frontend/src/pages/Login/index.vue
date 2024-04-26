<template>
  <div class="flex-column">
    <div class="login-header flex-row">
      <div class="header-logo"></div>
    </div>
    <div class="login-page r-flex">
      <div class="login-container">
        <div class="login-logo"></div>
        <div class="login-put flex-column">
          <h2>Đăng nhập</h2>
          <div class="login-textfield flex-column">
            <input
              v-model="LoginData.username"
              type="text"
              placeholder="Email/Số điện thoại/Tên đăng nhập"
            />

            <input
              v-model="LoginData.password"
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div class="login-button flex-row" @click="submitLogin">
            ĐĂNG NHẬP
          </div>
          <div class="flex-row login-way">
            <a href="">Quên mật khẩu</a>
            <a href="">Đăng nhập với SMS</a>
          </div>
          <div class="flex-row login-devider"></div>
          <div class="link-to-regis">
            Bạn mới biết đến 2Reli? <a href="/register">Đăng ký</a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer/index.vue";
import LoginService from "@/views/loginServices.js";
import { useRouter } from "vue-router";
const Login = {
  components: {
    Footer,
  },
  data() {
    return {
      LoginData: {
        username: "",
        password: "",
      },
    };
  },
  setup() {
    const router = useRouter();
    const redirectToHome = () => {
      router.push({ path: "/home" });
    };
    return {
      redirectToHome,
    };
  },
  methods: {
    async submitLogin() {
      const loginDataSubmit = {
        nickname: this.LoginData.username,
        password: this.LoginData.password,
      };

      try {
        const res = await LoginService.loginSubmit(loginDataSubmit);
        console.log("Đăng nhập thành công");
        console.log(res.data);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("nickname", res.data.nickname);
        localStorage.setItem("jwt", res.data.jwt);
        this.redirectToHome();
      } catch (error) {
        console.error("Đăng nhập thất bại:", error);
      }
    },
  },
};
export default Login;
</script>
<style></style>
