import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactUs from "../views/CantactUs.vue"
import Skills from "../views/Skills.vue"
import TrainingOffer from "../views/TrainingOffer.vue"
import SinIn from "../views/SingIn.vue"
import SingUp from "../views/SingUp.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/training-offer",
    name: "TrainingOffer",
    component: TrainingOffer
  },
  {
    path: "/sing-in",
    name: "SinIn",
    component: SinIn,
    meta: {
      header: 0
    }
  },
  {
    path: "/sing-up",
    name: SingUp,
    component: SingUp,
    meta: {
      header: 0
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;