<template>
  <div id="app">
    <navbar></navbar>
    <input_form></input_form>
  </div>
</template>

<script>
  import navbar from './components/NavBar.vue'
  import input_form from './components/Form.vue'
  export default {
    name: 'App',
    components: {
      navbar,
      input_form,
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
  }
</style>
