<template>
  <div id="app">
    <Header v-if="$route.meta.header === 1" />
    <HeaderAdmin
      :updateShowAside="updateShowAside"
      @showAside="showAside"
      v-if="$route.meta.header === 2"
    />
    <div
      :class="[
        $route.meta.header === 2 ? 'content-router-aside d-flex' : '',
        !isShowAside ? 'active' : '',
      ]"
    >
      <Aside v-if="$route.meta.header === 2" class="content-aside aside-show" />
      <div
        :class="$route.meta.header === 2 ? 'content-router router-w-100' : ''"
      >
        <router-view />
      </div>
    </div>
    <Footer v-if="$route.meta.header === 1" />
    <div
      id="model"
      class="model position-fixed top-0 start-0 end-0 bottom-0"
    ></div>
  </div>
</template>
<script>
import Header from "@/components/global/Header.vue";
import HeaderAdmin from "@/components/admin/global/Header.vue";
import Aside from "@/components/admin/global/Aside.vue";
import Footer from "@/components/global/Footer.vue";
export default {
  data() {
    return {
      logoImg: require("@/assets/images/logo.png"),
      isShowAside: false,
    };
  },
  created() {},
  mounted() {},
  components: {
    Header,
    HeaderAdmin,
    Aside,
    Footer,
  },
  provide() {
    return {
      logoImage: this.logoImg,
    };
  },
  methods: {
    showAside() {
      this.isShowAside = !this.isShowAside;
    },
  },
  computed: {
    updateShowAside() {
      return this.isShowAside;
    },
  },
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
.content-router-aside > div:last-child {
  height: 100vh;
}
.content-router-aside > div:last-child {
  flex-grow: 1.5;
}

.content-router-aside.active .aside-show {
  position: absolute !important;
  left: -300px;
}

.content-router-aside.active .router-w-100 {
  width: 100%;
}
.model {
  background-color: #0e314c70;
  z-index: -1;
  transition: 0.2s ease-in;
  opacity: 0;
}
.overly {
  opacity: 1;
  z-index: 10;
}
</style>
