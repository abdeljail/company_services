<template>
  <footer  class="bg-light pt-4">
    <div class="top-footer">
      <b-nav-item
        to="/sing-in"
        > dddddddddddddddddddddddd </b-nav-item
      >
      <b-container fluid>
        <b-row class="p-3">
          <b-col sm="5" md="4" class="p-3">
            <div class="pb-3">
              <b-navbar-brand to="/">
                <img class="logo-image" :src="logoImage" alt="logo image" />
              </b-navbar-brand>
            </div>
            <div class="pt-3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </b-col>
          <b-col sm="5" md="4" class="p-3">
            <div class="pb-3">
              <h2>Navigation</h2>
            </div>
            <div class="pt-3">
              <b-navbar-nav>
                <b-nav-item
                  :key="idx"
                  v-for="(link, idx) in linksFooter"
                  :to="link[1]"
                  class="item-link px-2 py-1 rounded text-capitalize"
                  >{{ link[0] }}</b-nav-item
                >
              </b-navbar-nav>
            </div>
          </b-col>
          <b-col sm="5" md="4" class="p-3">
            <div class="pb-3">
              <h2>Contact</h2>
            </div>
            <div class="pt-3">
              <b-navbar-nav>
                <b-nav-item class="item-link px-2 py-1 rounded text-capitalize">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                    />
                  </svg>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </b-nav-item>
                <b-nav-item class="item-link px-2 py-1 rounded text-capitalize">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                    />
                  </svg>
                  Email:
                  <span class="text-break">company_services2019@gmail.com</span>
                </b-nav-item>
                <b-nav-item class="item-link px-2 py-1 rounded text-capitalize">
                  <p class="m-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                      />
                    </svg>
                    Tél : +212 522 90 41 51
                  </p>
                  <p class="m-0">Tel Fixe : 05 24 62 45 84</p>
                </b-nav-item>
              </b-navbar-nav>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="bottom-footer text-center p-3">
      <b-container>
        <p class="p-0 m-0 text-white">Copyright company services © 2020</p>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      linksFooter: [
        ["Home", "/"],
        ["about us", "/who-are-we"],
        ["Contact Us", "/contact-us"],
        ["Our Services", "/skills"],
        ["Our Trainings", "/training-offer"],
        ["Quote request", "/application-r-i"],
      ],
    };
  },
  inject: ["logoImage"],
};
</script>
<style scoped>
.bottom-footer {
  background-color: var(--primary);
}
h2 {
  font-family: var(--font-link) !important;
  color: var(--cl-paragraph);
}
.item-link a.nav-link.router-link-exact-active.router-link-active,
.item-link a.nav-link {
  padding: 0px !important;
  border-radius: unset !important;
  transition: unset !important;
  font-family: var(--font-paragraph) !important;
  background-color: transparent !important;
  color: var(--cl-paragraph) !important;
}
p {
  color: var(--cl-paragraph);
}
.row div:last-child > div:last-child a {
  color: var(--cl-paragraph) !important;
}
.row div:last-child > div:last-child svg {
  width: 18px;
  margin-right: 10px;
}
.row div:last-child > div:last-child p:last-child {
  text-indent: 34px;
}
</style>