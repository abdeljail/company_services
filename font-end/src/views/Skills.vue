<template>
  <div class="skills-compamy">
    <div class="section-under-header">
      <SectionUnderHeader heading="Skills Company Services Agency" />
    </div>
    <div class="skills-compamy-servers p-5">
      <b-container>
        <div class="info-skills">
          <div class="py-5">
            <h2 class="text-center">Our pool of skills</h2>
          </div>
          <div class="content">
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
        <b-row class="pt-5" cols-sm="2" cols-md="3" cols="1">
          <b-col 
              ms="1" class="py-2">
            <PackH1ParaImg
              heading="Legal Consultants"
              srcImage="LegalConsultants.png"
              classPack="skills"
            />
          </b-col>
          <b-col  ms="1"  class="py-2">
            <PackH1ParaImg
              heading="Management"
              srcImage="_management.png"
              classPack="skills"
            />
          </b-col>
          <b-col  ms="1"  class="py-2">
            <PackH1ParaImg
              heading="Marketing"
              srcImage="Marketing.png"
              classPack="skills"
            />
          </b-col>
          <b-col  ms="1"  class="py-2">
            <PackH1ParaImg
              heading="communication"
              srcImage="Communication.png"
              classPack="skills"
            />
          </b-col>
          <b-col  ms="1"  class="py-2">
            <PackH1ParaImg
              heading="Computer science"
              srcImage="ComputerScience.png"
              classPack="skills"
            />
          </b-col>
          <b-col class="py-2">
            <PackH1ParaImg
              heading="Engineering"
              srcImage="Engineering.png"
              classPack="skills"
            />
          </b-col>
          <b-col class="py-2">
            <PackH1ParaImg
              heading="Management"
              srcImage="Management.png"
              classPack="skills"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <ContactUs />
    </div>
  </div>
</template>
<script>
import SectionUnderHeader from "../components/global/SectionUnderHeader.vue";
import PackH1ParaImg from "@/components/global/PackH1ParaImg.vue";
import ContactUs from "../components/global/ContactUs.vue";
export default {
  name: "Skills",
  data() {
    return {};
  },
  components: {
    SectionUnderHeader,
    PackH1ParaImg,
    ContactUs,
  },
  created() {
    console.log("yes");
  },
  methods: {},
};
</script>

<style scoped>
h3 {
  color: var(--second);
}

p {
  color: var(--cl-paragraph);
}
@media (max-width: 650px) {
  form > div {
    min-width: 100%;
  }
}

@media (max-width: 430px) {
  .form-contact-us {
    padding: 0 !important;
  }
}
</style>
