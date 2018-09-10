<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Company Name</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  

  <!--
  <a href="./Form" class="NavItem">Form</a>
  <a href="./AboutUs" class="NavItem">About Us</a>
  <a href="./FAQ" class="NavItem">FAQ</a>
  <div style="flex:1;"></div>

  <navbar_icon IconClass="fa fa-comments fa-lg">Chat</navbar_icon>
  <navbar_icon IconClass="fa fa-phone fa-lg">(666)666-6666</navbar_icon>
  <a href="./LogIn" class="NavItem">LogIn/Register</a>
      -->


</template>
<script>
  import navbar_icon from "../components/NavBar/NavBar_icon.vue";

  export default {
    name: "navbar",
    components: {
      navbar_icon
    },
  };
</script>

<style scoped>
  #Logo {
    display: flex;
    align-items: center;
    margin: 1rem 15px 1rem 0;
  }

  #NavLogo:hover {
    text-decoration: none;
    color: white;
  }

  .NavItem {
    color: white;
    background-color: #0c79b8;
    padding: 1.85rem 1rem 1.9rem 1rem;
    border: hidden;
    font-size: 1.25rem;
    text-decoration: none;
    box-sizing: padding-box;
    min-width: 3.5%;
  }

    .NavItem:hover {
      text-decoration: none;
      color: white;
      background-color: #0b6da5;
    }

  #NavBar {
    position: relative;
    display: flex;
    z-index: 6666;
    width: 100%;
    border-width: 0 0 4px 0;
    border-style: solid;
    border-color: #0c68b8;
    background-color: #0c79b8;
    align-items: stretch;
  }
</style>
