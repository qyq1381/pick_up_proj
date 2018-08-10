<template>
  <div>
    <h1>First, tell us about your junker.</h1>
    <h4>Then, make cash in seconds.</h4>

    <select id="yearId" class="smSelectBox">
      <option class="display-none">Year</option>
    </select>
    <form_select_new :option="Make"></form_select_new>
    <form_select :selectfrom="Model" :disabled="makechange=='false'" @change="modelchange='true'">Select Model</form_select>
    <form_select :selectfrom="Trim" :disabled="modelchange=='false'">Select Trim</form_select>
    <input type="text" id="zipcode" class="smSelectBox" placeholder="ZIP" maxlength="5" pattern="\d*" title="zipcode" />

    <button id="submitbutton" type="button" class="btn btn-warning btn-lg">Continue</button>

  </div>
</template>
<script>
  import Option from "../../static/option.json"
  import form_select from './Form_select.vue'
  import form_select_new from './Form_select_new.vue'
  import form_submit from './Form_submit.vue'
  export default {
    name: 'input_form',
    components: {
      form_select,
      form_submit,
      form_select_new
    },
    data: function () {

      return {
        Make: Option.Make,
        makechange: 'false',
        modelchange:'false',
      }
    }
  }
</script>
<style>
</style>
