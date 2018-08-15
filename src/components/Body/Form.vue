<template>
  <div id="form">
    <h1>First, tell us about your junker.</h1>
    <h4>Then, make cash in seconds.</h4>
    <div class="selectcontainer">

      <select v-model="selectState" class="lgselectbox" @change="ChangeState" :disabled="false">
        <option hidden disabled :value="selectState" v-if="selectState==''">Select State</option>
        <option v-for="(Cites,state) in States">{{state}}</option>
      </select>

      <select v-model="selectCity" class="lgselectbox" @change="ChangeCity" :disabled="selectState==''">
        <option hidden disabled :value="selectCity" v-if="selectCity==''">Select City</option>
        <option v-for="(Airports,city) in Cities">{{city}}</option>
      </select>

      <select v-model="selectAirport" class="lgselectbox" @change="ChangeAirport" :disabled="selectCity==''">
        <option hidden disabled :value="selectAirport" v-if="selectAirport==''">Select Airport</option>
        <option v-for="airport in Airports">{{airport}}</option>
      </select>

    </div>
    <button id="submitbutton" @click="submitvalue(selectState,selectCity,selectAirport)" :class="[selectAirport=='' ? 'disableBTN' : 'enableBTN' ]" :disabled="selectAirport==''">Continue</button>
  </div>
</template>
<script>
  import airport from '../../../static/airport.json'
  export default {
    name: 'input_form',

    components: {
    },

    data: function () {
      return {
        FindAirport: airport,
        States: airport,
        Cities: '',
        Airports: '',
        selectState: '',
        selectCity: '',
        selectAirport: '',
      }
    },

    methods: {
      ChangeState: function () {
        this.Cities = this.FindAirport[this.selectState];
        this.selectCity = '';
        this.selectAirport = '';
      },

      ChangeCity: function () {
        this.Airports = this.FindAirport[this.selectState][this.selectCity];
        this.selectAirport = '';
      },

      ChangeAirport: function () {
        return undefined;
      },
      submitvalue: function (state_v, city_v, airport_v) {
        let data = {
          "state": state_v,
          "city": city_v,
          "airport": airport_v,
        }

        this.$http.post('http://localhost:3000/todos', data).then((response) => {
          console.log("success");
        }, (error) => {
          console.log("failed");
        });
        alert(state_v + '--' + city_v + '--' + airport_v);
      },

    }
  }
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

  h1, h4 {
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

  .disableBTN, .enableBTN {
    margin: 0 0 40px 0;
    padding: .75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    color: #fff;
    background-color: #f0ad4e;
    border-color: #f0ad4e;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
  }
  .enableBTN:hover{
    cursor:pointer;
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
