<template>
  <button v-on:click="onClick">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span :class="IconClass"></span>&nbsp;<slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'navbar_icon',
    props: {
      IconClass: String,
    },
    methods: {
      onClick: function () {
        this.$emit('click')
      }
    }
  }
</script>
<style scoped>
  button {
    color: white;
    background-color: #0c79b8;
    padding: 1.85rem 1rem 1.9rem 1rem;
    border: hidden;
    font-size: 1.25rem;
    text-decoration: none;
  }

    button:hover {
      cursor:pointer;
      text-decoration: none;
      color: white;
      background-color: #0b6da5;
    }
</style>
