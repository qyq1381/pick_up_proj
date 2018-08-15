<template>
  <div id="footer-link">
    <slot></slot>
  </div>
      
</template>
<script>

  export default {
    name: 'footer_frame'
  }

</script>
<style scoped>
  #footer-link{
   display:inline-block;
  }
  #footer-link {
    display:flex;
    float:right;
  }
</style>