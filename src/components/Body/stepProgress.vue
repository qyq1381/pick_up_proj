<template>
    <div class="container">
      <ul class="progressbar">
        <li :class="[i<=currentStep? 'active':'']" v-for="i in length" :key="i">{{stepName[i-1]}}</li>
      </ul>
    </div>
  
</template>
<script>
  export default {
    props: {
      'length': Number,
      'currentStep': Number,
      'stepName': Array,
    },
  data () {
    return {
    }
  },
}
</script>
<style scoped>
  .container {
    width: 100%;
    display:flex;
    flex-direction:column;
    z-index: 1;
    margin-top: 20px;
  }

  .progressbar {
    counter-reset: step;
    padding: 0 0 0 0;
    display: flex;
    justify-content:center;
  }

    .progressbar li {
      
      width: 14.28%;
      position: relative;
      text-align: center;
      list-style-type:none;
    }

      .progressbar li:before {
        content: counter(step);
        counter-increment: step;
        width: 30px;
        height: 30px;
        border: 2px solid #bebebe;
        display: block;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        line-height: 27px;
        background: white;
        color: #bebebe;
        text-align: center;
        font-weight: bold;
      }

      .progressbar li:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background: #979797;
        top: 15px;
        left: -50%;
        z-index: -1;
      }

      .progressbar li.active:before {
        border-color: #3aac5d;
        background: #3aac5d;
        color: white
      }

      .progressbar li.active:after {
        background: #3aac5d;
      }

      .progressbar li.active - li:after {
        background: #3aac5d;
      }

      .progressbar li.active - li:before {
        border-color: #3aac5d;
        background: #3aac5d;
        color: white
      }

      .progressbar li:first-child:after {
        content: none;
      }
</style>
