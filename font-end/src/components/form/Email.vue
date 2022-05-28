<template>
  <div class="">
    <input
      :class="errEmail ? '' : 'input-err'"
      class="px-2 font-14 py-3 rounded w-100 border"
      type="email"
      name="email"
      id="email"
      placeholder="Address Email"
      ref="email"
    />
  </div>
</template>
<script>
export default {
  name: "Email",
  data() {
    return {
      zfbfb: "",
    };
  },
  props: {
    errEmail: {
      type: Boolean,
      required: true,
    },
  },
  created() {},
};
</script>
<style>
</style>