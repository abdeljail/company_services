<template>
  <div id="app">
    <Header v-if="$route.meta.header != 0" />
    <router-view />
    <Footer v-if="$route.meta.header != 0" />
  </div>
</template>
<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
export default {
  data() {
    return {
      logoImg: require("@/assets/images/logo.png"),
    };
  },
  created() {},
  mounted() {
    console.log(process.env.VUE_APP_NOT_SECRET_CODE);
  },
  components: {
    Header,
    Footer,
  },
  provide() {
    return {
      logoImage: this.logoImg,
    };
  },
  methods: {},
};
</script>
<style>
@import url("http://fonts.cdnfonts.com/css/cubano");
:root {
  --primary: #238a91;
  --second: #0e314c;
  --bc-white: #ffffff;
  --bc-hover-link: #238a9133;
  --cl-paragraph: #454e56;
  --font-link: "Cubano", sans-serif;
  --font-paragraph: Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  user-select: none;
}
.logo-image {
  width: 60px;
  height: 60px;
}
</style>
