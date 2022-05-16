<template>
  <div class="d-flex pb-5 links justify-content-end">
    <router-link
      :to="$attrs['link']"
      class="px-4 py-2 text-white text-decoration-none rounded text-capitalize"
      >{{ $attrs["name"] }}
    </router-link>
  </div>
</template>
<script>
export default {
  name: "LinkChangeM",
  data() {
    return {};
  },
};
</script>
<style scoped>
.links a {
  background-color: var(--primary);
  margin-top: -20px;
}
</style>