<template>
  <a :href="ClickLogo">
    <img :src="LogoPath" />
  </a>
</template>
<script>
  export default {
    name: 'navbar_logo',
    props: {
      ClickLogo: String,
      LogoPath: String,
    },
  }

</script>
<style scoped>
  a {
    display: flex;
    align-items: center;
    margin-right:15px;
  }
  a:hover {
    text-decoration: none;
    color: white;
  }
</style>
