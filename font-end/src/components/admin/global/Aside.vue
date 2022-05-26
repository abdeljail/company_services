<template>
  <aside class="aside position-relative aside bg-white">
    <div class="content top-0 start-0 position-sticky">content aside</div>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {};
  },
};
</script>



<style>
aside.aside {
  flex-grow: .3;
  background: rgb(43, 42, 42) !important;
}
aside .content {
  min-height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  background: rgb(236, 236, 236) !important;
  top: 0;
}
</style>