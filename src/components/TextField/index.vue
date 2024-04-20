<template>
  <div class="flex-column text-field" :class="{ 'textfield-v3': isV3 }">
    <label
      :class="{ 'textfield-label-v2': isV2, 'textfield-lable-v3': isV3 }"
      >{{ label }}</label
    >
    <div class="flex-row gap-20" style="align-items: center; width: 100%">
      <input
        type="text"
        :class="{ 'textfield-input-v2': isV2, 'textfield-input-v3': isV3 }"
        :placeholder="placeholder"
        :style="{ height: height + 'px', width: width + '%' }"
      />
      <div class="vnd" v-if="width == 50">VNĐ</div>
    </div>
  </div>
</template>
<script>
const Textfield = {
  props: {
    label: String,
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 30,
    },
    placeholder: {
      type: String,
      default: "",
    },
    isV2: {
      type: Boolean,
      default: false,
    },
    isV3: {
      type: Boolean,
      default: false,
    },
  },
};
export default Textfield;
</script>
