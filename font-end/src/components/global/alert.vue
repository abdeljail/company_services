<template>
  <div
    class="
      w-100
      rounded-0
      p-5
      alert
      position-fixed
      top-0
      left-0
      bg-black
      border-radius-0
      text-white
    "
    role="alert"
    :class="objAlert.className ? objAlert.className : ''"
  >
    <b-container>
      <div class="d-flex justify-content-between">
        <div>
          <div
            v-html="objAlert.password !== undefined ? objAlert.password : ''"
          ></div>
          <div
            class
            v-html="objAlert.email !== undefined ? objAlert.email : ''"
          ></div>
        </div>
        <div>
          <span role="button" tabindex="0" @click="$emit('emptyObjAlert')"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              /></svg
          ></span>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Alert",
  date() {
    return {};
  },
  props: {
    objAlert: {
      type: Object,
      require: true,
    },
  },
  created() {},
};
</script>

<style scoped>
span {
  cursor: pointer;
}
span svg {
  width: 20px;
  fill: var(--bc-white);
}
</style>