<template>
  <div
    class="sing-in d-flex justify-content-center align-content-center flex-wrap"
  >
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
                  class="px-2 py-2 w-100 border rounded border-2"
                  type="email"
                  name="email"
                  v-model="email"
                  id="email"
                  @blur="checkEmail()"
                />
                <label for="email" class="bg-white position-absolute"
                  >Address Email</label
                >
              </div>
            </div>
            <div class="py-3">
              <div class="position-relative">
                <input
                  :class="printClass(checkPasswordInput)"
                  class="border-2 rounded px-2 py-2 w-100 d-block"
                  type="password"
                  name="password"
                  v-model="password"
                  id="password"
                  @blur="checkPassword()"
                />
                <label class="position-absolute bg-white" for="password"
                  >Password</label
                >
              </div>
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AdminSingIn",
  data() {
    return {
      checkEmailInput: "",
      checkPasswordInput: "",
      check: false,
      password: "",
      email: "",
    };
  },
  components: {},
  methods: {
    checkEmail() {
      if (
        !this.email.includes("@") ||
        !this.email.includes(".") ||
        this.email === null
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
    submitData() {
      this.checkPassword();
      this.checkEmail();
      if (!this.checkEmailInput) return;
      if (!this.checkPasswordInput) return;
      this.check = !this.check;
      axios
        .post("http://localhost:3000/com-data", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.check = !this.check;
          if (
            response.data instanceof Object &&
            Object.entries(response.data).length
          ) {
            if (Object.hasOwn(response.data, "message")) {
              this.checkEmailInput = !this.checkEmailInput;
              this.checkPasswordInput = !this.checkPasswordInput;
              console.log(response.data);
              return;
            }
            if (Object.hasOwn(response.data, "_name")) {
              localStorage.setItem("admin", JSON.stringify(response.data));
              this.$router.push("/dachboard")
            }
          }
        })
        .catch((error) => {
          this.check = !this.check;
          console.log(error);
        });
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
.sing-in {
  height: 100vh;
  width: 100vw;
  background-color: var(--second);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
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
input {
  outline: none;
}
input.err-input {
  border-color: #f72003 !important;
}
input.err-input + label {
  color: #f72003 !important ;
  top: -10px;
  left: 10px;
}
input:focus,
input.sec-input {
  border-color: var(--primary) !important;
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
  font-size: 16px;
  text-transform: capitalize;
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
