<template>
  <v-container>

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :rules="[() =>passengerInfo.departureDate!=''&& passengerInfo.flightNumber!=''&&passengerInfo.numpassenger!=''&& passengerInfo.largeLuggage!=''&&passengerInfo.smallLuggage!='']" :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :rules="[() => passengerInfo.firstName!=''&&passengerInfo.lastName!=''&& passengerInfo.email!='']" :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :rules="[() => passengerInfo.address_line_1!=''&&passengerInfo.city!=''&& passengerInfo.state!=''&& passengerInfo.zip!=''&& passengerInfo.country!='']" :complete="e1 > 3" step="3">Name of step 3</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :rules="[() => passengerInfo.firstName!=''&&passengerInfo.lastName!=''&& passengerInfo.email!='']" step="4">Name of step 4</v-stepper-step>

      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content  step="1">

          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>

                  <v-text-field v-model="passengerInfo.flightNumber"
                                :rules="[() => !!passengerInfo.flightNumber || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Flight Number*"
                                mask="AA####A"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.departureDate"
                                :rules="[() => !!passengerInfo.departureDate || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Departure Date*"
                                type="date"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.Passenger"
                                :rules="[() => !!passengerInfo.Passenger || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Number of passenger*"
                                mask="##"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.largeLuggage"
                                :rules="[() => !!passengerInfo.largeLuggage || 'This field is required']"
                                :error-messages="errorMessages"
                                mask="##"
                                label="Number of large luggage*"
                                placeholder="large luggage Standard"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.smallLuggage"
                                :rules="[() => !!passengerInfo.smallLuggage || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Number of small luggage*"
                                placeholder="small luggage Standard"
                                mask="##"
                                required></v-text-field>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>

              </v-card>
            </v-flex>
          </v-layout>


          <v-btn color="primary"
                 @click="e1 = 2">
            Continue
          </v-btn>

        </v-stepper-content>

        <v-stepper-content step="2">
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>
                  <v-text-field v-model="passengerInfo.firstName"
                                :rules="[() => !!passengerInfo.firstName || 'This field is required']"
                                :error-messages="errorMessages"
                                label="First Name*"
                                placeholder="John"
                                mask="AAAAAAAAAAA"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.lastName"
                                :rules="[() => !!passengerInfo.lastName || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Last Name*"
                                placeholder="Doe"
                                mask="AAAAAAAAAAA"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.email"
                                :rules="[() => !!passengerInfo.email || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Email*"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.wechat"
                                :error-messages="errorMessages"
                                label="WeChat"></v-text-field>

                </v-card-text>
                <v-divider class="mt-5"></v-divider>

              </v-card>
            </v-flex>
          </v-layout>

          <v-btn flat @click="e1 = 1">Previous</v-btn>
          <v-btn color="primary"
                 @click="e1 = 3">
            Continue
          </v-btn>


        </v-stepper-content>

        <v-stepper-content step="3">
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>
                  <v-text-field v-model="passengerInfo.address_line_1"
                                label="Address line 1*"
                                placeholder="Snowy Rock Pl"
                                counter="25"
                                required
                                :rules="[
                                ()=>
                    !!passengerInfo.address_line_1 || 'This field is required',
                    () => !!passengerInfo.address_line_1 && passengerInfo.address_line_1.length <= 25 || 'Address must be less than 25 characters',
                    addressCheck
                    ]"
                    >
                  </v-text-field>
                  <v-text-field v-model="passengerInfo.address_line_2"
                                label="Address line 2"
                                placeholder="Snowy Rock Pl"
                                counter="25"
                             
                    >
                  </v-text-field>
                  <v-text-field :rules="[() => !!passengerInfo.city || 'This field is required', addressCheck]"
                                v-model="passengerInfo.city"
                                label="City*"
                                placeholder="El Paso"
                                mask="AAAAAAAAAAA"
                                required></v-text-field>
                  <v-text-field v-model="passengerInfo.state"
                                :rules="[() => !!passengerInfo.state || 'This field is required']"
                                label="State/Province/Region*"
                                required
                                mask="AA"
                                placeholder="TX"></v-text-field>
                  <v-text-field :rules="[() => !!passengerInfo.zip || 'This field is required']"
                                v-model="passengerInfo.zip"
                                label="ZIP / Postal Code*"
                                required
                                mask="#####"
                                placeholder="79938"></v-text-field>

                  <v-autocomplete :rules="[() => !!passengerInfo.country || 'This field is required']"
                                  :items="countries"
                                  v-model="passengerInfo.country"
                                  label="Country*"
                                  placeholder="Select..."
                                  required></v-autocomplete>

                </v-card-text>
                <v-divider class="mt-5"></v-divider>

              </v-card>
            </v-flex>
          </v-layout>
          <v-btn flat @click="e1 = 2">Prevous</v-btn>
          <v-btn color="primary"
                 @click="e1 = 4">
            Continue
          </v-btn>


        </v-stepper-content>
        <v-stepper-content step="4">
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>

                  <v-text-field v-model="passengerInfo.phone"
                                :error-messages="errorMessages"
                                mask="phone"
                                label="Phone Number"></v-text-field>

                </v-card-text>
                <v-divider class="mt-5"></v-divider>

              </v-card>
            </v-flex>
          </v-layout>
          <v-btn flat @click="e1 = 3">Previous</v-btn>
          <v-btn color="primary"
                 @click="submit">
            Submit
          </v-btn>
          <v-alert :value="formHasErrors"
                   type="error">
            Please complete all require fields!
          </v-alert>

        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
  import eventmethods from "../../services/api/eventmethods.js";
  import stepProgress from '../Body/stepProgress.vue'
  export default {
    components: {
      stepProgress
    },
    computed() {
      return {
        required: {
          firstName: this.passengerInfo.firstName,
          lastName: this.passengerInfo.lastName,
          flightNumber: this.passengerInfo.flightNumber,
          Passenger: this.passengerInfo.Passenger,
          largeLuggage: this.passengerInfo.largeLuggage,
          smallLuggage: this.passengerInfo.smallLuggage,
          email: this.passengerInfo.email,
          address_line_1: this.passengerInfo.address_line_1,
          city: this.passengerInfo.city,
          state: this.passengerInfo.state,
          zip: this.passengerInfo.zip,
          country: this.passengerInfo.country,
          departureDate: this.passengerInfo.departureDate,
        }
      }
    },

    data() {
      return {
        formHasErrors: false,
        countries: ['United States'],
        e1: 0,
        stepName: ['Pick Up Info', 'Your Info', 'Destination', 'Phone Number'],
        passengerInfo: {
          firstName: '',
          lastName: '',
          phone: '',
          flightNumber: '',
          Passenger: '',
          largeLuggage: '',
          smallLuggage: '',
          email: '',
          wechat: '',
          address_line_1: '',
          address_line_2: '',
          city: '',
          state: '',
          zip: '',
          country: '',
          departureDate: ''
        }

      }
    },
    methods: {
      sendevent: eventmethods.sendeventform,
      submitvalue: function () {
        this.sendevent(this.passengerInfo);
      },
      addressCheck: function () {
        this.errorMessages = this.address && !this.name
          ? 'Hey! I\'m required'
          : ''
      },
      submit() {
        
        this.formHasErrors = false

        this.required.forEach(f => {
          if (!this.required[f]) this.formHasErrors = true
        })
        if (!this.formHasErrors) {
          this.sendevent(this.passengerInfo);
        }
      }
    }
  }
</script>


