<template>
  <div>
    <h1>First, tell us about your junker.</h1>
    <h4>Then, make cash in seconds.</h4>

    <select id="yearId" class="smSelectBox">
      <option class="display-none">Year</option>
    </select>
    <form_select :selectfrom="Make" @change="makechange='true'">Select Make</form_select>
    <form_select :selectfrom="Model" :disabled="makechange=='false'" @change="modelchange='true'">Select Model</form_select>
    <form_select :selectfrom="Trim" :disabled="modelchange=='false'">Select Trim</form_select>
    <input type="text" id="zipcode" class="smSelectBox" placeholder="ZIP" maxlength="5" pattern="\d*" title="zipcode" />

    <button id="submitbutton" type="button" class="btn btn-warning btn-lg">Continue</button>

  </div>
</template>
<script>
  import form_select from './Form_select.vue'
  import form_submit from './Form_submit.vue'
  export default {
    name: 'input_form',
    components: {
      form_select,
      form_submit,
    },
    data: function () {

      return {
        makechange: 'false',
        modelchange:'false',
        Make: [
          { text: 'Make1', value: '1' },
          { text: 'Make2', value: '2' }
        ],
        Model: [
          { text: 'Model1', value: '1' },
          { text: 'Model2', value: '2' }],
        Trim: [
          { text: 'Trim1', value: '1' },
          { text: 'Trim2', value: '2' }],
      }
    }
  }
</script>
<style>
</style>
