<template>
  <div id="Register">
    <div id="registerbox">
      <h2>Register Your Account</h2>
      <!-- <input v-model="username" type="text" :class="{'textbox':true,'Error':NameError}" placeholder="Username">
      <input v-model="password" type="password" :class="{'textbox':true,'Error':passwordError}" placeholder="Password">
      <input v-model="passwordVerify" type="password" :class="{'textbox':true,'Error':passwordVerifyError}" placeholder="Verify Your Password">
      <input v-model="phoneNumber" :class="{'textbox':true,'Error':phoneNumberError}" placeholder="Phone Number">
      <input v-model="email" :class="{'textbox':true,'Error':emailError}" placeholder="Email"> -->
      <input v-model="username" type="text" class="textbox" placeholder="Username">
      <input v-model="password" type="password" class="textbox" placeholder="Password">
      <input v-model="passwordVerify" type="password" class="textbox" placeholder="Verify Your Password">
      <input v-model="phoneNumber" class="textbox" placeholder="Phone Number">
      <input v-model="email" class="textbox" placeholder="Email">
      <button id="registerbutton" @click="register">Register</button>
    </div>
    <div class="error" v-html="error">jklkj</div>
  </div>
</template>
<script>
  import AuthenticationService from '../../services/AuthenticationService'
  export default {
    data: function () {
      return {
        userName: '',
        password: '',
        passwordVerify: '',
        phoneNumber: '',
        email: '',
        error: null,
        // NameError: false,
        // passwordError: false,
        // passwordVerifyError: false,
        // phoneNumberError: false,
        // emailError: false,
      }
    },
    methods: {
      async register () {
        try { await AuthenticationService.register({
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          userName:this.username
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  }
</script>
<style scoped>
  #Register, #registerbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  #registerbox {
    
    background-color: lightblue;
  }

  .textbox {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    margin: 0 3rem 0.5rem 3rem;
  }
  #registerbutton {
    margin: 2rem 7rem 0 7rem;
    padding: .75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    color: #fff;
    background-color: #f0ad4e;
    border-color: #f0ad4e;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
  }
  .Error{
   border-color:red;
  }
  .error{
    color: red;
  }
</style>
