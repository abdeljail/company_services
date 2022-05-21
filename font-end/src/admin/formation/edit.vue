<template>
  <div class="EditFormation">
    <SectionUnder heading="Edit Formation" />
    <b-container>
      <LinkChangeM
        link="/formation/management-formation/"
        name="management formation"
      />
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
            id="myform"
            class="w-100 form p-4 bg-light"
            @submit.prevent="submitData()"
          >
            <div class="header-from">
              <h2>Added Formation</h2>
            </div>
            <div class="body-from">
              <b-row>
                <b-col lg="4" sm="12" md="6">
                  <div
                    role="button"
                    class="
                      change
                      my-3
                      overflow-hidden
                      bg-white
                      text-capitalize
                      border-top border-start border-end
                      rounded
                      text-center
                    "
                    @click="change('name')"
                  >
                    <div class="py-3 px-2">
                      <strong class="fs-4">{{ nameFormation }}</strong>
                    </div>
                    <div class="text-white btn-div py-3 px-2">change Name</div>
                  </div>
                </b-col>
                <b-col lg="4" sm="12" md="6">
                  <div
                    role="button"
                    class="
                      change
                      my-3
                      overflow-hidden
                      bg-white
                      text-capitalize
                      border-top border-start border-end
                      rounded
                      text-center
                    "
                    @click="change('category')"
                  >
                    <div class="py-3 px-2">
                      <strong class="fs-4">{{ nameCategory }}</strong>
                    </div>
                    <div class="text-white btn-div py-3 px-2">
                      change Category
                    </div>
                  </div>
                </b-col>
                <b-col lg="4" sm="12" md="6">
                  <div
                    role="button"
                    class="
                      change
                      my-3
                      overflow-hidden
                      bg-white
                      text-capitalize
                      border-top border-start border-end
                      rounded
                      text-center
                    "
                    @click="change('description')"
                  >
                    <div class="py-3 px-2">
                      <strong class="fs-4">description</strong>
                    </div>
                    <div class="text-white btn-div py-3 px-2">
                      change description
                    </div>
                  </div>
                </b-col>
                <b-col lg="4" sm="12" md="6">
                  <div
                    role="button"
                    class="
                      change
                      my-3
                      overflow-hidden
                      bg-white
                      text-capitalize
                      border-top border-start border-end
                      rounded
                      text-center
                    "
                    @click="change('goals')"
                  >
                    <div class="py-3 px-2">
                      <strong class="fs-4"> Goals </strong>
                    </div>
                    <div class="text-white btn-div py-3 px-2">change Goals</div>
                  </div>
                </b-col>
                <b-col lg="4" sm="12" md="6">
                  <div
                    role="button"
                    class="
                      change
                      my-3
                      overflow-hidden
                      bg-white
                      text-capitalize
                      border-top border-start border-end
                      rounded
                      text-center
                    "
                    @click="change('image')"
                  >
                    <div class="py-3 px-2" style="height: 200px">
                      <img
                        class="border border-3 rounded"
                        :src="`http://localhost:3000/uploads/images/${img}`"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div class="text-white btn-div py-3 px-2">change Image</div>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="footer-form pt-4"></div>
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
    <div
      :class="isHide ? 'show' : ''"
      class="overflow-hidden position-fixed change-fildes bg-white rounded"
    >
      <div class="content-change">
        <div class="py-2 header-content px-3 d-flex justify-content-between">
          <h3 class="text-capitalize">new {{ nameUpdate }} formation</h3>
          <span
            @click="hide"
            role="button"
            tabindex="0"
            class="p-2 span-change rounded d-block"
            ><i class="fas fa-times text-black"></i>
          </span>
        </div>
        <div class="content-body px-3">
          <div class="py-2" v-if="nameUpdate === 'name'">
            <div class="input-name py-2">
              <input
                class="border inp p-2 w-100 rounded"
                type="text"
                name="name"
                id="name"
                v-model="newData"
              />
            </div>
          </div>
          <div class="py-2" v-if="nameUpdate === 'category'">
            <div class="box-categories">
              <div
                class="py-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <span class="text-capitalize">number items categories</span>
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
                    :placeholder="!seachCategory ? 'select name category' : ''"
                    :disabled="!seachCategory"
                    :class="seachCategory ? '' : 'bg-light'"
                    v-model="newData"
                    ref="update"
                  />
                </div>
                <div class="px-2 bg-light">
                  <button
                    type="button "
                    @click="toggleInput"
                    class="px-2 button rounded border-0 py-2 text-white"
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
                  listbox
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
          </div>
          <div class="py-2" v-if="nameUpdate === 'description'">
            <div class="old" v-html="descriptionL"></div>
            <div class="input-name py-2">
              <label class="text-capitalize py-2 d-block"
                >description formation</label
              >
              <ckeditor
                :editor="description"
                v-model="newData"
                :config="descriptionConfig"
                @input="onEditorDescription"
                ref="update"
              >
              </ckeditor>
            </div>
          </div>
          <div class="py-2" v-if="nameUpdate === 'goals'">
            <div class="old" v-html="goals"></div>
            <div class="input-name py-2">
              <label class="text-capitalize py-2 d-block"
                >goals formation</label
              >
              <ckeditor
                :editor="goals"
                v-model="newData"
                :config="goalsConfig"
                @input="onEditorGoals"
                ref="update"
              ></ckeditor>
            </div>
          </div>
          <div class="py-2" v-if="nameUpdate === 'image'">
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
                      ref="update"
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
          </div>
        </div>
        <div
          class="
            py-3
            border
            footer-content
            d-flex
            justify-content-between
            align-itens-center
            px-3
            border-top
          "
        >
          <div
            v-if="Boolean(Object.keys(this.objAlert).length)"
            class="res-alert position-relative"
          >
            <Alert @emptyObjAlert="emptyObjAlert" :objAlert="objAlert" />
          </div>
          <button
            type="submit"
            class="
              update-btn
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
            form="myform"
            :disabled="check"
            :class="check ? 'send-data' : ''"
          ></button>
        </div>
      </div>
    </div>
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
      catId: undefined,
      newData: "",
      nameFormation: "",
      nameUpdate: "",
      image: "",
      img: "",
      file: undefined,
      check: false,
      isHide: false,
      categories: undefined,
      description: ClassicEditor,
      descriptionL: "",
      descriptionData: "",
      descriptionConfig: {},
      goals: ClassicEditor,
      goalsData: "",
      goalsL: "",
      goalsConfig: {},
      objAlert: {},
      idF: "",
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
      if (value) this.$nextTick(() => this.$refs.update.focus());
    },
  },
  beforeCreate() {
    {
      (() => {
        const id = localStorage.editFormationId;
        const name = localStorage.editFormationName;
        if (
          !Boolean(id) ||
          !Boolean(name) ||
          id !== this.$route.params.id ||
          name !== this.$route.params.name
        )
          this.$router.push("/formation/management-formation/");
      })();
    }
  },

  created() {
    {
      (async () => {
        let res = await axios({
          url: "http://localhost:3000/formation/all-categories",
          method: "get",
        });
        this.categories = res.data.categories;
        this.load = !this.load;
      })();
    }
    {
      this.idF = localStorage.editFormationId;
      this.nameFormation = localStorage.editFormationName;
      this.nameCategory = localStorage.editFormationCat;
      this.img = localStorage.editFormationImage;
      this.descriptionL = localStorage.editFormationDescription;
      this.goalsL = localStorage.editFormationGoals;
    }
  },

  methods: {
    submitData() {
      if (Boolean(Object.keys(this.objAlert).length)) this.emptyObjAlert();

      this.check = !this.check;

      let expr = undefined;

      switch (this.nameUpdate) {
        case "name":
          expr = this.newData;
          break;
        case "category":
          expr = this.catId;
          break;
        case "image":
          expr = this.$refs.file.files[0];
          break;
        case "goals":
          expr = this.newData;
          break;
        case "description":
          expr = this.newData;
        default:
          console.log(` out of ${this.name}.`);
      }
      let formData;
      formData = new FormData();
      if (typeof expr === "string") {
        formData.append(this.nameUpdate, expr);
        // formData = { [this.nameUpdate]: expr };
      } else {
        formData.append(this.nameUpdate, expr);
        formData.append("oldPath", this.img);
      }
      formData.append("id", this.idF);
      axios
        .post("http://localhost:3000/formation/edit-formation", formData)
        .then((response) => {
          this.check = !this.check;
          console.log(response.data);
          this.newData = "";
          this.catId = undefined;
          this.file = "";
          if (response.data.message) {
            this.objAlert.nameClass = "alert-success";
            return (this.objAlert.message = "Item added successfully");
          }
          this.objAlert.nameClass = "alert-warning";
          this.objAlert.message = "This item exists";
        })
        .catch((error) => console.log(error));
    },
    change(name) {
      this.nameUpdate = name;
      this.isHide = !this.isHide;
      document.getElementById("model").classList.add("overly");
    },
    setItem(e, id) {
      if (e.target.classList.contains("active-category")) return;
      let getClass = document.querySelector(".active-category");
      if (Boolean(getClass)) getClass.classList.remove("active-category");
      e.target.classList.add("active-category");
      this.catId = id;
      if (this.newData) this.toggleInput();
    },
    onEditorDescription(value) {
      this.descriptionData = value;
    },
    onEditorGoals(value) {
      this.goalsData = value;
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
      this.newData = "";
    },
    hide() {
      document.getElementById("model").classList.remove("overly");
      this.isHide = !this.isHide;
      this.newData = "";
      setTimeout(() => {
        this.nameUpdate = "";
      }, 400);
    },
  },
  computed: {
    getAlert() {
      return this.objAlert;
    },
    getCategory() {
      return this.categories.filter((cats) => {
        return cats._name.match(new RegExp(this.newData, "i"));
      });
    },
    getName() {
      return this.$route.params.name;
    },
  },
};
</script>

