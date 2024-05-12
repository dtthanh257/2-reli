/* eslint-disable */
<template>
  <div class="product">
    <router-link :to="'/productdetail/' + productId">
      <img
        style="object-fit: cover"
        :src="thumbnailUrl"
        alt="Product Thumbnail"
      />
      <h3 style="font-weight: 500">{{ name }}</h3>
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
