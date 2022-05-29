<template>
  <div class="page-app d-flex flex-column">
    <Header />
    <div
      class="page-app sing-in d-flex justify-content-center align-items-center"
    >
      <div class="content">
        <div class="p-3 form border rounded bg-white">
          <div class="py-3">
            <h2 class="fw-bold fs-1 text-capitalize">Sign Up</h2>
            <span class="font-14">It's quick and easy.</span>
          </div>
          <div class="">
            <form @submit.prevent="submitData()" class="">
              <Texts name="First" :errText="isErrFirst" ref="first" />
              <Texts name="Last" :errText="isErrLast" ref="last" />
              <Email :errEmail="isErrEmail" ref="email" />
              <Password :errPassword="isErrPassword" ref="password" />
              <Button name="Sign Up" :check="isCheck" />
              <ChangePage name="sing in" path="/sing-in" />
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
import User from "@/helpers/use/ClassUser.js";
import Header from "@/components/sing-in-up/Header.vue";
import Texts from "@/components/form/Text.vue";
import Email from "@/components/form/Email.vue";
import Password from "@/components/form/Password.vue";
import Button from "@/components/form/Button.vue";
import ChangePage from "@/components/form/ChangePage.vue";
import Alert from "@/components/global/alert.vue";
import Footer from "@/components/sing-in-up/Footer.vue";
export default {
  name: "SingUp",
  data() {
    return {
      isCheck: false,
      isErrFirst: true,
      isErrLast: true,
      isErrEmail: true,
      isErrPassword: true,
      alert: [],
      user: new User("", "", "", "", "http://localhost:3000/login-client/"),
    };
  },
  components: {
    Header,
    Texts,
    Email,
    Password,
    Button,
    ChangePage,
    Alert,
    Footer,
  },
  methods: {
    submitData() {
      if (this.isCheck) return;

      if (!this.isErrPassword || !this.isErrEmail) return this.emptyObjAlert();

      this.user.firstName = this.$refs.first.$refs.First.value;
      this.user.lastName = this.$refs.last.$refs.Last.value;
      this.user.email = this.$refs.email.$refs.email.value;
      this.user.password = this.$refs.password.$refs.password.value;

      let { valid: validFirst, message: messageFirst } =
        this.user.checkString();
      let { valid: validLast, message: messageLast } =
        this.user.checkString(false);

      let { valid: validEmail, message: messageEmail } = this.user.checkEmail();
      let { valid: validPassword, message: messagePassword } =
        this.user.checkPassword();

      if (!validFirst) {
        this.alert.push(messageFirst);
        this.isErrFirst = !this.isErrFirst;
      }

      if (!validLast) {
        this.alert.push(messageLast);
        this.isErrLast = !this.isErrLast;
      }

      if (!validEmail) {
        this.alert.push(messageEmail);
        this.isErrEmail = !this.isErrEmail;
      }

      if (!validPassword) {
        this.alert.push(messagePassword);
        this.isErrPassword = !this.isErrPassword;
      }

      if (!validFirst || !validLast || !validEmail || !validPassword) return;

      this.isCheck = true;
    },
    emptyAlert() {
      this.alert = [];
      this.isErrFirst = true;
      this.isErrLast = true;
      this.isErrEmail = true;
      this.isErrPassword = true;
    },
  },
};
</script>

<style>
</style>
