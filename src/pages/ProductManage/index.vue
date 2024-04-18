<template>
  <div>
    <Navbar> </Navbar>
    <div class="grid-12" style="background-color: #f2f2f3">
      <div class="product-manage-contain home-cate">
        <div class="product-manage-acti flex-row">
          <div
            class="product-manage-acti-buy flex-row"
            :class="{ 'product-manage-acti--istrue': actiBuy }"
            @click="toggleActiBuy"
          >
            Đơn mua
          </div>
          <div
            class="product-manage-acti-sell flex-row"
            :class="{ 'product-manage-acti--istrue': actiSell }"
            @click="toggleActiSell"
          >
            Đơn bán
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Footer from "@/components/Footer/index.vue";
export default {
  name: "ProductManage",
  data() {
    return {
      actiBuy: false,
      actiSell: false,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    toggleActiBuy() {
      this.actiBuy = !this.actiBuy;
      this.actiSell = false; // Đảm bảo chỉ có một trong hai trạng thái được kích hoạt
    },
    toggleActiSell() {
      this.actiSell = !this.actiSell;
      this.actiBuy = false; // Đảm bảo chỉ có một trong hai trạng thái được kích hoạt
    },
  },
};
</script>
