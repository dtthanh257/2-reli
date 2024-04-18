<template>
  <div style="background-color: #f2f2f3">
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
      <div
        id="donmuaTrue"
        class="flex-column home-cate gap-20"
        style="margin-bottom: 40px"
      >
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div id="donbanTrue" class="flex-column home-cate gap-20">
        <div class="flex-row reli-acti">
          <button
            class="reli-acti-dangban"
            :class="{ isTrue: dangban }"
            @click="toggleDanBan"
          >
            Đăng bán
          </button>
          <button
            class="reli-acti-thumua"
            :class="{ isTrue: thumua }"
            @click="toggleThuMua"
          >
            Thu mua
          </button>
          <button
            class="reli-acti-thugom"
            :class="{ isTrue: thugom }"
            @click="toggleThuGom"
          >
            Thu gom
          </button>
        </div>
        <div id="dangbanTrue">
          <ProductCard buttonLabel="Xác nhận"></ProductCard>
          <ProductCard buttonLabel="Đã chuẩn bị hàng"></ProductCard>
          <ProductCard buttonLabel="Giao hàng thành công"></ProductCard>
        </div>
      </div>
    </div>
    <div class="grid-12"></div>
    <Footer
      style="background-color: #f2f2f3; margin-bottom: 0; padding-bottom: 128px"
    ></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Footer from "@/components/Footer/index.vue";
import ProductCard from "@/components/ProductCard/index.vue";
export default {
  name: "ProductManage",
  data() {
    return {
      actiBuy: true,
      actiSell: false,
      dangban: true,
      thumua: false,
      thugom: false,
      donmua: null,
      donban: null,
      dangbanTrue: null,
    };
  },
  components: {
    Navbar,
    Footer,
    ProductCard,
  },
  mounted() {
    this.donmua = document.querySelector("#donmuaTrue");
    this.donban = document.querySelector("#donbanTrue");
    this.dangbanTrue = document.querySelector("#dangbanTrue");
  },
  methods: {
    toggleActiBuy() {
      this.actiBuy = !this.actiBuy;
      this.actiSell = false;
      if (this.actiBuy == true) {
        console.log(this.donmua);
        this.donmua.style.display = "flex";
        this.donban.style.display = "none";
      } else {
        this.donmua.style.display = "none";
        this.donban.style.display = "flex";
      }
    },
    toggleActiSell() {
      this.actiSell = !this.actiSell;
      this.actiBuy = false;
      console.log(this.dangban);
      if (this.actiBuy == true) {
        this.donmua.style.display = "flex";
        this.donban.style.display = "none";
      } else {
        this.donmua.style.display = "none";
        this.donban.style.display = "flex";
      }
    },
    toggleDanBan() {
      this.dangban = true;
      this.thumua = false;
      this.thugom = false;
      if (this.dangban == true) {
        this.dangbanTrue.style.display = "block";
      }
    },
    toggleThuMua() {
      this.thumua = true;
      this.dangban = false;
      this.thugom = false;
      if (this.thumua == true) {
        this.dangbanTrue.style.display = "none";
      }
    },
    toggleThuGom() {
      this.thugom = true;
      this.dangban = false;
      this.thumua = false;
    },
  },
};
</script>
