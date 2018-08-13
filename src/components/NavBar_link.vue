<template>
  <a :href="LinkTo" @click="onClick"><slot></slot></a>
</template>
<script>
  export default {
    name: 'navbar_link',
    props: {
      LinkTo: String,
    },
    methods: {
      onClick: function () {
        this.$emit('click')
      }
    }
  }
</script>
<style scoped>
  a {
    color: white;
    background-color: #0c79b8;
    padding: 1.85rem 1rem 1.9rem 1rem;
    border: hidden;
    font-size: 1.25rem;
    text-decoration: none;
  }

    a:hover {
      text-decoration: none;
      color: white;
      background-color: #0b6da5;
    }
</style>
