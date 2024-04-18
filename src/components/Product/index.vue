/* eslint-disable */
<template>
  <div class="product">
    <img :src="thumbnail" alt="Product Thumbnail" />
    <h3>{{ name }}</h3>
    <p>{{ price }}</p>
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
  },
};
export default Product;
</script>
