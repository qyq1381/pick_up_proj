<template>
  <div id="form">
    <h1>First, tell us about your junker.</h1>
    <h4>Then, make cash in seconds.</h4>
    <div class="selectcontainer">
      <select v-model="selectedYear" class="smselectbox">
        <option hidden disabled :value="selectedYear" v-if="selectedYear==''">Select Year</option>
        <option v-for="year in YearArrary()" :value="year">{{year}}</option>
      </select>
      <select v-model="selectedDrink" @change="selectDrink" class="lgselectbox">
        <option hidden disabled :value=selectedDrink v-if="selectedDrink==''">SelectDrink</option>
        <option v-for="(drink,index) in drinks" :value="index">{{ drink.label }}</option>
      </select>

      <select v-model="selectedOption" class="lgselectbox">
        <option hidden disabled :value="selectedOption" v-if="selectedOption==''">SelectSubDrink</option>
        <option v-for="option in options">{{ option }}</option>
      </select>
    </div>
    <button id="submitbutton" @click="submitvalue(selectedYear,selectedDrink,selectedOption)">Continue</button>
  </div>
</template>
<script>

  export default {
    name: 'input_form',
    components: {
    },
    data: function () {

      return {
        drinks: [
          {
            label: "Beer",
            options: ["Sam Adams", "Anchor Steam", "St. Arnold"]
          },
          {
            label: "Soda",
            options: ["Pepsi", "Coke", "RC"]
          },
          {
            label: "Coffee",
            options: ["Starbucks", "Dunkin Donuts", "Gross Hotel Room"]
          }
        ],

        selectedDrink: '',
        selectedOption: '',
        options: [],
        selectedDrinkLabel: '',
        selectedYear: '',
      }
    },
    methods: {
      selectDrink: function () {
        this.selectedOption = '';
        this.options = this.drinks[this.selectedDrink].options;
        this.selectedDrinkLabel = this.drinks[this.selectedDrink].label;
      },
      getOption: function () {
        return this.selectedOption;
      },

      YearArrary: function () {
        let Year_Arrary = [];
        let endYear = new Date().getFullYear() + 1;
        while (endYear >= 1950) {
          Year_Arrary.push(endYear);
          endYear--;
        }
        return Year_Arrary
      },
      submitvalue: function (year_v, drink_v, option_v) {
        let data = {
          "year": year_v,
          "drink": this.drinks[drink_v].label,
          "option": option_v,
        }

        this.$http.post('http://localhost:3000/todos', data).then((response)=>{
          console.log("success");
        }, (error)=>{
          console.log("failed");
        });
        alert(data);
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

  button {
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
