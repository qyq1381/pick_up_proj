<template>
  <div id="login">
    <div id="loginbox">
      <h1>User Login</h1>
      <h5>Please enter your username and password</h5>
      <input v-model="username" class="textbox" placeholder="Username">
      <input v-model="password" type="password" class="textbox" placeholder="Password">
      <a href="/forgetpassword">Forget your password?</a>
      <div id="Registerbox">Do not have an Account? <a href="/Register">Register here</a></div>
      <div id="RememberMebox"><input type="checkbox" v-model="rememberuser">Remember Me</div>
      <button id="loginbutton">LogIn</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",

  components: {},

  data: function() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
#login {
  display: flex;
  background-color: lightgreen;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#loginbox {
  width: 380px;
  height: 540px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-content: center;
}
h1 {
  margin-top: 4rem;
  margin-bottom: 0;
}
h5 {
  margin-top: 1rem;
  margin-bottom: 2rem;
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
a {
  margin-top: 2rem;
}
#Registerbox {
  margin-top: 1rem;
}
#RememberMebox {
  margin-top: 2rem;
}
#loginbutton {
  margin: 2rem 7rem 0 7rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
}
</style>
