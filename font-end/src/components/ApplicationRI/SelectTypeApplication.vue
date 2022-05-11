<template>
  <div
    class="
      content-application-r-i
      d-flex
      align-items-center
      m-auto
      flex-wrap
      justify-content-between
    "
  >
    <div
      @click="send($event)"
      data-application="employment"
      tabindex="0"
      role="button"
      class="employment overflow-hidden text-center bg-white rounded"
    >
      <h3 class="p-3 bg-light">employment</h3>
      <div class="">
        <img
          :src="require('@/assets/images/job.png')"
          alt="images internship "
        />
      </div>
      <span class="p-2 bg-light text-uppercase d-block">next</span>
    </div>
    <div
      @click="send($event)"
      data-application="internship"
      tabindex="0"
      role="button"
      class="internships overflow-hidden text-center bg-white rounded"
    >
      <h3 class="bg-light p-3">internship</h3>
      <div class="">
        <img
          :src="require('@/assets/images/intern.png')"
          alt="images internship "
        />
      </div>
      <span class="p-2 bg-light text-uppercase d-block">next</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectTypeApplication",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    send(e) {
      this.$router.push(
        `/application-r-i/${e.currentTarget.dataset.application}`
      );
    },
  },
};
</script>

<style scoped>
.content-application-r-i {
  min-width: 280px;
  max-width: 500px;
  min-height: 80vh;
}
.content-application-r-i div {
  min-width: 200px;
  max-width: 200px;
  cursor: pointer;
  transition: 0.3s ease;
}
.content-application-r-i > div:hover {
  transform: scale(1.02, 1.02);
  box-shadow: 0 0 20px 1px #000000;
}
.content-application-r-i > div:active,
.content-application-r-i > div:focus {
  box-shadow: 0 0 20px 1px #000000;
}
.content-application-r-i > div:active span,
.content-application-r-i > div:focus span {
  background-color: var(--second) !important;
  color: var(--bc-white);
}
.content-application-r-i > div div img {
  min-width: 200px;
  max-width: 200px;
}
.content-application-r-i > div span {
  color: var(--primary);
  transition: 0.2s ease-in-out;
}
@media (max-width: 400px) {
  .content-application-r-i {
    justify-content: center !important;
  }
}
</style>