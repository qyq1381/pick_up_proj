<template>
  <div id="app">
    <v-app id="inspire">
      <!-- <img src="./assets/logo.png"> -->
      <backNav/>
      <queryByFlight/>
      <querySumPassenger/>
      <backFooter/>
    </v-app>
  </div>
</template>

<script>
import backNav from "./components/navbar/backNav";
import queryByFlight from "./components/body/queryByFlight";
import querySumPassenger from "./components/body/querySumPassenger";
import backFooter from "./components/footer/backFooter";

export default {
  name: "App",
  components: {
    backNav,
    queryByFlight,
    querySumPassenger,
    backFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
