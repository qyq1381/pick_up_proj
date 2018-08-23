<template>
  <div id="Register">
    <div id="registerbox">
      <h2>Registe Your Account</h2>
      <input v-model="username" type="text" :class="{'textbox':true,'Error':NameError}" placeholder="Username">
      <input v-model="password" type="password" :class="{'textbox':true,'Error':passwordError}" placeholder="Password">
      <input v-model="passwordVerify" type="password" :class="{'textbox':true,'Error':passwordVerifyError}" placeholder="Verify Your Password">
      <input v-model="phoneNumber" :class="{'textbox':true,'Error':phoneNumberError}" placeholder="Phone Number">
      <input v-model="email" :class="{'textbox':true,'Error':emailError}" placeholder="Email">
      <button id="registerbutton" @click="registe">Registe</button>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        username: '',
        password: '',
        passwordVerify: '',
        phoneNumber: '',
        email: '',

        NameError: false,
        passwordError: false,
        passwordVerifyError: false,
        phoneNumberError: false,
        emailError: false,
      }
    },
    methods: {
      registe: function () {
        [this.username == '' ? this.NameError = true : this.NameError = false];
        [this.password == '' ? this.passwordError = true : this.passwordError = false];
        [this.passwordVerify != this.password ? this.passwordVerifyError = true : this.passwordVerifyError = false];
        [this.phoneNumber == '' ? this.phoneNumberError = true : this.phoneNumberError = false];
        [this.email == '' ? this.emailError = true : this.emailError = false];
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
</style>
