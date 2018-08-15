<template>
  <div id="app">
    <navbar></navbar>
<<<<<<< Updated upstream
    <input_form></input_form>
=======
    <router-view></router-view>
    <footer_main></footer_main>
>>>>>>> Stashed changes
  </div>
</template>

<script>
  import navbar from './components/NavBar.vue'
<<<<<<< Updated upstream
  import input_form from './components/Form.vue'
=======
  import footer_main from './components/footer.vue'
>>>>>>> Stashed changes
  export default {
    name: 'App',
    components: {
      navbar,
<<<<<<< Updated upstream
      input_form,
=======
      footer_main
>>>>>>> Stashed changes
    }

  }
</script>

<style>
  #app {
    font-family: 'Hind', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
