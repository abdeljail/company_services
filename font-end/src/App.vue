<template>
  <div class="position-relative" id="app">
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
</style>
