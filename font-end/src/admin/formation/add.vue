<template>
  <div class="AddedTraining">
    <SectionUnder heading="Added Formation" />
    <b-container>
      <LinkChangeM link="/formation/management-formation/" name="management formation" />
      <div class="form-data">
        <div
          v-if="Boolean(categories)"
          class="
            content
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <div class="message pb-5" v-if="!Boolean(categories.length)">
            <MessageSeach class="my-0" name="category" />
            <div class="pb-5 text-center">
              <router-link
                class="
                  rounded
                  py-2
                  text-white
                  d-block
                  text-decoration-none text-capitalize
                "
                to="/added-category"
                >go to add category
              </router-link>
            </div>
            <div class="pb-5 text-center">
              <strong
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  p-3
                  text-capitalize
                  fs-3
                "
                >warning
                <b-icon-exclamation-triangle-fill
                  class="text-warning"
                ></b-icon-exclamation-triangle-fill>
              </strong>
              <p class="p-5 rounded border bg-light fs-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis dolor maxime natus amet ab soluta enim labore omnis,
                sunt officia rem dolores non distinctio sed beatae quod tempore
                exercitationem eius.
              </p>
            </div>
          </div>
          <form
            v-else
            class="w-100 form p-4 bg-light"
            @submit.prevent="submitData()"
          >
            <div class="header-from">
              <h2>Added Formation</h2>
            </div>
            <div class="body-from">
              <b-row>
                <b-col sm="12" md="4">
                  <div class="input-name py-2">
                    <label for="name" class="text-capitalize py-2 d-block"
                      >name formation</label
                    >
                    <input
                      class="border-1 inp p-2 w-100 rounded"
                      type="text"
                      name="name"
                      id="name"
                      v-model="nameFormation"
                    />
                  </div>
                  <div class="box-categories">
                    <div
                      class="
                        py-3
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      <div>
                        <span class="text-capitalize"
                          >number items categories</span
                        >
                      </div>
                      <div>
                        <strong class="px-2">{{ getCategory.length }}</strong>
                      </div>
                    </div>
                    <div
                      class="
                        border
                        rounded-top
                        border-bottom-0
                        bg-white
                        d-flex
                        justify-content-between
                        align-items-center
                        overflow-hidden
                      "
                    >
                      <div class="text-capitalize flex-grow-1">
                        <input
                          type="text"
                          class="w-100 px-2 py-3 border-0"
                          :placeholder="
                            !seachCategory ? 'select name category' : ''
                          "
                          :disabled="!seachCategory"
                          :class="seachCategory ? '' : 'bg-light'"
                          v-model="nameCategory"
                          ref="seachCategory"
                        />
                      </div>
                      <div class="px-2 bg-light">
                        <button
                          type="button"
                          @click="toggleInput"
                          class="px-2 rounded border-0 py-2 text-white"
                        >
                          <b-icon
                            size="lg"
                            :icon="seachCategory ? 'x' : 'search'"
                            :scale="seachCategory ? '2' : ''"
                          ></b-icon>
                        </button>
                      </div>
                    </div>
                    <div
                      role="listbox"
                      class="
                        border-top-0
                        overflow-auto
                        px-2
                        py-3
                        rounded-bottom
                        border
                        bg-light
                      "
                    >
                      <div v-if="!Boolean(getCategory.length)">
                        <MessageSeach class="my-0" name="category" />
                      </div>
                      <div
                        v-else
                        role="option"
                        tabindex="0"
                        class="px-2 category py-2 bg-white my-1 rounded border"
                        :category="category._idCat"
                        v-for="(category, idx) in getCategory"
                        :key="idx"
                        @click="(e) => setItem(e, category._idCat)"
                      >
                        {{ category._name }}
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col sm="12" md="8">
                  <div class="input-name py-2">
                    <label class="text-capitalize py-2 d-block"
                      >description formation</label
                    >
                    <ckeditor
                      :editor="description"
                      v-model="descriptionData"
                      :config="descriptionConfig"
                      @input="onEditorDescription"
                    ></ckeditor>
                  </div>
                  <div class="input-name py-2">
                    <label class="text-capitalize py-2 d-block"
                      >goals formation</label
                    >
                    <ckeditor
                      :editor="goals"
                      v-model="goalsData"
                      :config="goalsConfig"
                      @input="onEditorGoals"
                    ></ckeditor>
                  </div>
                  <div class="image bg-white">
                    <label
                      @dragover.prevent
                      @drop="onDrop"
                      class="d-block"
                      for="file"
                    >
                      <div
                        :class="
                          !image
                            ? 'd-flex align-content-around justify-content-between flex-column flex-wrap w-100 h-100 d-block py-5 '
                            : 'd-none'
                        "
                      >
                        <span class="text-capitalize">Drag in image</span>
                        <span class="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path
                              d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM223 263C213.7 272.4 213.7 287.6 223 296.1C232.4 306.3 247.6 306.3 256.1 296.1L296 257.9V392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392V257.9L383 296.1C392.4 306.3 407.6 306.3 416.1 296.1C426.3 287.6 426.3 272.4 416.1 263L336.1 183C327.6 173.7 312.4 173.7 303 183L223 263z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div :class="image ? 'd-block w-100 h-100' : 'd-none'">
                        <button
                          class="
                            text-white text-capitalize
                            remove
                            w-100
                            p-2
                            border-0
                            d-block
                          "
                          @click="remove($event)"
                        >
                          remove image
                        </button>
                        <div
                          class="
                            w-100
                            h-100
                            d-flex
                            align-content-center
                            justify-content-center
                          "
                        >
                          <img
                            :src="image"
                            class="w-100 h-100"
                            alt="image cv"
                          />
                        </div>
                      </div>
                      <input
                        @change="onChange"
                        class="d-none"
                        type="file"
                        name="file"
                        id="file"
                        ref="file"
                      />
                    </label>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="footer-form pt-4">
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SectionUnder from "@/components/admin/global/SectionUnder.vue";
import LinkChangeM from "@/components/admin/global/LinkChangeM.vue";
import MessageSeach from "@/components/admin/global/MessageSeach.vue";
import Alert from "@/components/admin/global/alert.vue";
export default {
  name: "AddFormation",
  data() {
    return {
      load: false,
      seachCategory: false,
      nameCategory: "",
      idCat: undefined,
      nameFormation: "",
      image: "",
      file: undefined,
      check: false,
      categories: undefined,
      description: ClassicEditor,
      descriptionData: "",
      descriptionConfig: {},
      goals: ClassicEditor,
      goalsData: "",
      goalsConfig: {},
      objAlert: {},
    };
  },
  components: {
    SectionUnder,
    LinkChangeM,
    MessageSeach,
    Alert,
  },

  watch: {
    seachCategory(value) {
      if (value) this.$nextTick(() => this.$refs.seachCategory.focus());
    },
  },

  created() {
    (async () => {
      let res = await axios({
        url: "http://localhost:3000/formation/all-categories",
        method: "get",
      });
      this.categories = res.data.categories;
      this.load = !this.load;
    })();
  },

  methods: {
    submitData() {
      if (!this.checkContentEditor(this.descriptionData)) return;
      if (!this.checkContentEditor(this.goals)) return;
      if (!this.checkFile()) return;
      if (!this.checkNameFormation()) return;
      if (!this.checkIdCat()) return;
      console.log("jhfkjhfkjf");
      if (Boolean(Object.keys(this.objAlert).length)) this.emptyObjAlert();
      this.check = !this.check;
      let formData = new FormData();
      formData.append("nameFormation", this.nameFormation);
      formData.append("description", this.descriptionData);
      formData.append("goals", this.goalsData);
      formData.append("file", this.file);
      formData.append("idCategory", this.idCat);
      axios
        .post("http://localhost:3000/formation/add-formation", formData)
        .then((response) => {
          this.check = !this.check;
          this.nameFormation = "";
          this.descriptionData = "";
          this.goalsData = "";
          this.idCat = undefined;
          document
            .querySelector(".active-category")
            .classList.remove("active-category");
          this.remove();
          console.log(response.data);
          if (response.data.message) {
            this.objAlert.nameClass = "alert-success";
            return (this.objAlert.message = "Item added successfully");
          }
          this.objAlert.nameClass = "alert-warning";
          this.objAlert.message = "This item exists";
        })
        .catch((error) => console.log(error));
    },
    onEditorDescription(value) {
      this.descriptionData = value;
    },
    onEditorGoals(value) {
      this.goalsData = value;
    },
    checkNameFormation() {
      if (this.nameFormation === "" || this.nameFormation.length <= 4)
        return false;
      return true;
    },
    checkIdCat() {
      if (!Boolean(this.idCat)) return false;
      return true;
    },
    checkFile() {
      if (!Boolean(this.file) && !(this.file instanceof Object)) return false;
      return true;
    },

    checkContentEditor(element) {
      if (!Boolean(element)) return false;
      return true;
    },
    setItem(e, id) {
      if (e.target.classList.contains("active-category")) return;
      let getClass = document.querySelector(".active-category");
      if (Boolean(getClass)) getClass.classList.remove("active-category");
      e.target.classList.add("active-category");
      this.idCat = id;
      if (this.nameCategory) this.toggleInput();
    },
    onDrop: function (e) {
      e.stopPropagation();
      e.preventDefault();
      this.createFile(e.dataTransfer.files[0]);
    },
    onChange() {
      this.file = this.$refs.file.files[0];
      this.createFile(this.file);
    },
    createFile(file) {
      if (!file.type.match("image.*")) return;
      let reader = new FileReader();
      reader.onload = (event) => (this.image = event.target.result);
      reader.readAsDataURL(file);
    },
    remove() {
      this.image = "";
      this.file = "";
    },
    emptyObjAlert() {
      this.objAlert = {};
    },
    toggleInput() {
      this.seachCategory = !this.seachCategory;
      this.nameCategory = "";
    },
  },
  computed: {
    getAlert() {
      return this.objAlert;
    },
    getCategory() {
      return this.categories.filter((cats) => {
        return cats._name.match(new RegExp(this.nameCategory, "i"));
      });
    },
  },
};
</script>

