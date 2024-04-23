/* eslint-disable */
<template>
  <div class="product">
    <router-link :to="'/productdetail/' + productId">
      <img :src="thumbnail" alt="Product Thumbnail" />
      <h3>{{ name }}</h3>
      <p>{{ price }}</p>
    </router-link>
  </div>
</template>

<script>
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
};
export default Product;
</script>
