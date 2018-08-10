<template>
  <select>
    <option v-for="item in option" :value="item">{{item}}</option>
  </select>
</template>
<script>
  export default {
    name: 'form_select_new',
    components: {
    },
    props: {
      option: String
    },
    data: function () {
      return {
        make
      }
    }
  }
</script>
