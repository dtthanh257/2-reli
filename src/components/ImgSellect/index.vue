<template>
  <div class="product-img-select">
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      style="display: none"
    />
    <img
      :style="{ width: size + 'px', height: size + 'px' }"
      ref="defaultImg"
      class="defaultImg"
      src="../../../public/img/icons/post-for-sale-img-icon.png"
    />
    <img
      :style="{ width: size + 'px', height: size + 'px' }"
      ref="newImg"
      class="newImg"
      :src="imageUrl"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "ImgSelect",
  data() {
    return {
      imageUrl: "../../../public/img/icons/post-for-sale-img-icon.png", // URL của ảnh
    };
  },
  props: {
    size: {
      type: Number,
      default: 90,
    },
  },
  methods: {
    handleFileChange(event) {
      const defaultImg = this.$refs.defaultImg;
      const newImg = this.$refs.newImg;
      defaultImg.style.display = "none";
      newImg.style.display = "block";
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
