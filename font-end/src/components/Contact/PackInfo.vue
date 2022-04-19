<template>
  <div
    class="
      d-flex
      flex-column
      justify-content-evenly
      align-items-center
      bg-white
      p-3
      rounded
      border
    "
  >
    <span class="">
      <svg
        v-html="iconClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      ></svg>
    </span>
    <h3 class="m-0">{{ nameInfo }}</h3>
    <p class="m-0">{{ paragraphInfo }}</p>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    iconClass: {
      type: String,
      require: true,
    },
    nameInfo: {
      type: String,
      require: true,
    },
    paragraphInfo: {
      type: String,
      require: true,
    },
  },
};
</script>
<style scoped>
div {
  height: 200px;
  transition: border 0.2s ease-in, box-shadow 0.1s 0.2s ease-in;
}
div:hover {
  border-color: var(--primary) !important;
  box-shadow: 0 0 17px 0.5px #238a914d;
}
span svg {
  width: 40px;
}
h3 {
  font-size: 18px;
  color: var(--second);
}
p {
  font-size: 15px;
  color: var(--cl-paragraph);
}
</style>
