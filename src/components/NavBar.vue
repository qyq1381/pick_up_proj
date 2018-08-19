<template>
  <div id="NavBar">
    <div id="NavItem_conatiner">
      <navbar_logo LogoPath="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/JMCLogo.png" ClickLogo="#"></navbar_logo>
      <navbar_link LinkTo="#" @click="ShowNav=!ShowNav">DropDown</navbar_link>
      <navbar_link LinkTo="#">About us</navbar_link>
      <navbar_link LinkTo="#">&nbsp;FAQ&nbsp;&nbsp;</navbar_link>
      <navbar_expandwidth></navbar_expandwidth>
      <navbar_icon IconClass="fa fa-comments fa-lg">Chat</navbar_icon>
      <navbar_icon IconClass="fa fa-phone fa-lg">(666)666-6666</navbar_icon>
    </div>
    <transition name="slide-fade">
      <navbar_dropdown v-if="ShowNav"></navbar_dropdown>
      </transition>
  </div>
</template>
<script>
  import navbar_icon from "./NavBar_icon.vue"
  import navbar_link from "./NavBar_link.vue"
  import navbar_logo from "./NavBar_logo.vue"
  import navbar_expandwidth from "./NavBar_expandwidth.vue"
  import navbar_dropdown from "./navbar_dropdown.vue"

  export default {
    name: 'navbar',
    components: {
      navbar_icon,
      navbar_link,
      navbar_logo,
      navbar_expandwidth,
      navbar_dropdown,
    },
    data: function () {
      return {
        ShowNav: false,
      }
    }
  }
</script>
<style scoped>
  #NavItem_conatiner {
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
  .slide-fade-enter-active {
    transition: all .8s;
  }

  .slide-fade-leave-active {
    transition: all .8s;
  }

  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-100% );
  }
</style>
