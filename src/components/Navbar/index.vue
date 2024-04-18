<template>
  <div class="navbar">
    <div class="flex-row nav-contain">
      <a class="nav-logo" href="/home"></a>
      <div class="nav-search">
        <i class="fa-solid fa-magnifying-glass magnify-glass"></i>
        <input type="text" placeholder="Search" />
        <i class="fa-solid fa-microphone microphone"></i>
      </div>
      <div class="nav-icon flex-row">
        <button class="nav-notif-icon icon"></button>
        <button class="nav-message-icon icon"></button>
        <button class="nav-cart-icon icon"></button>
      </div>
      <div class="nav-activities flex-row">
        <button><span class="per-sell-icon icon"></span>ĐĂNG BÁN</button>
        <button><span class="per-buy-icon icon"></span>THU MUA</button>
        <button><span class="per-collect-icon icon"></span>THU GOM</button>
      </div>
      <div class="nav-acc flex-row">
        <i class="fa-regular fa-circle-user" style="font-size: 24px"></i>
        <span>Tài khoản</span>
        <i class="fa-solid fa-angle-down"></i>
        <AccDroplist></AccDroplist>
      </div>
      <div class="flex-row nav-about">
        <a href="/about">Về 2Reli</a>
        <a href="">Hỗ trợ & chính sách</a>
      </div>
    </div>
  </div>
</template>
<script>
import AccDroplist from "../AccountDroplist/index.vue";
const Navbar = {
  components: {
    AccDroplist,
  },
};
export default Navbar;
</script>
