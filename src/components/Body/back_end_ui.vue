<template>
  <div>
    <input type="text" v-on:input="changeTitle" />
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'back',
  data() {
    return{
    title:'Hello World'
  }
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
      return this.title;
    }
  }
};
</script>

<style scoped>

</style>