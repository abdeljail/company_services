<template>
  <div class="s-undr-header py-5">
    <b-container>
      <div class="heading">
        <h1 class="text-white">{{ heading }}</h1>
        <p v-if="para">{{ para }}</p>
      </div>
      <div v-if="para" class="from-data">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="py-3 border-end"
            placeholder="Search"
          ></b-form-input>
          <b-button class="border-0 py-3 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
              />
            </svg>
          </b-button>
        </b-nav-form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SectionUnder",
  data() {
    return {};
  },
  props: {
    heading: {
      type: String,
      require: true,
    },
    para: {
      type: String,
    },
  },
};
</script>

<style scoped>
.s-undr-header {
  background-color: var(--second);
  min-height: 294px;
}
form {
  display: flex;
}
form button {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
form input {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
form button svg {
  width: 32px;
  height: 32px;
  color: #ddd;
  fill: var(--second);
}
form button:active,
form button:hover,
form button:focus,
form input:focus {
  background-color: var(--bc-white);
  box-shadow: none !important;
}
</style>