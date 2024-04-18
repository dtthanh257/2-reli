<template>
  <div class="text-area">
    <label v-if="label">{{ label }}</label>
    <textarea
      :placeholder="placeholder"
      :style="{ height: height + 'px' }"
    ></textarea>
  </div>
</template>

<script>
const Textarea = {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    height: {
      type: Number,
      default: 40,
    },
  },
};
export default Textarea;
</script>
