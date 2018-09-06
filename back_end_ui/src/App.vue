<template>
  <div id="app">
    <v-app id="inspire">

      <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <backFooter></backFooter>
    </v-app>
  </div>
</template>

<script>
import backFooter from './components/footer/backFooter'

export default {
  name: 'App',
  components: {
    backFooter,
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
