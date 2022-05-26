<template>
  <header class="p-2">
    <b-container>
      <div class="nav align-items-center">
        <div class="btn-menu flex-grow-1">
          <button
            @click="$emit('showAside')"
            class="
              rounded-circle
              border-0
              d-flex
              justify-content-center
              align-items-center
            "
            :class="updateShowAside ? 'active' : ''"
            type="button"
          >
            <span class="d-block"></span>
          </button>
        </div>
        <div class="btn-search flex-grow-1">
          <b-nav-form class="">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button class="border-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                />
              </svg>
            </b-button>
          </b-nav-form>
        </div>

        <div class="btn-alert-info flex-grow-1">
          <b-navbar-nav class="align-items-center justify-content-end flex-row">
            <b-nav-item-dropdown class="px-3" right>
              <template #button-content>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
                  />
                </svg>
              </template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template #button-content>
                <img
                  class="rounded-circle border-1"
                  :src="image"
                  :alt="fullName"
                />
              </template>
              <router-link class="text-decoration-none py-2 d-block" to="/">
                <div class="px-2 text-capitalize text-dark">{{ fullName }}</div>
                <div class="px-2 text-secondary">{{ email }}</div>
              </router-link>
              <router-link class="text-decoration-none px-2 py-2 d-block" to="/"
                >Log Out</router-link
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
// import axios from "axios";
export default {
  name: "HeaderAdmin",
  data() {
    return {
      fullName: "",
      email: "",
      image: "",
    };
  },
  props: {
    updateShowAside: {
      type: Boolean,
      require: true,
    },
  },
  created() {
    // axios({
    //   method: "get",
    //   url: "http://localhost:3000/info-admin",
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    {
      if (typeof localStorage.admin === "undefined") {
        return;
      }
      const infoAdmin = JSON.parse(localStorage.admin);
      this.fullName = infoAdmin._name.replace("-", " ");
      this.email = infoAdmin._email;
      this.image = require("../../../assets/images/" + infoAdmin._image);
    }
  },
};
</script>

<style>
header button[type="button"] {
  background: none;
  width: 40px;
  height: 40px;
  transition: 0.1s ease-in-out;
}
header button[type="button"] span {
  width: 32px;
  height: 32px;
  background-image: url("../../../assets/images/menu.png") !important;
  background-repeat: no-repeat;
  transition: 0.2s ease-in-out;
}
header button[type="button"].active {
  background: #297b8134;
}
header button[type="button"].active span {
  transform: scale(0.8, 0.8);
}

header .btn-search li form {
  display: flex;
}

header .btn-search input {
  box-shadow: none !important;
}

header .btn-search button {
  background-color: var(--primary);
}

header .btn-search button svg {
  fill: var(--bc-white);
}
header .btn-search button:active,
header .btn-search button:hover,
header .btn-search button:focus {
  background-color: var(--primary);
  box-shadow: none !important;
}

header .btn-alert-info img {
  width: 44px;
  height: 44px;
}
header .btn-alert-info svg {
  width: 28px;
  height: 28px;
  fill: var(--primary);
}
header .btn-alert-info .dropdown-toggle::after {
  display: none !important;
}
header .btn-alert-info ul li ul li a:active {
  background-color: var(--primary) !important;
}
</style>