<style>
.change {
  transition: 0.2s ease-in;
  box-shadow: 0 3px 0 #dee2e6;
}
.change:hover {
  border-color: var(--second) !important;
  box-shadow: 0 3px 0 var(--second);
}
.change .btn-div {
  background-color: var(--second);
}
.change:hover div:first-child {
  transition: 0.1s 0.08s ease-in;
}
.change:hover div:first-child {
  background-color: #07213548;
}
.change-fildes {
  min-width: 500px;
  min-height: 200px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  top: 50%;
  left: 50%;
  z-index: 25;
  transform: translate(-40%, 40%) scale(0, 0);
  box-shadow: -10px -10px 0px 1px var(--second);
  transition: 0.3s 0.1s ease-in-out;
}
.change-fildes.show {
  transform: translate(-50%, -50%) scale(1, 1);
}
.change-fildes:hover {
  box-shadow: 0px 0px 0px 10px var(--second);
}

.box-categories > div:last-child .category {
  transition: 0.2s ease-in;
  cursor: pointer;
}
.box-categories > div:last-child .category.active-category,
.box-categories > div:last-child .category:hover {
  color: var(--bc-white);
  background-color: var(--second) !important;
  border-color: #072135 !important;
}

.ck-editor__editable {
  min-height: 150px !important;
  min-width: 560px !important;
}
.listbox {
  max-height: 300px;
}

