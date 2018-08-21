<template>
  <div id="root">
    <step-progress :length="4" :currentStep="currentStep" :stepName="stepName"></step-progress>
    <!--
  <div class="SelectContainer">
        <div>First Name:<input v-model="passengerInfo.firstName" class="inputbox" /></div>
        <div>Last Name:<input v-model="passengerInfo.lastName" class="inputbox" /></div>
        <div>Phone Number:<input v-model="passengerInfo.phone" class="inputbox" /></div>
        <div>Flight Number:<input v-model="passengerInfo.flightNumber" class="inputbox" /></div>
        <div>Number of passenger:<input v-model="passengerInfo.numpassenger" class="inputbox" /></div>
        <div>Weight of luggage:<input v-model="passengerInfo.luggage" class="inputbox" /></div>
        <button id="submitbutton" @click="" :class="'enableBTN'">Continue</button>
      </div>
  -->
    <div id="page1" v-show="currentStep==1" style="background-color:lightgreen">
      <h1>this is page 1</h1>
      <div>
        <button id="submitbutton" @click="currentStep++" :class="'enableBTN'">Continue</button>
      </div>
    </div>
    <div id="page2" v-show="currentStep==2" style="background-color:lightyellow">
      <h1>this is page 2</h1>
      <div>
        <div>
          <button id="submitbutton" @click="currentStep--" :class="'enableBTN'">Previous</button>
          <button id="submitbutton" @click="currentStep++" :class="'enableBTN'">Continue</button>
        </div>      </div>
    </div>
    <div id="page3" v-show="currentStep==3" style="background-color:lightblue">
      <h1>this is page 3</h1>
      <div>
        <button id="submitbutton" @click="currentStep--" :class="'enableBTN'">Previous</button>
        <button id="submitbutton" @click="currentStep++" :class="'enableBTN'">Continue</button>
      </div>    </div>
    <div id="page4" v-show="currentStep==4" style="background-color:lightpink">
      <h1>this is page 4</h1>
      <div>
        <button id="submitbutton" @click="currentStep--" :class="'enableBTN'">Previous</button>
        <button id="submitbutton" @click="submitvalue('1','2')" :class="'enableBTN'">Submit</button>
      </div>    </div>

  </div>
</template>

<script>
  import usermethods from "../../api/usermethods.js";
  import stepProgress from '../Body/stepProgress.vue'
  export default {
    components: {
      stepProgress
    },
    data() {
      return {
        currentStep:1,
        stepName: ['page1', 'page2', 'page3', 'page4'],
        passengerInfo: {
          firstName: '',
          lastName: '',
          phone: '',
          flightNumber: '',
          numpassenger: '',
          luggage: '',
        }

      }
    },
    methods: {
      sendloginform: usermethods.sendloginform,
      submitvalue: function (username, password) {
        this.sendloginform(username, password);
      },
      submit: function () {
        alert('You Complete the pages, Yea!!')
      }
    }
  }
</script>

<style scoped>


  .disableBTN,
  .enableBTN {
    margin: 0 50px 40px 50px;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    color: #fff;
    background-color: #f0ad4e;
    border-color: #f0ad4e;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
  }

    .enableBTN:hover {
      cursor: pointer;
    }

  .SelectContainer {
    margin-top: 2rem;
    padding: 40px 0 40px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  #form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    border: 1px #aaa solid;
    border-radius: 4px;
    background: 0 0;
    text-align: left;
    font-size: 20px;
    width: 438px;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
  }
</style>
