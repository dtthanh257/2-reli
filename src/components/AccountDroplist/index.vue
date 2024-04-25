<template>
  <div class="acc-droplist flex-column">
    <template v-if="isLoggedIn">
      <a href="/profile">Tài khoản của tôi</a>
      <a href="/login" @click="logout">Đăng xuất</a>
    </template>
    <template v-else>
      <a href="/register">Đăng ký</a>
      <a href="/login">Đăng nhập</a>
    </template>
  </div>
</template>

<script>
import { computed } from "vue";

const useLocalStorage = () => {
  const jwt = computed(() => localStorage.getItem("jwt"));

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return { jwt, clearLocalStorage };
};

const AccDroplist = {
  setup() {
    const { jwt } = useLocalStorage();

    const isLoggedIn = computed(() => {
      return !!jwt.value; // Trả về true nếu jwt có giá trị, ngược lại trả về false
    });

    const logout = () => {
      localStorage.removeItem("jwt"); // Xóa jwt khỏi localStorage
    };

    return { isLoggedIn, logout };
  },
};

export default AccDroplist;
</script>
