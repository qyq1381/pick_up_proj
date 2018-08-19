<template>
  <td>
    <a :href=LinkTo><slot></slot></a>
  </td>
</template>
<script>

  export default {
    name:'table_data',
    props:{
      LinkTo:String
    },
    
  }

</script>
<style scoped>
  td {
  padding: 5px;
  text-align: start;
  }
  a {
    text-decoration: none;
    color:#a4a4a5;
  }
  a:hover {
  text-decoration: underline;
}
</style>