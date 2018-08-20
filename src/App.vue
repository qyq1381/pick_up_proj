<template>
  <div id="app">
    <navbar></navbar>
    <router-view style="flex-grow:1"></router-view>
    <footer_main></footer_main>
  </div>
</template>

<script>
import navbar from "./components/NavBar.vue";
import footer_main from "./components/footer.vue";

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
