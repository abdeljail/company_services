<template>
  <div class="">
    <input
      :class="[errText ? '' : 'input-err', name === 'Last' ? 'my-3' : '']"
      class="px-2 font-14 py-3 rounded w-100 border"
      type="text"
      :name="name"
      :placeholder="`${name} name `"
      :ref="name"
    />
  </div>
</template>
<script>
export default {
  name: "Text",
  data() {
    return {};
  },
  props: {
    errText: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  created() {},
};
</script>
<style>
</style>