span.span-change {
  cursor: pointer;
  transition: 0.2s ease-in;
}
span.span-change:hover {
  background: var(--second);
}
span.span-change:hover i {
  color: var(--bc-white) !important;
}
.image label {
  cursor: pointer;
}
.image:hover span {
  transform: translateY(-20px) scale(0.98, 0.98);
}
.image span svg {
  width: 60px;
  height: 60px;
}
.image span svg path {
  fill: var(--primary);
}
.image .remove {
  background-color: var(--second);
}
.image span:first-child {
  font-size: 16px;
}
.image span {
  transition: 0.2s linear;
}
.image span:last-child {
  transition-delay: 0.1s;
}
.image label img {
  height: 300px;
  max-height: 300px;
  width: 300px;
  max-width: 300px;
}
.MessageSearch svg {
  width: 60px !important;
}
.MessageSearch h3 {
  font-size: 18px;
}
.button {
  background-color: var(--second) !important;
}
.update-btn {
  color: var(--primary);
  font-weight: bold;
  border-color: var(--primary) !important;
  box-shadow: 0 2px 0 var(--primary);
  border-radius: 10px !important;
  transition: 0.2s ease-in-out;
  outline: none !important;
  background-color: transparent;
}
.update-btn:hover {
  background-color: #07213548 !important;
}
.update-btn.send-data {
  background-color: #0e314c81 !important;
}
.update-btn::after {
  content: "update";
  color: var(--primary);
}
.update-btn.send-data::after {
  display: block;
  content: "";
  border: 6px solid var(--primary);
  animation: loding 1s linear infinite;
  border-bottom-color: transparent;
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