<template>
  <b-button> </b-button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  props: {},
  created() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
.btn.active,
.btn.active-1 {
  background-color: var(--primary) !important;
  color: #fff !important;
}
.btn {
  border-color: var(--primary);
  border-width: 2px !important;
  background: none !important;
  color: var(--primary) !important;
  transition: 0.3s ease-out;
}
.btn:not(.active):hover {
  background: var(--bc-hover-link) !important;
  border-color: var(--primary);
}
.btn:focus {
  box-shadow: unset !important;
  border-color: var(--primary) !important;
}
</style>