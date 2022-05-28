<template>
  <footer class="mt-5 border-top">
    <b-container>
      <Language />
    </b-container>
  </footer>
</template>

<script>
import Language from "@/components/global/Language.vue";
export default {
  name: "Footer",
  data() {
    return {};
  },
  components: {
    Language,
  },
};
</script>

<style>
</style>