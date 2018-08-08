<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
  import navbar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: {
      navbar,
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position:absolute;
    top:0;
    left:0;
    width:100%
  }
</style>
