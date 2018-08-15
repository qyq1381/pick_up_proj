<template>
<section id="main-section">
<br>
  <h1>{{title}}</h1>
  <div id="intro">
    <slot></slot>
  </div>
</section>
</template>
<script>
  
  export default {
    name:'process_frame',
    props:{
      title:String,
    }
   
  }

</script>
<style scoped>
#main-section {
  color:grey;
  background-color: #e4fdfc;
} 
#intro {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  padding: 2% 5% 0 5%;
  grid-gap: 40px 70px;
}
h1 {
display: flex;
justify-content: center;
font-size: 35px;
}
</style>