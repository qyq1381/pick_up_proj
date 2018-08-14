<template>
  <div id="app">
    <navbar></navbar>
    <input_form></input_form>
    <process_main title="There is nothing to it."></process_main>
    <section>
      <table_main></table_main>
    </section>
    <footer_main></footer_main>
  </div>
</template>

<script>
  import navbar from './components/NavBar.vue'
  import input_form from './components/Form.vue'
  import process_main from './components/Process_main.vue'
  import table_main from './components/table.vue'
  import footer_main from './components/footer.vue'
  export default {
    name: 'App',
    components: {
      navbar,
      input_form,
      process_main,
      table_main,
      footer_main
    }

  }
</script>

<style>
  #app {
    font-family: 'Hind', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  section {
    padding: 50px;
  }
</style>
