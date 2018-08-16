<template>
  <div id="NavBar">

    <a href="/" id="NavLogo"><img src="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/JMCLogo.png" /></a>
    <a href="./Form" class="NavItem">Form</a>
    <a href="./AboutUs" class="NavItem">About Us</a>
    <a href="./FAQ" class="NavItem">FAQ</a>

    <div style="flex:1;"></div>

    <a href="./LogIn" class="NavItem">LogIn/Register</a>
    <navbar_icon IconClass="fa fa-comments fa-lg">Chat</navbar_icon>
    <navbar_icon IconClass="fa fa-phone fa-lg">(666)666-6666</navbar_icon>

  </div>

  <!--
  <transition name="slide-fade">
    <navbar_dropdown v-if="ShowNav"></navbar_dropdown>
  </transition>
  -->

</template>
<script>

  import navbar_icon from "../components/NavBar/NavBar_icon.vue"

  export default {
    name: 'navbar',
    components: {
      navbar_icon,
    },
    data: function () {
      return {
        ShowNav: false,
      }
    }
  }

</script>
<style scoped>
  #NavLogo {
    display: flex;
    align-items: center;
    margin-right: 15px;
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
  /*
  .slide-fade-enter-active {
    transition: all .8s;
  }

  .slide-fade-leave-active {
    transition: all .8s;
  }

  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 \*\/ {
    transform: translateY(-100% );
  }
  */
</style>
