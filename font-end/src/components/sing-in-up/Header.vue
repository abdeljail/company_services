<template>
  <header class="pb-3">
    <div class="py-3 text-center">
      <router-link
        class="text-decoration-none text-white px-3 py-2 rounded back-home"
        to="/"
      >
        <img class="logo-image" :src="logoImage" alt="image logo" />
      </router-link>
    </div>
  </header>
</template>

<script>
import Header from "../admin/global/Header.vue";
export default {
  components: { Header },
  name: "Header",
  data() {
    return {};
  },
  inject: ["logoImage"],
};
</script>

<style>
</style>