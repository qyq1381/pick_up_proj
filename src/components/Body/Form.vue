<template>
  <div id="form">
    <h1>First, tell us about your junker.</h1>
    <h4>Then, make cash in seconds.</h4>
    <div class="SelectContainer">

      <div>First Name:<input v-model="firstName" class="inputbox" /></div>
      <div>Last Name:<input v-model="lastName" class="inputbox" /></div>
      <div>Phone Number:<input v-model="phone" class="inputbox" /></div>
      <div>Flight Number:<input v-model="flightNumber" class="inputbox" /></div>
      <div>Number of passenger:<input v-model="numpassenger" class="inputbox" /></div>
      <div>Weight of luggage:<input v-model="luggage" class="inputbox"  /></div>
    </div>
    <button id="submitbutton" @click="" :class="[selectAirport=='' ? 'disableBTN' : 'enableBTN' ]" >Continue</button>
  </div>
</template>

<script>
import airport from "../../../static/airport.json";
import eventmethods from '../../api/eventmethods.js';
export default {
  name: "input_form",

  components: {},

  data: function() {
    return {
      FindAirport: airport,
      States: airport,
      Cities: "",
      Airports: "",
      selectState: "",
      selectCity: "",
      selectAirport: ""
    };
  },

  methods: {
    ChangeState: function() {
      this.Cities = this.FindAirport[this.selectState];
      this.selectCity = "";
      this.selectAirport = "";
    },

    ChangeCity: function() {
      this.Airports = this.FindAirport[this.selectState][this.selectCity];
      this.selectAirport = "";
    },

    ChangeAirport: function() {
      return undefined;
    },
    sendeventform:eventmethods.sendeventform,
    submitvalue: function(state_v, city_v, airport_v) {
      this.sendeventform(state_v, city_v, airport_v);
    }
  }
};
</script>

<style scoped>
h1 {
  padding: 100px 0 0 0;
  font-size: 2.5rem;
}

h4 {
  padding: 30px 0 0 0;
  font-size: 1.5rem;
}

h1,
h4 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

select {
  font-size: 1rem;
}

.smselectbox {
  display: inline-block;
  padding: 15px 20px;
  margin: 0 3px;
  width: 8%;
}

.lgselectbox {
  display: inline-block;
  padding: 15px 20px;
  margin: 0 3px;
  width: 15%;
}

.disableBTN,
.enableBTN {
  margin: 0 0 40px 0;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
}
.enableBTN:hover {
  cursor: pointer;
}
.selectcontainer {
  padding: 40px 0 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

#form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
