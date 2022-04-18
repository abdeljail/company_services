<template>
  <div class="position-relative">
    <input
      class="px-2 py-2 w-100 border-0 border-bottom"
      type="email"
      name="email"
      id="email"
      data-name="  "
    />
    <label for="email" class="position-absolute">Address Email</label>
  </div>
</template>
<script>
export default {
  name: "Email",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      require: true,
    },
  },
};
</script>
<style scoped>
input {
  outline: none;
  border-bottom-width: 2px !important;
  border-bottom-color: #747a7a;
}
label {
  font-size: 12px;
  top: 15px;
  left: 15px;
  transition: 0.3s ease-in;
  font-weight: bold;
  cursor: pointer; color: #747a7a;
}
input:focus + label {
  top: -10px;
  left: 10px;
  color: var(--primary);
}
input:focus {
  border-bottom-color: var(--primary) !important;
}
</style>