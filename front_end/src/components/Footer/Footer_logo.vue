<template>
 <div id="Footer_Logo">
    <img :src=LogoPath alt="footer-logo">
    <span><slot></slot></span>
</div>
</template>

<script>
export default {
  name: "footer_logo",
  props: {
    LogoPath: String
  }
};
</script>

<style scoped>
  #Footer_Logo {
    display: flex;
    align-items: center;
  }
</style>
