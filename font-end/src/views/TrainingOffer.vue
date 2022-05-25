<template>
  <div class="training-offer">
    <div class="section-under-header">
      <SectionUnderHeader
        heading="COMPANY SERVICES Training offer"
        paragraph="Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    <div class="form-contact-us p-5">
      <b-container>
        <div class="content">
          <div>
            <h3 class="fs-5 py-3">
              consectetur adipisicing elit. Aut id culpa unde earum blanditiis
              illo perferendis temporibus reiciendis quia.
            </h3>
            <p>
              consectetur adipisicing elit. Aut id culpa unde earum blanditiis
              illo perferendis temporibus reiciendis quia. Doloribus ea ut ad
              consectetur consectetur adipisicing elit. Aut id culpa unde earum
              blanditiis illo perferendis temporibus reiciendis quia. Doloribus
              ea ut ad consectetur
            </p>
            <p>
              consectetur adipisicing elit. Aut id culpa unde earum blanditiis
              illo perferendis temporibus reiciendis quia. Doloribus ea ut ad
              consectetur consectetur adipisicing elit. Aut id culpa unde earum
              blanditiis illo perferendis temporibus reiciendis quia. Doloribus
              ea ut ad consectetur
            </p>
          </div>
        </div>
      </b-container>
    </div>
    <section
      style="min-height: 700px"
      class="position-relative pt-3 pb-5 box-pack-nouvelle-normation"
    >
      <div class="py-5">
        <h2 class="text-center text-capitalize">training course</h2>
      </div>
      <div
        class="
          loading-data
          d-flex
          justify-content-center
          align-items-center
          position-absolute
          w-100
          h-50
        "
        v-if="!checkLoad"
      >
        <span class="rounded-circle d-blobk"></span>
      </div>
      <div class="pb-5" v-else>
        <b-container>
          <b-row class="px-5" cols-sm="2" cols-md="3" cols="1">
            <b-col
              class="p-2"
              ms="1"
              v-for="(packFormation, idx) in nouvelleFormation"
              :key="idx"
            >
              <div class="pack p-2 rounded">
                <div>
                  <img
                    class="rounded"
                    :src="`http://localhost:3000/uploads/images/${packFormation._image}`"
                    alt="image Nouvelle Formation "
                  />
                </div>
                <div class="py-3">
                  <h4 class="text-capitalize text-white text-center">
                    {{ packFormation._name }}
                  </h4>
                </div>
                <div
                  class="
                    p-2
                    d-flex
                    flex-wrap
                    justify-content-sm-between justify-content-between
                  "
                >
                  <b-button
                    @click="reservation($event, packFormation._idF)"
                    class="btns border border-2 my-2 p-2"
                    >Reservation</b-button
                  >
                  <b-button
                    data-id_formation="packFormation.id"
                    @click="showDetails($event, packFormation._idF)"
                    class="btns border-0 my-2 p-2"
                    >Details</b-button
                  >
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
    <section
      :class="isShowDetails ? 'show-information' : ''"
      class="
        top-0
        start-0
        bottom-0
        end-0
        position-fixed
        show-details-information
        overflow-auto
      "
    >
      <b-container>
        <div class="py-4 text-end">
          <span
            @click="closeDetails()"
            role="button"
            class="p-3 rounded border border-1"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              />
            </svg>
          </span>
        </div>
        <div
          v-if="checkLoadDetails"
          class="position-relative"
          style="height: 511px"
        >
          <div
            class="
              loading-data
              d-flex
              justify-content-center
              align-items-center
              position-absolute
              w-100
              h-100
            "
          >
            <span class="rounded-circle d-blobk"></span>
          </div>
        </div>
        <div v-else class="part-one">
          <b-row cols-sm="1" class="pb-5" cols-md="2" cols="1">
            <b-col>
              <div class="img w-100">
                <img
                  :src="`http://localhost:3000/uploads/images/${details._image}`"
                  alt="image rormation details"
                />
              </div>
            </b-col>
            <b-col>
              <div class="py-4 name-foramtion">
                <h3>{{ details._name }}</h3>
                <p>
                  <time :datetime="details._dateCreate">{{
                    details._dateCreate
                  }}</time>
                </p>
                <div>
                  <span> catregoryf </span>
                  <strong>
                    {{ details.nameCat }}
                  </strong>
                </div>
              </div>
            </b-col>
          </b-row>
          <div class="py-5" v-html="details._description"></div>
          <div class="py-5" v-html="details._Goals"></div>
        </div>
      </b-container>
    </section>
    <div class="pt-5">
      <ContactUs />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SectionUnderHeader from "../components/global/SectionUnderHeader.vue";
