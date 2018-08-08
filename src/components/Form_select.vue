<template>
  <select v-model="SelectValue" @change="$emit('change')">
    <option disabled value=""><slot></slot></option>
    <option v-for="option in selectfrom" v-bind:value="option.value">
      {{option.text }}
    </option>
  </select>
</template>
<script>
  export default {
    name: 'form_select',
    props: { selectfrom: Array },
    components: {

    },
    data: function () {
      return {
        SelectValue:''
      }
    }
  }
</script>
<style>
</style>
