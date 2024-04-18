<template>
  <div class="flex-column">
    <div class="login-header flex-row">
      <div class="header-logo"></div>
    </div>
    <div class="login-page r-flex">
      <div class="login-container">
        <div class="login-logo"></div>
        <div class="login-put flex-column">
          <h2>Đăng ký</h2>
          <div class="login-textfield flex-column">
            <input type="text" placeholder="Số điện thoại" />
          </div>
          <button class="login-button flex-row">ĐĂNG NHẬP</button>
          <!-- <div class="flex-row login-way">
          <a href="">Quên mật khẩu</a>
          <a href="">Đăng nhập với SMS</a>
        </div> -->
          <div class="flex-row login-devider">
            <div class="hr-line"></div>
            <span>HOẶC</span>
            <div class="hr-line"></div>
          </div>
          <div class="flex-row login-with">
            <button class="login-with-fb"></button>
            <button class="login-with-gg"></button>
          </div>
          <div class="link-to-policy">
            Bằng việc đăng kí, bạn đã đồng ý với 2Reli về
            <a href="">Điều khoản & Chính sách</a>
          </div>
          <div class="link-to-login">
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
const Register = {
  components: {
    Footer,
  },
};
export default Register;
</script>
<style></style>
