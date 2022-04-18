<template>
  <button
    :disabled="check"
    class="
      w-100
      py-2
      d-flex
      justify-content-center
      border-0
      rounded
      algin-items-center
      text-white
    "
    :class="check ? '' : ''"
    :data-name="name"
    @click="submitData()"
  ></button>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {
      check: false,
    };
  },
  emits:["submit"],
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  methods: {
    submitData() {
      this.check = !this.check;
    },
  },
};
</script>
<style scoped>
button {
  background-color: var(--primary);
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: #238a91d1;
}
button:hover,
button:disabled , button.check {
  background-color: #238a91d1;
}
button::after {
  content: attr(data-name);
}
button:disabled:after, button.check:after {
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