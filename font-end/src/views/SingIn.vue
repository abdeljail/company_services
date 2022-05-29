<template>
  <div class="page-app d-flex flex-column">
    <Header />
    <div
      class="page-app sing-in d-flex justify-content-center align-items-center"
    >
      <div class="content">
        <div class="p-3 form border rounded bg-white">
          <div class="py-3">
            <h2 class="fw-bold fs-1 text-capitalize">Login</h2>
            <span class="font-14">Welcome to back in Company Services</span>
          </div>
          <div class="">
            <form @submit.prevent="submitData()" class="">
              <Email :errEmail="isErrEmail" ref="email" />
              <Password :errPassword="isErrPassword" ref="password" />
              <div>
                <strong class="login font-14 text-capitalize"
                  >forget password</strong
                >
              </div>
              <Button name="login" :check="isCheck" />
              <ChangePage name="create a new account" path="/sing-up" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />

    <Alert
      v-if="!isErrPassword || !isErrEmail"
      :Alert="alert"
      @emptyAlert="emptyAlert"
      className=""
    />
  </div>
</template>
<script>
import EmailPasswod from "@/helpers/use/ClassEmailPassword.js";
import Header from "@/components/sing-in-up/Header.vue";
import Email from "@/components/form/Email.vue";
import Password from "@/components/form/Password.vue";
import Button from "@/components/form/Button.vue";
import ChangePage from "@/components/form/ChangePage.vue";
import Alert from "@/components/global/alert.vue";
import Footer from "@/components/sing-in-up/Footer.vue";
export default {
  name: "SingIn",
  data() {
    return {
      isCheck: false,
      isErrEmail: true,
      isErrPassword: true,
      alert: [],
      user: new EmailPasswod("", "", "http://localhost:3000/login-client/"),
    };
  },
  components: {
    Password,
    Header,
    Email,
    Button,
    ChangePage,
    Alert,
    Footer,
  },
  methods: {
    submitData() {
      if (this.isCheck) return;

      if (!this.isErrPassword || !this.isErrEmail) return this.emptyObjAlert();

      this.user.email = this.$refs.email.$refs.email.value;
      this.user.password = this.$refs.password.$refs.password.value;

      let { valid: validEmail, message: messageEmail } = this.user.checkEmail();
      let { valid: validPassword, message: messagePassword } =
        this.user.checkPassword();

      if (!validEmail) {
        this.alert.push(messageEmail);
        this.isErrEmail = !this.isErrEmail;
      }

      if (!validPassword) {
        this.alert.push(messagePassword);
        this.isErrPassword = !this.isErrPassword;
      }

      if (!validEmail || !validPassword) return;

      this.isCheck = true;
    },
    emptyAlert() {
      this.alert = [];
      this.isErrPassword = true;
      this.isErrEmail = true;
    },
  },
};
</script>

<style>
strong.login {
  color: var(--second);
  cursor: pointer;
  font-size: 12px;
}
</style>
