<template>
  <div class="text-area">
    <label v-if="label">{{ label }}</label>
    <textarea
      v-model="inputValue"
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
    textareaInput: {
      type: String,
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
        this.$emit("update:name1", value);
      },
    },
  },
  methods: {
    // updateValue(value) {
    //   this.$emit("update:textareaInput", value); // Gửi giá trị mới lên component cha thông qua sự kiện
    // },
  },
};
export default Textarea;
</script>
