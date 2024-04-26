<template>
  <div
    class="combo-box flex-column"
    ref="comboBox"
    :class="{ comboboxv3: isV3 }"
  >
    <label
      for=""
      class="combobox-label"
      :class="{
        'comboboxv2-input-label': isV2,
        'comboboxv3-input-label': isV3,
      }"
      >{{ label }}</label
    >
    <div
      class="combobox-input-container"
      :class="{
        'comboboxv2-input-container': isV2,
        'comboboxv3-input-container': isV3,
      }"
      :style="{ width: width + 'px' }"
    >
      <input
        type="text"
        class="combobox-input"
        @click="toggleDropdown"
        v-model="inputValue"
      />
      <div
        class="combobox-input-icon"
        @click="toggleDropdown"
        :class="{ 'comboboxv3-input-icon': isV3 }"
      >
        <i
          class="fa-solid fa-chevron-down"
          :class="{
            'combobox-input-icon--active': isDropdownVisible,
            'combobox-input-icon--active-false': !isDropdownVisible,
          }"
        ></i>
      </div>
    </div>
    <div class="combobox-dropdown" v-show="isDropdownVisible">
      <div
        v-for="item in items"
        :key="item.id"
        class="combobox-dropdown-item"
        @click="onSelected(item)"
        :style="{ width: width + 'px' }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComboBox",
  data() {
    return {
      isDropdownVisible: false,
      inputValue: null,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    isV2: {
      type: Boolean,
      default: false,
    },
    isV3: {
      type: Boolean,
      default: false,
    },
    width: Number,
  },
  // computed: {
  //   computedInputValue: {
  //     get() {
  //       return this.input;
  //     },
  //     set(value) {
  //       // some logic
  //       this.$emit("update:input", value);
  //     },
  //   },
  // },
  mounted() {
    document.addEventListener("click", this.closeDropdownOnClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
      console.log(this.items);
      console.log(this.isDropdownVisible);
    },

    closeDropdownOnClickOutside(event) {
      if (!this.$refs.comboBox.contains(event.target)) {
        this.isDropdownVisible = false;
      }
    },
    onSelected(item) {
      this.inputValue = item.name;
      this.isDropdownVisible = false;
    },
    onFocus() {
      this.isDropdownVisible = true;
    },
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdownOnClickOutside);
  },
};
</script>

<style scoped></style>
