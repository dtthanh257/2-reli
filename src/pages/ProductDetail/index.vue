<template>
  <div class="product-detail">
    <Navbar></Navbar>
    <div class="grid-12">
      <div class="home-cate"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer/index.vue";
import Navbar from "@/components/Navbar/index.vue";
export default {
  name: "ProductDetail",
  components: {
    Footer,
    Navbar,
  },
};
</script>
