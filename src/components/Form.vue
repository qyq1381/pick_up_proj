<template>
  <div>
    <h1>First, tell us about your junker.</h1>
    <h4>Then, make cash in seconds.</h4>
    <select v-model="selectedYear">
      <option hidden disabled :value="selectedYear" v-if="selectedYear==''">Select Year</option>
      <option v-for="year in YearArrary()" value="year">{{year}}</option>
    </select>
    <select v-model="selectedDrink" @change="selectDrink">
      <option hidden disabled value="-1">SelectDrink</option>
      <option v-for="(drink,index) in drinks" :value="index">{{ drink.label }}</option>
    </select>

    <select v-model="selectedOption">
      <option hidden disabled :value="selectedOption" v-if="selectedOption==''">SelectSubDrink</option>
      <option v-for="option in options">{{ option }}</option>
    </select>

    <p v-if="selectedOption">
      You selected a {{ selectedDrinkLabel }} and specifically {{ selectedOption }}.
    </p>
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

        selectedDrink: -1,
        selectedOption: '',
        options: [],
        selectedDrinkLabel: '',
        selectedYear:'',
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
      }

    }
  }
</script>
<style>
</style>
