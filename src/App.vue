<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footer_main></footer_main>

  </div>
</template>

<script>
  import navbar from './components/NavBar.vue'

  import footer_main from './components/footer.vue'

  export default {
    name: 'App',
    components: {
      navbar,

      footer_main

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
