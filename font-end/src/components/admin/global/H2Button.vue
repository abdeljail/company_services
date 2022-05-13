<template>
  <b-container>
    <div class="py-4 d-flex justify-content-between">
      <div>
        <h2 class="text-capitalize">{{ heading }}</h2>
      </div>
      <div v-if="objLink" instanceof Object>
        <router-link
          class="btn link text-capitalize text-white"
          :to="objLink.pathLink"
          >{{ objLink.nameLink }}</router-link
        >
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "H2Button",
  data() {
    return {};
  },
  props: {
    heading: {
      type: String,
      require: true,
    },
    objLink: {
      nameLink: {
        type: String,
        require: true,
      },
      pathLink: {
        type: String,
        require: true,
      },
      default: null,
    },
  },
};
</script>
<style>
.link {
  background-color: var(--second) !important;
}
</style>