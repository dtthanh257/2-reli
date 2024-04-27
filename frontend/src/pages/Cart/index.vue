<template>
  <div>
    <Navbar></Navbar>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/Footer/index.vue";
import Navbar from "../../components/Navbar/index.vue";
const Cart = {
  components: {
    Footer,
    Navbar,
  },
  props: {
    id: {
      type: Number,
    },
  },
};
export default Cart;
</script>
