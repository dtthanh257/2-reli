/* eslint-disable */
<template>
  <div class="product">
    <router-link style="width: 100%" :to="'/productdetail/' + productId">
      <img
        style="object-fit: cover"
        :src="thumbnailUrl"
        alt="Product Thumbnail"
      />
      <h3 style="font-weight: 500">{{ name }}</h3>
      <div v-if="product_quantity == 0" class="blur-bg"></div>
      <div v-if="product_quantity == 0" class="sold-out"></div>
      <p>{{ price }}</p>
    </router-link>
  </div>
</template>

<script>
import ProductService from "@/views/productServices";

const Product = {
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    product_quantity: {
      type: Number,
    },
  },
  data() {
    return {
      thumbnailUrl: null,
    };
  },
  async mounted() {
    await this.fetchThumbnail();
  },
  methods: {
    async fetchThumbnail() {
      const res = await ProductService.getProductThumbnail(this.productId);
      console.log(res.data);
      console.log("id sản phẩm:" + this.productId);
      this.thumbnailUrl = res.data;
    },
  },
};
export default Product;
</script>
