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
      style="color: black"
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
        @input="emitInputValue"
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
    <div
      class="combobox-dropdown"
      v-show="isDropdownVisible"
      :style="{ 'max-height': dropdownMaxHeight }"
      ref="dropdown"
    >
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
      dropdownMaxHeight: "auto",
    };
  },

  props: {
    items: {
      type: Array,
      fetchValue: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    fetchValue: {
      type: String,
      default: "",
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
  watch: {
    fetchValue(newValue) {
      this.inputValue = newValue; // Theo dõi sự thay đổi của fetchValue từ props và cập nhật vào biến local inputValue
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdownOnClickOutside);
    this.inputValue = this.fetchValue;
    this.$emit("fetch-data", this.inputValue);
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
      console.log(this.items);
      console.log(this.isDropdownVisible);
      this.$nextTick(() => {
        const dropdownHeight = this.$refs.dropdown.clientHeight;
        if (dropdownHeight > 120) {
          this.dropdownMaxHeight = "244px";
        } else {
          this.dropdownMaxHeight = "auto";
        }
      });
    },

    closeDropdownOnClickOutside(event) {
      if (!this.$refs.comboBox.contains(event.target)) {
        this.isDropdownVisible = false;
      }
    },
    onSelected(item) {
      this.inputValue = item.name;
      this.isDropdownVisible = false;
      this.$emit("input-value-changed", this.inputValue);
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

<style scoped>
.combobox-dropdown {
  overflow-y: auto;
}
</style>
