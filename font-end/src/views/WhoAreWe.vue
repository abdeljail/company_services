<template>
  <div class="Who-are-we">
    <div class="section-under-header">
      <SectionUnderHeader
        heading="COMPANY SERVICES Who are we"
        paragraph="Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    <div class="py-5 who">
      <b-container class="py-5 text-center">
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="my-4 p-4 rounded">
          <p class="m-0">
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
      </b-container>
    </div>
    <div class="pt-5">
      <ContactUs />
    </div>
  </div>
</template>
<script>
import SectionUnderHeader from "../components/global/SectionUnderHeader.vue";
import ContactUs from "../components/global/ContactUs.vue";
export default {
  name: "TrainingOffer",
  data() {
    return {};
  },
  components: {
    SectionUnderHeader,
    ContactUs,
  },
};
</script>

<style scoped>
.who .container div {
  background-color: var(--second);
}
.who p {
  color: var(--bc-white);
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