<template>
  <div id="app">
    <navbar></navbar>
<<<<<<< HEAD
    <input_form></input_form>
    <table_main></table_main>
=======
    <router-view style="flex-grow:1"></router-view>
>>>>>>> fbe2d00266ef22cc9494e15ceb8edf0f57f1ae05
    <footer_main></footer_main>
  </div>
</template>

<script>
<<<<<<< HEAD
  import navbar from './components/NavBar.vue'
  import input_form from './components/Form.vue'
  import table_main from './components/table.vue'
  import footer_main from './components/footer.vue'
  export default {
    name: 'App',
    components: {
      navbar,
      input_form,
      table_main,
      footer_main
    }
=======
import navbar from "./components/NavBar.vue";
import footer_main from "./components/footer.vue";
>>>>>>> fbe2d00266ef22cc9494e15ceb8edf0f57f1ae05

export default {
  name: "App",
  components: {
    navbar,
    footer_main
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: "Hind", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
}
section {
  padding: 50px;
}
</style>