<style>
.AddedTraining .message a {
  background-color: var(--second);
}
.AddedTraining .message p {
  width: 500px;
  color: var(--second);
}
.AddedTraining .res-alert {
  min-width: 300px;
  width: 300px;
}
.AddedTraining .inp {
  border-color: var(--second);
}
.AddedTraining form input {
  outline: none !important;
}
.AddedTraining form .box-categories > div:last-child {
  height: 400px;
}
.AddedTraining form .box-categories > div:last-child .category {
  transition: 0.2s ease-in;
  cursor: pointer;
}
.AddedTraining form .box-categories > div:last-child .category.active-category,
.AddedTraining form .box-categories > div:last-child .category:hover {
  color: var(--bc-white);
  background-color: var(--second) !important;
  border-color: #072135 !important;
}
.AddedTraining form button {
  background-color: var(--second);
}
.AddedTraining form button.send-data {
  background-color: #0e314c81 !important;
}
.AddedTraining form .footer-form button::after {
  content: "send";
}
.AddedTraining form .footer-form button.send-data::after {
  display: block;
  content: "";
  border: 6px solid #eee;
  animation: loding 1s linear infinite;
  border-bottom-color: var(--second);
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.ck-editor__editable {
  min-height: 150px !important;
}

.AddedTraining .image {
}
.AddedTraining .image label {
  cursor: pointer;
}
.AddedTraining .image:hover span {
  transform: translateY(-20px) scale(0.98, 0.98);
}
.AddedTraining .image span svg {
  width: 60px;
  height: 60px;
}
.AddedTraining .image span svg path {
  fill: var(--primary);
}
.AddedTraining .image .remove {
  background-color: var(--second);
}
.AddedTraining .image span:first-child {
  font-size: 16px;
}
.AddedTraining .image span {
  transition: 0.2s linear;
}
.AddedTraining .image span:last-child {
  transition-delay: 0.1s;
}
.AddedTraining .image label img {
  height: 300px;
  max-height: 300px;
  width: 300px;
  max-width: 300px;
}
.AddedTraining .MessageSearch svg {
  width: 60px !important;
}
.AddedTraining .MessageSearch h3 {
  font-size: 18px;
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