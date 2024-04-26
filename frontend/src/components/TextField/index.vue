<template>
  <div class="flex-column text-field" :class="{ 'textfield-v3': isV3 }">
    <label
      :class="{ 'textfield-label-v2': isV2, 'textfield-lable-v3': isV3 }"
      >{{ label }}</label
    >
    <div class="flex-row gap-20" style="align-items: center; width: 100%">
      <input
        v-if="readOnly"
        type="text"
        :class="{ 'textfield-input-v2': isV2, 'textfield-input-v3': isV3 }"
        :placeholder="placeholder"
        :readonly="isReadOnly"
        v-model="inputValue"
        :style="{
          height: height + 'px',
          width: width + '%',
          'padding-bottom': pb + 'px',
        }"
      />
      <input
        type="text"
        :class="{ 'textfield-input-v2': isV2, 'textfield-input-v3': isV3 }"
        :placeholder="placeholder"
        :readonly="isReadOnly"
        v-model="inputValue"
        :style="{
          height: height + 'px',
          width: width + '%',
          'padding-bottom': pb + 'px',
        }"
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
    pb: {
      type: Number,
      default: 0,
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
    isReadOnly: {
      type: Boolean,
      default: false,
    },
    readOnlyValue: {
      type: String,
      default: "",
    },
    input: String,
  },
  computed: {
    inputValue: {
      get() {
        return this.input;
      },
      set(value) {
        // some logic
        this.$emit("update:input", value);
      },
    },
  },
};

export default Textfield;
</script>
