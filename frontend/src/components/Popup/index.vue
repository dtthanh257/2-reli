<template>
  <div class="popup">
    <div class="popup-container flex-column" style="align-items: start">
      <div
        class="popup-title"
        v-if="!success"
        style="color: red; font-weight: 500"
      >
        <div class="popup-icon-err"></div>
        {{ title }}
      </div>
      <div class="popup-title" v-else style="color: #059e6f; font-weight: 500">
        <div class="popup-icon-success"></div>
        {{ title }}
      </div>
      <div class="popup-content">
        {{ content }}
      </div>
      <div
        v-if="!success"
        style="display: flex; width: 100%; justify-content: end"
      >
        <button
          class="popup-button"
          @click="closePopup"
          style="border: 1px solid red"
        >
          {{ btn }}
        </button>
      </div>
      <div v-else style="display: flex; width: 100%; justify-content: end">
        <button
          class="popup-button"
          @click="loginAcc"
          style="border: 1px solid #059e6f"
        >
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
const Popup = {
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    btn: {
      type: String,
      default: "",
    },
    success: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closePopup() {
      // Gọi sự kiện để thông báo cho component cha rằng popup cần được đóng
      this.$emit("close");
    },
    loginAcc() {
      this.$emit("login");
    },
  },
};
export default Popup;
</script>
