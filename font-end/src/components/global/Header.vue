<template>
  <header>
    <div>
      <b-navbar class="nav" toggleable="lg" type="dark" variant="info">
        <b-container fluid class="py-2 px-3 d-flex justify-content-between"
          ><div>
            <b-navbar-brand to="/">
              <img class="logo-image" :src="logoImage" alt="image logo" />
            </b-navbar-brand>
          </div>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="d-flex justify-content-end flex-grow-1">
              <div :key="idx" v-for="(link, idx) in linksHeader">
                <b-nav-item-dropdown
                  v-if="idx === 5 || idx === 3"
                  :text="link[0]"
                  class="item-link px-2 py-1 rounded text-capitalize"
                  right
                >
                  <div v-if="idx === 3">
                    <b-dropdown-item
                      :id="link[0]"
                      :key="index"
                      v-for="(link, index) in OurServices"
                      :to="link[1]"
                      >{{ link[0] }}</b-dropdown-item
                    >
                  </div>
                  <div v-else>
                    <b-dropdown-item
                      :key="index"
                      v-for="(link, index) in OurServices"
                      :to="link[1]"
                      >{{ link[0] }}</b-dropdown-item
                    >
                  </div>
                </b-nav-item-dropdown>
                <b-nav-item
                  v-else
                  class="item-link px-2 py-1 rounded text-capitalize"
                  exact
                  :to="link[1]"
                >
                  {{ link[0] }}
                </b-nav-item>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      checkRoute: true,
      linksHeader: [
        ["Home", "/"],
        ["Training Offer", "/about"],
        ["about us", "/sdgdsg"],
        ["Our Services", "#"],
        ["Our Trainings", "/gd"],
        ["More", "/gdsg"],
      ],
      OurServices: [
        ["Engineering Training", "Engineering"],
        ["training", "TRAINING"],
        ["outsourcing", "OUTSOURCING"],
        ["interim for business", "interim for business"],
        ["Recruitment consulting assistance", "Recruitment"],
      ],
    };
  },
  inject: ["logoImage"],
};
</script>
<style>
button[type="button"] span {
  background-image: url("../../assets/images/menu.png") !important;
}
.nav {
  box-shadow: 0 2px 20px 0 var(--bc-hover-link);
}
.navbar.nav {
  background-color: var(--bc-white) !important;
}

.item-link a.nav-link {
  font-family: var(--font-link);
}
.item-link a.nav-link,
li[role="presentation"] .dropdown-item {
  color: var(--primary) !important;
  display: block;
  transition: 0.3s linear !important;
  border-radius: 4px;
  padding: 10px 14px;
}
.item-link .nav-link.router-link-active,
li[role="presentation"] .dropdown-item.router-link-active {
  background-color: var(--primary) !important;
  color: var(--bc-white) !important;
}
.item-link .router-link-active:hover,
li[role="presentation"] .dropdown-item.router-link-active:hover {
  background-color: var(--primary) !important;
}
.item-link a:hover {
  background-color: var(--bc-hover-link) !important;
}
.navbar-expand-lg .navbar-nav .dropdown-menu {
  padding: 10px 14px !important;
  right: 0;
}
li[role="presentation"] .dropdown-item {
  text-transform: capitalize !important;
}
</style>
