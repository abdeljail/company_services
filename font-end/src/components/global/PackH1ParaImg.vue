<template>
  <div :class="printClass" class="pack p-2">
    <div>
      <img
        class="rounded"
        :src="require('@/assets/images/vision.png')"
        alt="image Nouvelle Formation "
      />
    </div>
    <div class="p-2">
      <h3 class="text-capitalize">{{ heading }}</h3>
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackH1ParaImg",
  data() {
    return {
      class: "",
    };
  },
  props: {
    heading: {
      type: String,
      require: true,
    },
    paragraph: {
      type: String,
    },
    srcImage: {
      type: String,
      require: true,
    },
    classPack: {
      type: String,
      require: true,
    },
  },
  computed: {
    printClass() {
      return this.classPack === "nouvelle-formation"
        ? "nouvelle-formation bg-light rounded border border-1"
        : this.classPack;
    },
  },
};
</script>
<style scoped>
section .nouvelle-formation {
  cursor: pointer;
}

.mission-vision div:first-child {
  height: 314px;
  width: 456px;
}
section .nouvelle-formation > div:first-child {
  width: 100%;
  height: 200px;
}
section .nouvelle-formation > div:first-child img,
.mission-vision div:first-child img {
  width: inherit;
  height: inherit;
}
section .nouvelle-formation > div:last-child h3 {
  padding: 10px 0px;
  color: var(--second);
}
section .nouvelle-formation > div:last-child p {
  overflow: auto !important;
  height: 110px;
  max-height: 150px;
  color: var(--cl-paragraph);
  font-size: 15px;
}
.mission-vision h3 {
  font-family: var(--font-link);
  color: var(--cl-paragraph);
}
@media (max-width: 575px) {
  section .nouvelle-formation > div:last-child p {
    height: inherit !important;
  }
}
@media (max-width: 767px) {
  .packs {
    background-color: #f8f9fa;
  }
  .local-h .container .row > div:first-child div,
  .packs .container .row > div:last-child div {
    text-align: center;
  }
  .mission-vision div:first-child {
    display: none !important;
  }
  .mission-vision div:last-child {
    text-align: center;
  }
}
</style>