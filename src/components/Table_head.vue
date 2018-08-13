<template>
  <tr>
    <th><slot></slot></th>
  </tr>
</template>
<script>

  export default {
    name:'table_head',
  }

</script>
<style scoped>
  th {
  padding: 5px;
  text-align: start;
  }
</style>