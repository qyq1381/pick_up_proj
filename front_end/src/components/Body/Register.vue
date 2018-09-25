<template>
<v-container>
  <v-icon size="100px">add</v-icon> <!-- company brand-->
  <h1 display-4>Let's get started</h1>
  <v-form>
    <v-textfield>
      
    </v-textfield>
  </v-form>
</v-container>
  <!-- <div id="Register">
    <div id="registerbox">
      <h2>Register Your Account</h2>
      <input v-model="username" type="text" class="textbox" placeholder="Username">
      <input v-model="password" type="password" class="textbox" placeholder="Password">
      <input v-model="passwordVerify" type="password" class="textbox" placeholder="Verify Your Password">
      <input v-model="phoneNumber" class="textbox" placeholder="Phone Number">
      <input v-model="email" class="textbox" placeholder="Email">
      <button id="registerbutton" @click="register">Register</button>
    </div>
    <div class="error" v-html="error">jklkj</div>
  </div> -->
</template>
<script>
import AuthenticationService from "../../services/AuthenticationService";
import Panel from "./panel";
export default {
  data: function() {
    return {
      userName: "",
      password: "",
      passwordVerify: "",
      phoneNumber: "",
      email: "",
      error: null
      // NameError: false,
      // passwordError: false,
      // passwordVerifyError: false,
      // phoneNumberError: false,
      // emailError: false,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          phone: this.phone,
          userName: this.username
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
<style scoped>
.Error {
  border-color: red;
}
.error {
  color: red;
}
</style>
