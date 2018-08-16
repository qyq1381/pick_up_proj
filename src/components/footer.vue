<template>

  <div id="footer">

    <footer_logo ClickLogo="#" LogoPath="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/JMCLogoFooter.png">© Junk my Car, LLC. 2018</footer_logo>
    <div style="flex-grow:1"></div>
    <a href="/" class="FooterItem">Sell junk car</a>
    <a href="/AboutUs" class="FooterItem">About us</a>
    <a href="/JunkIt" class="FooterItem">Junk it</a>
    <a href="/FAQ" class="FooterItem">FAQ</a>
    <a href="/Terms" class="FooterItem">Terms</a>
    <a href="/Privacy" class="FooterItem">Privacy</a>
    <a href="/SiteMap" class="FooterItem">Site map</a>

  </div>
</template>

<script>

  import footer_logo from "../components/Footer/Footer_logo.vue"

  export default {
    name: 'footer_main',
    components: {
      footer_logo,
    }
  }

</script>

<style scoped>


  #footer {
    display: flex;
  }

  .FooterItem {
    padding: 1.5rem 1rem 1.3rem 1rem;
    color: #a4a4a5;
    text-decoration: none;
  }

    .FooterItem:hover {
      text-decoration: none;
      color: white;
      background-color: gray;
    }
</style>

