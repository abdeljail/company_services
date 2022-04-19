<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h1 class="m-0 p-3 text-center">{{ heading }}</h1>
    <p class="m-0 p-4 text-center">{{ paragraph }}</p>
  </div>
</template>
<script>
export default {
  name: "SectionUnderHeader",
  data() {
    return {};
  },
  props: {
    heading: {
      type: String,
      require: true,
    },
    paragraph: {
      type: String,
      require: true,
      default: "",
    },
  },
  created(){
    console.log(this.paragraph);
  }
};
</script>
<style scoped>
div {
  height: 85vh;
  background: url("../../assets/images/sectionunderheader.jpg");
  background-repeat: no-repeat;
  background-size: 100% 120%;
}
h1{
    color: var(--second);
}
p {
  font-size: 18px;
  min-width: 280px;
  max-width: 500px;
  color: var(--cl-paragraph);
}
</style>
