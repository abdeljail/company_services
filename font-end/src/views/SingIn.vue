<template>
  <div
    class="sing-in d-flex justify-content-center align-content-center flex-wrap"
  >
    <router-link
      class="
        text-decoration-none text-white
        px-3
        py-2
        rounded
        back-home
        position-absolute
      "
      to="/"
    >
      Back in Home page
    </router-link>
    <div class="content">
      <div class="p-3 from rounded bg-white">
        <form @submit.prevent="submitData()" class="py-3">
          <div class="header">
            <h1>Hello there Welcome to Back</h1>
          </div>
          <div class="body">
            <div class="py-3">
              <div class="position-relative">
                <input
                  :class="printClass(checkEmailInput)"
                  class="px-2 py-2 w-100 border-0 border-bottom"
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
            <div class="py-3">
              <div class="position-relative">
                <input
                  :class="printClass(checkPasswordInput)"
                  class="border-0 border-bottom px-2 py-2 w-100 d-block"
                  type="password"
                  name="password"
                  v-model="password"
                  id="password"
                  @blur="checkPassword()"
                />
                <label class="position-absolute" for="password">Password</label>
              </div>
            </div>
            <div class="pb-2 text-end">
              <router-link to="/" class="text-decoration-none text-capitalise"
                >forget your password</router-link
              >
            </div>
          </div>
          <div class="footer pt-3">
            <div class="pt-3">
              <button
                type="submit"
                :disabled="check"
                class="
                  w-100
                  py-2
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
            <div class="pt-3">
              <span>Don't have an account?</span>
              <router-link to="/" class="text-decoration-none">
                Register
              </router-link>
            </div>
          </div>
        </form>
      </div>
      <div
        v-if="Boolean(Object.keys(this.objAlert).length)"
        class="res-alert position-relative"
      >
        <Alert @emptyObjAlert="emptyObjAlert" :objAlert="objAlert" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Alert from "../components/global/alert.vue";
export default {
  name: "SingIn",
  data() {
    return {
      checkEmailInput: "",
      checkPasswordInput: "",
      check: false,
      password: "",
      name: "",
      objAlert: {},
    };
  },
  components: {
    Alert,
  },

  methods: {
    fetchCategories(url) {
      return axios({
        method: "get",
        url: url,
      });
    },
    submitData() {
      this.checkPassword();
      this.checkEmail();
      if (!this.checkEmailInput) {
        return;
      }
      if (!this.checkPasswordInput) {
        return;
      }
      this.check = !this.check;
      axios
        .post("http://localhost:3000/login-client/", {
          email: this.name,
          password: this.password,
        })
        .then((response) => {
          this.name = "";
          this.password = "";
          this.check = !this.check;
          console.log(response.data.hasOwnProperty("_IdC"));
          if (response.data.hasOwnProperty("_IdC")) {
            localStorage.setItem("clientId", response.data._IdC);
            localStorage.setItem("clientName", response.data._name);
            localStorage.setItem("clientId", response.data._IdC);
            localStorage.setItem("clientImage", response.data._image);
            localStorage.setItem("clientEmail", response.data._email);
            setTimeout(() => {
              this.$router.push("/");
            });
            this.objAlert.nameClass = "alert-success";
            return (this.objAlert.message = "login is  successfully");
          }
          this.objAlert.nameClass = "alert-warning";
          this.objAlert.message = "This Compte not exists";
        })
        .catch((error) => {
          this.check = !this.check;
          console.log(error);
        });
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
    checkPassword() {
      if (this.password === "") {
        this.checkPasswordInput = false;
        return;
      }
      this.checkPasswordInput = true;
    },
    printClass(nameValue) {
      if (nameValue === "") return "";
      if (nameValue) return "sec-input";
      return "err-input";
    },
    emptyObjAlert() {
      this.objAlert = {};
    },
  },
};
</script>

<style scoped>
.sing-in {
  height: 100vh;
  width: 100vw;
  background: url("../assets/images/world.png") no-repeat 100%;
}
.back-home {
  top: 20px;
  right: 40px;
  background-color: var(--second);
  color: var(--bc-white) !important;
}
.sing-in .from {
  min-width: 280px;
  max-width: 280px;
  min-height: 320px;
  box-shadow: -2px 20px 100px 400px rgba(0, 0, 0, 0.2);
}

h1 {
  color: var(--second);
  font-size: 26px;
  line-height: 1.8;
}
a {
  color: var(--primary) !important;
  font-size: 12px !important;
  font-weight: bold;
}

input {
  outline: none;
  border-bottom-width: 2px !important;
  border-bottom-color: #747a7a;
}
input.err-input {
  border-bottom-color: #f72003 !important;
}
input.err-input + label {
  color: #f72003 !important ;
  top: -10px;
  left: 10px;
}
input:focus,
input.sec-input {
  border-bottom-color: var(--primary) !important;
}
label {
  font-size: 12px;
  top: 15px;
  left: 15px;
  transition: 0.3s ease-in;
  font-weight: bold;
  cursor: pointer;
  color: #747a7a;
}
input:focus + label,
input.sec-input + label {
  top: -10px;
  left: 10px;
  color: var(--primary);
}

.footer div:last-child {
  font-size: 12px !important;
  color: #747a7a;
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
</style>
