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
              type="text"
              placeholder="Email/Số điện thoại/Tên đăng nhập"
            />

            <input type="text" placeholder="Mật khẩu" />
          </div>
          <div class="login-button flex-row">ĐĂNG NHẬP</div>
          <div class="flex-row login-way">
            <a href="">Quên mật khẩu</a>
            <a href="">Đăng nhập với SMS</a>
          </div>
          <div class="flex-row login-devider">
            <div class="hr-line"></div>
            <span>HOẶC</span>
            <div class="hr-line"></div>
          </div>
          <div class="flex-row login-with">
            <button class="login-with-fb"></button>
            <button class="login-with-gg"></button>
          </div>
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
const Login = {
  components: {
    Footer,
  },
};
export default Login;
</script>
<style></style>
