import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactUs from "../views/CantactUs.vue"
import Skills from "../views/Skills.vue"
import TrainingOffer from "../views/TrainingOffer.vue"
import SinIn from "../views/SingIn.vue"
import SingUp from "../views/SingUp.vue"
import WhoAreWe from "../views/WhoAreWe.vue"
import ApplicationRI from "../views/ApplicationRI.vue"
import RespanseApplication from "../components/ApplicationRI/RespanseApplication.vue";
import SelectTypeApplication from "../components/ApplicationRI/SelectTypeApplication.vue"
import UploadCv from "../components/ApplicationRI/UploadCv.vue"
import AdminSingIn from "../admin/SingIn.vue"
import Dachboard from "../admin/Dach.vue"
import AddedCategory from "../admin/AddedCategory.vue"
import ManagementCategories from "../admin/ManagementCategories.vue"

Vue.use(VueRouter);

const routes = [
  //
  //    ===>>   routres dor clients
  // 

  {
    path: "/",
    alias: '/home',
    name: "HomeView",
    component: HomeView,
    meta: {
      header: 1
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      header: 1
    },
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
    meta: {
      header: 1
    },
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
    meta: {
      header: 1
    },
  },
  {
    path: "/training-offer",
    name: "TrainingOffer",
    component: TrainingOffer,
    meta: {
      header: 1
    },
  },
  {
    path: "/who-are-we",
    name: "Who-are-we",
    component: WhoAreWe,
    meta: {
      header: 1
    },
  },
  {
    path: "/application-r-i/",
    name: "ApplicationRI",
    component: ApplicationRI,
    children: [{
      path: '/',
      name: "SelectTypeApplication",
      component: SelectTypeApplication,
      meta: {
        header: 0
      },
    },
    {
      path: "employment",
      name: "Application",
      component: UploadCv,
      props: route => ({
        name: route.path
      }),
      meta: {
        header: 0
      },

    },
    {
      path: "internship",
      name: "Application",
      component: UploadCv,
      meta: {
        header: 0
      },

    }
    ],
  },
  {
    path: "/respanse-application/",
    name: "RespanseApplication",
    component: RespanseApplication,
    meta: {
      header: 0
    },
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
  },



  //
  //    ===>>   routres for admin
  // 


  {
    path: "/com-data",
    name: "AdminSingIn",
    component: AdminSingIn,
    meta: {
      header: 0

    }
  },
  {
    path: "/dachboard",
    name: "Dachboard",
    component: Dachboard,
    meta: {
      header: 2

    }
  },
  {
    path: "/added-category",
    name: "AddedCategory",
    component: AddedCategory,
    meta: {
      header: 2
    }
  },
  {
    path: "/management-categories",
    name: "ManagementCategories",
    component: ManagementCategories,
    meta: {
      header: 2,
    }
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;