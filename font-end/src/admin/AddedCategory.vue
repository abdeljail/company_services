<template>
  <div class="AddedTraining">
    <SectionUnder heading="Added Category" />
    <b-container>
      <LinkChangeM link="/management-categories/"  name="management categories"/>
      <div class="form-data">
        <div
          class="
            content
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <form class="form p-4 bg-light" @submit.prevent="submitData()">
            <div class="header-from">
              <h2>Added Category</h2>
            </div>
            <div class="body-from">
              <div class="input-name py-2">
                <label for="name" class="text-capitalize py-2 d-block"
                  >name categopry</label
                >
                <input
                  class="border-1 p-2 w-100 rounded"
                  type="text"
                  name="name"
                  id="name"
                  v-model="nameCat"
                  @blur="checkNameCat()"
                />
              </div>
              <div class="btn-submit py-2 d-flex justify-content-center">
                <button
                  class="
                    border
                    d-flex
                    justify-content-center
                    align-itens-center
                    d-block
                    text-white
                    px-5
                    rounded
                    py-2
                    text-capitalize
                  "
                  type="submit"
                  :disabled="check"
                  :class="check ? 'send-data' : ''"
                ></button>
              </div>
            </div>
          </form>
          <div
            v-if="Boolean(Object.keys(this.objAlert).length)"
            class="res-alert position-relative"
          >
            <Alert @emptyObjAlert="emptyObjAlert" :objAlert="objAlert" />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import SectionUnder from "@/components/admin/global/SectionUnder.vue";
import LinkChangeM from "@/components/admin/global/LinkChangeM.vue";
import Alert from "@/components/admin/global/alert.vue";
export default {
  name: "AddedCategory",
  data() {
    return {
      nameCat: "",
      check: false,
      objAlert: {},
    };
  },
  components: {
    SectionUnder,
    LinkChangeM,
    Alert,
  },
  methods: {
    checkNameCat() {
      if (this.nameCat === "" || this.nameCat.length <= 4) {
        return false;
      }
      return true;
    },
    submitData() {
      if (!this.checkNameCat()) return;
      if (Boolean(Object.keys(this.objAlert).length)) this.emptyObjAlert();
      this.check = !this.check;
      axios
        .post("http://localhost:3000/add-categoty", {
          nameCategory: this.nameCat,
        })
        .then((response) => {
          this.check = !this.check;
          this.nameCat = "";
          if (response.data.message) {
            this.objAlert.nameClass = "alert-success";
            return (this.objAlert.message = "Item added successfully");
          }
          this.objAlert.nameClass = "alert-warning";
          this.objAlert.message = "This item exists";
        })
        .catch((error) => {
          this.check = !this.check;
          console.log(error);
        });
    },
    emptyObjAlert() {
      this.objAlert = {};
    },
  },
  computed: {
    getAlert() {
      return this.objAlert;
    },
  },
};
</script>

<style scoped>
form,
.res-alert {
  min-width: 300px;
  width: 500px;
}
form input {
  outline: none !important;
  border-color: var(--second);
}
form button {
  background-color: var(--second);
}
form button.send-data {
  background-color: #0e314c81;
}
form button::after {
  content: "send";
}
form button.send-data::after {
  display: block;
  content: "";
  border: 6px solid #eee;
  animation: loding 1s linear infinite;
  border-bottom-color: var(--second);
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
@keyframes loding {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>