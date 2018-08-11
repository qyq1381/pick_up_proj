<template>
  <div>
    <select v-model="selectedDrink" @change="selectDrink">
      <option hidden disabled value="-1">SelectDrink</option>
      <option v-for="(drink,index) in drinks" :value="index">{{ drink.label }}</option>
    </select>

    <select v-model="selectedOption" >
      <option disabled :value="selectedOption" v-if="selectedOption==''">SelectSubDrink</option>
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
        selectedDrinkLabel: ''
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
      }
    }
  }
</script>
<style>
</style>