import PackH1ParaImg from "@/components/global/PackH1ParaImg.vue";
import ContactUs from "../components/global/ContactUs.vue";
export default {
  name: "TrainingOffer",
  data() {
    return {
      checkLoadDetails: false,
      checkLoad: false,
      nouvelleFormation: null,
      isShowDetails: false,
      details: {},
      SumFromation: [],
    };
  },
  components: {
    SectionUnderHeader,
    PackH1ParaImg,
    ContactUs,
  },
  created() {
    this.addEventScroll;
  },
  watch: {},
  methods: {
    fetch(url) {
      return axios({
        method: "get",
        url: url,
      });
    },
    reservation(event, idF) {
      if (localStorage.getItem("clientId") === null)
        return this.$router.push("/sing-in");
      axios
        .post("http://localhost:3000/training-offer/add-training", {
          idC: +localStorage.getItem("clientId"),
          idF: idF,
        })
        .then((response) => {
          console.log(response);

          if (response.data.message)
            return alert("Compte  training successfully");
          alert("This Compte exists  training successfully");
        })
        .catch((error) => {
          this.check = !this.check;
          console.log(error);
        });
    },
    showDetails(event, id) {
      document.body.style.overflow = "hidden";
      this.isShowDetails = !this.isShowDetails;
      this.checkLoadDetails = !this.checkLoadDetails;
      setTimeout(() => {
        this.checkLoadDetails = !this.checkLoadDetails;
        this.details = this.nouvelleFormation.find(
          ({ _idF }, idx) => _idF === id
        );
        console.log(this.details);
      }, 3000);
    },
    closeDetails() {
      this.isShowDetails = !this.isShowDetails;
      document.body.style.overflow = "auto";
    },
    fetchDataFormation() {
      this.loadingData = !this.loadingData;
      console.log(this.loadingData);
      this.fetch("http://localhost:3000/formation/all-formation")
        .then((response) => {
          console.log(response.data);
          this.nouvelleFormation = response.data.formations;
          this.loadingData = true;
        })
        .catch((error) => {
          this.loading = true;
          console.error(error);
        });
    },
  },
  computed: {
    addEventScroll() {
      window.addEventListener("scroll", () => {
        if (this.checkLoad) return;
        console.log("yes");
        if (window.scrollY >= this.$el.offsetTop) {
          this.fetchDataFormation();
          this.checkLoad = !this.checkLoad;
        }
      });
    },
  },
};
</script>

<style scoped>
h3 {
  color: var(--second);
}

p {
  color: var(--cl-paragraph);
}

.pack div img {
  transition: 0.09s ease-in;
  display: flex;
  width: inherit;
  height: inherit;
}
.pack:hover div img {
  transform: rotate(-3deg) translateY(-5px) scale(1.03, 1.03);
  box-shadow: 0 1px 16px 0px var(--second);
}

.pack .btns {
  background: none;
  color: var(--primary);
}

.pack .btns:first-child {
  border-color: var(--primary) !important;
}

.pack .btns:hover {
  color: var(--bc-white);
}
.pack .btns:first-child:hover {
  border-color: var(--bc-white) !important;
}
.pack .btns:focus {
  box-shadow: none !important;
}
.pack {
  width: 100%;
  background-image: linear-gradient(
    to top,
    #0e314c,
    #013862,
    #013862,
    #013862,
    #013862,
    #01365f,
    #01355d,
    #01335a,
    #012f54,
    #012b4f,
    #002849,
    #002444
  );
}
.pack div:first-child {
  width: 100%;
  height: 200px;
}
.show-details-information.show-information {
  z-index: -1;
  transform: scale(1) translateY(0px);
  z-index: 12;
}

.show-details-information {
  background-color: #f4f4f5;
  z-index: -1;
  transform: scale(0) translateY(-100%);
  transition: 0.2s ease-in;
}
.show-details-information span {
  cursor: pointer;
  background-color: #fff;
  transition: 0.2s ease-in-out;
}
.show-details-information span:hover {
  background-color: var(--second);
}
.show-details-information span svg {
  width: 30px;
  height: 30px;
}
.show-details-information span svg path {
  fill: var(--second);
}
.show-details-information span:hover svg path {
  fill: var(--bc-white);
}
.show-details-information .part-one .img img {
  width: inherit;
  height: inherit;
}

.loading-data span {
  border: 20px solid #eee;
  animation: loding 1s linear infinite;
  border-bottom-color: var(--primary);
}
.loading-data:not(.category) span {
  height: 100px;
  width: 100px;
}
.loading-data.category span {
  height: 60px;
  width: 60px;
}

@keyframes loding {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 360px) {
  .row {
    padding-left: 6px !important ;
    padding-right: 6px !important ;
  }
}
</style>
