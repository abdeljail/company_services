<template>
  <div
    class="
      py-3
      d-flex
      align-items-center
      justify-content-center
      show-more-category
      bg-light
    "
  >
    <button
      data-loading="show more"
      :disabled="$attrs['loading']"
      :class="$attrs['loading'] ? 'loading' : ''"
      @click="$emit('show', $attrs['data-number-show'])"
      class="
        d-flex
        align-items-center
        justify-content-center
        text-capitalize text-white
        border-0
        btn
      "
    ></button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
button {
  box-shadow: none !important;
}
button {
  background-color: var(--primary);
  width: 150px;
}
button::after {
  content: attr(data-loading);
}
button:disabled:after,
button.loading:after {
  display: block;
  content: "";
  border: 6px solid #eee;
  animation: loding 1s linear infinite;
  border-bottom-color: var(--second);
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
@keyframes loding {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>