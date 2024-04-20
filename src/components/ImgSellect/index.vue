<template>
  <div class="product-img-select">
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      style="display: none"
    />
    <img
      id="defaultImg"
      src="../../../public/img/icons/post-for-sale-img-icon.png"
    />
    <img id="newImg" :src="imageUrl" alt="" style="display: none" />
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
  methods: {
    handleFileChange(event) {
      var defaultImg = document.getElementById("defaultImg");
      var newImg = document.getElementById("newImg");
      const file = event.target.files[0];
      if (file) {
        defaultImg.style.display = "none";
        newImg.style.display = "block";
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
