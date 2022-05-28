<template>
  <button
    :disabled="check"
    class="
      mt-4
      w-100
      py-2
      d-flex
      justify-content-center
      border-0
      rounded
      algin-items-center
      text-white text-capitalize
    "
    :class="check ? '' : ''"
    :data-name="name"
    type="submit"
  ></button>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  emits: ["submit"],
  props: {
    name: {
      type: String,
      require: true,
      default: "send",
    },
    check: {
      type: Boolean,
      require: true,
      default: "send",
    },
  },
  methods: {},
};
</script>
<style scoped>
</style>