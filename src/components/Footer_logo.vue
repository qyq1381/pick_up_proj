<template>
 <div>
    <img :src=LogoPath alt="footer-logo">
    <span><slot></slot></span>
</div>
      
</template>
<script>
  export default {
      name: 'footer_logo',
      props: {
        ClickLogo: String,
        LogoPath: String
      }
  }

</script>

<style scoped>
 div {
   float:left;
 }
 span {
  padding: 0px 10px 0px 10px;
}
</style>