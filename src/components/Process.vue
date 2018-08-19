<template>
  <div id="first">
    <img :src="LinkTo" alt="alt">
      <h2>{{title}}</h2>
    <p>{{text}}</p>
  </div>
</template>
<script>
  export default {
    name:'process',
    props:{
      LinkTo:String,
      title:String,
      text:String,
      alt:String
    }
  }
</script>
<style scoped>
  img, h2{
    padding: 0 0 7% 0;
}
</style>