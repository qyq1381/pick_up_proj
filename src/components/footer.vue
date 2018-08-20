<template>
<div id="footer">
  <footer_logo ClickLogo="#" LogoPath="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/JMCLogoFooter.png">© Junk my Car, LLC. 2018</footer_logo>
  <footer_frame>
    <footer_link LinkTo="#">Sell junk car</footer_link>
    <footer_link LinkTo="#">About us</footer_link>
    <footer_link LinkTo="#">Junk it</footer_link>
    <footer_link LinkTo="#">FAQ</footer_link>
    <footer_link LinkTo="#">Terms</footer_link>
    <footer_link LinkTo="#">Privacy</footer_link>
    <footer_link LinkTo="#">Site map</footer_link>
    </footer_frame>
</div>
</template>
<script>
import footer_logo from "./Footer_logo.vue"
import footer_link from "./Footer_link.vue"
import footer_frame from "./Footer_frame.vue"
  export default {
      name:'footer_main',
      components: {
        footer_logo,
        footer_link,
        footer_frame
      }
  }

</script>
<style scoped>
  .footer { 
    display: flex;
    align-items:center;
    justify-content: space-between;
  }

</style>
