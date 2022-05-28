<template>
  <div class="py-3 border-top mt-4">
    <router-link
      id="a-link"
      class="a-link text-decoration-none text-capitalize d-block rounded a-link"
      :to="path"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ChangePage",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>