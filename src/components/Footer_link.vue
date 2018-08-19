<template>
      <a :href="LinkTo" @click="onClick" id="link"><span><slot></slot></span></a>
</template>
<script>
  export default {
    name: 'footer_link',
    props: {
      LinkTo: String,
    },
    methods: {
      onClick: function () {
        this.$emit('click')//有点意思
      }
    }
  }

</script>
<style scoped>

  a {
    padding: 1.85rem 1rem 1.9rem 1rem;
    color:#a4a4a5;
    text-decoration: none;
    }

 a:hover {
    padding: 1.85rem 1rem 1.9rem 1rem;
    text-decoration: none;
    color: white;
    background-color: gray;
    }
 
</style>