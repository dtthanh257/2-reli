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
        <a href="/postforsale"
          ><span class="per-sell-icon icon"></span>ĐĂNG BÁN</a
        >
        <a href="/procurement"
          ><span class="per-buy-icon icon"></span>THU MUA</a
        >
        <a href="/collect"
          ><span class="per-collect-icon icon"></span>THU GOM</a
        >
      </div>
      <div class="nav-acc flex-row">
        <i class="fa-regular fa-circle-user" style="font-size: 24px"></i>
        <span style="white-space: nowrap">{{ account }}</span>
        <i class="fa-solid fa-angle-down"></i>
        <AccDroplist></AccDroplist>
        <!-- <div class="acc-droplist flex-column">
          <a href="/profile" style="white-space: nowrap">Tài khoản của tôi</a>
          <a href="/login">Đăng xuất</a>
        </div> -->
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
import { ref, onMounted } from "vue"; // Import các hàm từ Vue 3

const Navbar = {
  components: {
    AccDroplist,
  },
  setup() {
    // Sử dụng ref để tạo một biến có thể thay đổi
    const account = ref("Tài khoản");

    // Kiểm tra JWT trong localStorage và gán giá trị cho biến account khi cần thiết
    const checkJWT = () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        const username = localStorage.getItem("nickname");
        account.value = username;
      }
    };

    // Sử dụng hàm onMounted để gọi hàm checkJWT khi component được mount
    onMounted(() => {
      checkJWT();
    });

    // Trả về biến account để sử dụng trong template
    return {
      account,
    };
  },
};
export default Navbar;
</script>
