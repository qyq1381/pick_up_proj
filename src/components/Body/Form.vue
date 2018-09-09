<template>
  
    <!-- <div id="page1" v-show="currentStep==1" style="background-color:lightgreen">
      <div class="SelectContainer">
        <div>Flight Number:<input v-model="passengerInfo.flightNumber" class="inputbox"/></div>
        <div>Departure Date<input v-model="passengerInfo.departureDate" type="date" class="inputbox"/></div>
        <div>Number of passenger:<input v-model="passengerInfo.Passenger" class="inputbox" @keypress="isNumber(event)"/></div>
        <div>Number of large luggage:<input v-model="passengerInfo.largeLuggage" class="inputbox" @keypress="isNumber(event)"/></div>
        <div>Number of small luggage:<input v-model="passengerInfo.smallLuggage" class="inputbox" @keypress="isNumber(event)" /></div>
      </div>
      <div>
        <button id="submitbutton" @click="currentStep++" :class="'enableBTN'">Continue</button>
      </div>
    </div>
    <div id="page2" v-show="currentStep==2" style="background-color:lightyellow">
      <div class="SelectContainer">
        <div>First Name:<input v-model="passengerInfo.firstName" class="inputbox" /></div>
        <div>Last Name:<input v-model="passengerInfo.lastName" class="inputbox" /></div>
        <div>E-mail:<input v-model="passengerInfo.email" type="email" class="inputbox" /></div>
        <div>WeChat ID:<input v-model="passengerInfo.wechat" class="inputbox" /></div>
      </div>
      <div>
        <div>
          <button id="submitbutton" @click="currentStep--" :class="'enableBTN'">Previous</button>
          <button id="submitbutton" @click="currentStep++" :class="'enableBTN'">Continue</button>
        </div>
      </div>
    </div>
    <div id="page3" v-show="currentStep==3" style="background-color:lightblue">
      <div class="SelectContainer">
        <div>Address line 1:<input v-model="passengerInfo.address_line_1" class="inputbox" /></div>
        <div>Address line 2:<input v-model="passengerInfo.address_line_2" class="inputbox" /></div>
        <div>City:<input v-model="passengerInfo.city"  class="inputbox" /></div>
        <div>State/Province/Region:<input v-model="passengerInfo.state" class="inputbox" /></div>
        <div>Zip/Postal Code:<input v-model="passengerInfo.zip" class="inputbox" @keypress="isNumber(event)"/></div>
        <div>country:<input v-model="passengerInfo.country" class="inputbox" /></div>
      </div>
      <div>
        <button id="submitbutton" @click="currentStep--" :class="'enableBTN'">Previous</button>
        <button id="submitbutton" @click="currentStep++" :class="'enableBTN'">Continue</button>
      </div>
    </div>
    <div id="page4" v-show="currentStep==4" style="background-color:lightpink">
      <div class="SelectContainer">
        <div>Phone number:<input v-model="passengerInfo.phone" input='tel' class="inputbox" @keypress="isNumber(event)"/></div>
      </div>
      <div>
        <button id="submitbutton" @click="currentStep--" :class="'enableBTN'">Previous</button>
        <button id="submitbutton" @click="submitvalue()" :class="'enableBTN'">Submit</button>
      </div>
    </div> -->
   <v-app id="inspire">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step step="3">Name of step 3</v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
          ></v-card>
  
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
  
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
          ></v-card>
  
          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>
  
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="3">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
          ></v-card>
  
          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Continue
          </v-btn>
  
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
  </div>
</template>

<script>
  // import eventmethods from "../../services/api/eventmethods.js";
  // import stepProgress from '../Body/stepProgress.vue'
  export default {
  //   components: {
  //     stepProgress
  //   },
  //   data() {
  //     return {
  //       currentStep: 1,
  //       stepName: ['Pick Up Info', 'Your Info', 'Destination', 'Phone Number'],
  //       passengerInfo: {
  //         firstName: '',
  //         lastName: '',
  //         phone: '',
  //         flightNumber: '',
  //         Passenger: '',
  //         largeLuggage: '',
  //         smallLuggage: '',
  //         email: '',
  //         wechat: '',
  //         address_line_1: '',
  //         address_line_2: '',
  //         city: '',
  //         state: '',
  //         zip: '',
  //         country: '',
  //         departureDate:''
  //       }

  //     }
  //   },
  //   methods: {
  //     sendevent: eventmethods.sendeventform,
  //     submitvalue: function () {
  //       this.sendevent(this.passengerInfo);
  //     },
  //     submit: function () {
  //       alert('You Complete the pages, Yea!!')
  //     },
  //     isNumber: function (evt) {
  //       evt = (evt) ? evt : window.event;
  //       var charCode = (evt.which) ? evt.which : evt.keyCode;
  //       if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
  //         evt.preventDefault();;
  //       } else {
  //         return true;
  //       }
  //     }
  //   }
   }
</script>

<style scoped>

  /* #root {
    display: flex;
    flex-direction: column;
  } */

  /* #page1, #page2, #page3, #page4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-grow: 1;
  }

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
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: stretch;
    text-align: left;
    align-self: center;
    flex-grow: 1;
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
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    margin-bottom: 2rem;
  } */
</style>
