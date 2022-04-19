<template>
  <div class="contact-us">
    <div class="section-under-header">
      <SectionUnderHeader
        heading="Contact Our Company Services Agency"
        paragraph="Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    <div class="form-contact-us p-5">
      <b-container>
        <div class="py-5">
          <h2 class="text-center">Contact Us</h2>
        </div>
        <div class="content">
          <form
            @submit.prevent="submitData()"
            class="w-100 flex-wrap d-flex py-3 justify-content-center"
          >
            <div class="left-form">
              <div class="position-relative p-2">
                <input
                  :class="printClass(checkFristNameInput)"
                  class="px-2 py-2 w-100 border rounded"
                  type="text"
                  name="FristName"
                  v-model="FristName"
                  id="FristName"
                  @blur="checkFristName()"
                />
                <label for="FristName" class="position-absolute"
                  >First Name</label
                >
              </div>
              <div class="position-relative p-2">
                <input
                  :class="printClass(checkLastNameInput)"
                  class="px-2 py-2 w-100 border rounded"
                  type="text"
                  name="LastName"
                  v-model="LastName"
                  id="LastName"
                  @blur="checkLastName()"
                />
                <label for="LastName" class="position-absolute"
                  >Last Name</label
                >
              </div>
              <div class="position-relative p-2">
                <input
                  :class="printClass(checkEmailInput)"
                  class="px-2 py-2 w-100 border rounded"
                  type="email"
                  name="email"
                  v-model="name"
                  id="email"
                  @blur="checkEmail()"
                />
                <label for="email" class="position-absolute"
                  >Address Email</label
                >
              </div>
            </div>
            <div class="right-form">
              <div class="position-relative p-2">
                <input
                  :class="printClass(checkObjectInput)"
                  class="border rounded px-2 py-2 w-100 d-block"
                  type="text"
                  name="objet"
                  v-model="object"
                  id="objet"
                  @blur="checkObject()"
                />
                <label class="position-absolute" for="Objet">Object</label>
              </div>
              <div class="position-relative p-2">
                <textarea
                  :class="printClass(checkMessageInput)"
                  class="border rounded px-2 py-2 w-100 d-block"
                  type="text"
                  name="message"
                  v-model="message"
                  id="message"
                  @blur="checkMessage()"
                >
                </textarea>
                <label class="position-absolute" for="message">Message</label>
              </div>
            </div>
            <div class="d-flex py-3 align-items-center justify-content-center">
              <div class="pt-3 w-25">
                <button
                  type="submit"
                  :disabled="check"
                  class="
                    w-100
                    py-3
                    d-flex
                    justify-content-center
                    border-0
                    rounded
                    algin-items-center
                    text-white
                  "
                  :class="check ? '' : ''"
                  data-name="sing in"
                  @click="submitData()"
                ></button>
              </div>
            </div>
          </form>
        </div>
      </b-container>
    </div>
    <div class="info-company p-5 bg-light">
      <b-container>
        <b-row>
          <b-col sm="5" md="4" class="p-3 flex-grow-1">
            <PackInfo
              iconClass='<path
        d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
      />'
              nameInfo="Mail"
              paragraphInfo="Company_Services2019@gmail.com"
            />
          </b-col>
          <b-col sm="5" md="4" class="p-3">
            <PackInfo
              iconClass='<path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/>'
              nameInfo="Adresse"
              paragraphInfo="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
            />
          </b-col>
          <b-col sm="5" md="4" class="p-3">
            <PackInfo
              iconClass='<path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>'
              nameInfo="Phone"
              paragraphInfo="06 75 34 37 30"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <GoogleMap />
    </div>
  </div>
</template>
<script>
import SectionUnderHeader from "../components/global/SectionUnderHeader.vue";
import PackInfo from "../components/Contact/PackInfo.vue";
import GoogleMap from "../components/global/GoogleMap.vue";
export default {
  name: "ContactUs",
  data() {
    return {
      checkEmailInput: "",
      checkObjectInput: "",
      checkMessageInput: "",
      checkFristNameInput: "",
      checkLastNameInput: "",
      check: false,
      FristName: "",
      LastName: "",
      object: "",
      name: "",
      message: "",
    };
  },
  components: {
    SectionUnderHeader,
    PackInfo,
    GoogleMap,
  },
  watch: {},
  methods: {
    checkFristName() {
      if (this.FristName === "" || this.FristName.length <= 4) {
        this.checkFristNameInput = false;
        return;
      }
      this.checkFristNameInput = true;
    },
    checkLastName() {
      if (this.LastName === "" || this.LastName.length <= 4) {
        this.checkLastNameInput = false;
        return;
      }
      this.checkLastNameInput = true;
    },
    checkEmail() {
      if (
        !this.name.includes("@") ||
        !this.name.includes(".") ||
        this.name === null
      ) {
        this.checkEmailInput = false;
        return;
      }
      this.checkEmailInput = true;
    },
    checkMessage() {
      if (this.message === "") {
        this.checkMessageInput = false;
        return;
      }
      this.checkMessageInput = true;
    },
    checkObject() {
      if (this.object === "") {
        this.checkObjectInput = false;
        return;
      }
      this.checkObjectInput = true;
    },
    submitData() {
      this.checkFristName();
      this.checkLastName();
      this.checkObject();
      this.checkEmail();

      this.checkMessage();
      if (!this.checkEmailInput) {
        return;
      }
      if (!this.checkObjectInput) {
        return;
      }

      this.check = !this.check;
    },
    printClass(nameValue) {
      if (nameValue === "") return "";
      if (nameValue) return "sec-input";
      return "err-input";
    },
  },
};
</script>

<style scoped>
form > div {
  min-width: 50%;
}
h2 {
  color: var(--primary) !important;
  font-size: 26px !important;
}
textarea {
  height: 103px;
}
input,
textarea {
  outline: none;
  border-width: 2px !important;
  border-bottom-color: #747a7a;
}
input.err-input,
textarea.err-input {
  border-color: #f72003 !important;
}
textarea.err-input + label,
input.err-input + label {
  color: #f72003 !important ;
  background: #fff;
  z-index: 0;
}
textarea:focus,
textarea.sec-input,
input:focus,
input.sec-input {
  border-color: var(--primary) !important;
}
label {
  font-size: 12px;
  top: 20px;
  left: 20px;
  transition: 0.3s ease-in;
  font-weight: bold;
  cursor: pointer;
  color: #747a7a;
}
textarea:focus + label,
textarea.sec-input + label,
input:focus + label,
input.sec-input + label {
  top: 0px;
  left: 20px;
  color: var(--primary) !important;
  background: #fff;
}
button {
  background-color: var(--primary);
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: #238a91d1;
}
button:hover,
button:disabled,
button.check {
  background-color: #238a91d1;
}
button::after {
  content: attr(data-name);
}
button:disabled:after,
button.check:after {
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
@media (max-width: 650px) {
  form > div {
    min-width: 100%;
  }
}

@media (max-width: 430px) {
  .form-contact-us{
    padding: 0 !important;
  }
}
</style>
